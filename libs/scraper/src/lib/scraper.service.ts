import { Injectable } from '@nestjs/common';
import * as fs from 'fs';
import * as path from 'path';
import { Page, executablePath } from 'puppeteer';
import puppeteer from 'puppeteer-extra';
import StealthPlugin from 'puppeteer-extra-plugin-stealth';

interface Location {
  name: string;
  slug: string;
}
type District = Location & { wards: Location[] };
type Region = Location & { districts: District[] };

@Injectable()
export class ScraperService {
  private readonly filePath: string;

  constructor() {
    this.filePath = path.join(__dirname, 'assets', 'regions.json');
  }

  // @Cron(CronExpression.EVERY_MINUTE)
  async scrapeRegions() {
    puppeteer.use(StealthPlugin());
    const browser = await puppeteer.launch({
      headless: true,
      executablePath: executablePath(),
    });
    const page = await browser.newPage();

    try {
      await page.goto('https://tanzaniapostcode.com/location');

      const regions = this._parseLocations(
        await this._getValues(page, '.media-heading'),
      );
      await this._delay();

      const regionsWithDistricts: Region[] = [];

      for (let index = 0; index < regions.length; index++) {
        const r = regions[index];
        await page.goto('https://tanzaniapostcode.com/location/' + r.slug);
        const districts = this._parseLocations(
          await this._getValues(page, '.media-heading'),
        );

        const districtWithWards: District[] = [];
        for (let index = 0; index < districts.length; index++) {
          console.log('Getting wards');
          const d = districts[index];
          await page.goto(
            `https://tanzaniapostcode.com/location/${r.slug}/${d.slug}`,
          );
          const wards = this._parseLocations(
            await this._getValues(page, '.media-heading'),
          );
          districtWithWards.push({ ...d, wards });
          console.log(`Wards in ${r.name}, ${d.name}`);
          this._delay();
        }

        regionsWithDistricts.push({ ...r, districts: districtWithWards });
        console.log(`Districts in ${r.name}`);
        this._delay();
      }
      this._writeDataToFile(regionsWithDistricts);
    } catch (error) {
      console.error('Error while scraping:', error);
    } finally {
      await browser.close();
    }
  }

  private async _getValues(page: Page, selector: string) {
    return await page.$$eval(selector, (elements) => {
      return elements.map((element) => {
        const text = element.textContent;
        if (text !== null) {
          return text.replace('\n', '').trim().replace(/\n/g, ' ').trim();
        }
        return '';
      });
    });
  }

  private async _writeDataToFile<T>(data: T): Promise<void> {
    // Ensure the directory exists
    const directory = path.dirname(this.filePath);
    if (!fs.existsSync(directory)) {
      fs.mkdirSync(directory, { recursive: true });
    }

    // Write the data to the JSON file
    return new Promise((resolve, reject) => {
      fs.writeFile(
        this.filePath,
        JSON.stringify(data, null, 2),
        'utf8',
        (err) => {
          if (err) return reject(err);
          resolve();
        },
      );
    });
  }

  private _generateSlug(text: string): string {
    return text
      .toLowerCase()
      .trim()
      .replace(/[^a-z0-9 -]/g, '')
      .replace(/\s+/g, '-')
      .replace(/-+/g, '-');
  }

  private _parseLocations(data: string[]): Location[] {
    return data.map((item) => {
      const match = item.match(/^(.*) \((\d+)\)$/);
      if (match) {
        return {
          name: match[1].trim(),
          slug: this._generateSlug(match[1].trim()),
          // post_code: match[2].trim(),
        };
      }
      throw new Error(`Invalid format: ${item}`);
    });
  }

  private _delay(): Promise<void> {
    const minMilliseconds = 20 * 1000;
    const maxMilliseconds = 30 * 1000;
    const delayTime =
      Math.floor(Math.random() * (maxMilliseconds - minMilliseconds + 1)) +
      minMilliseconds;

    return new Promise((resolve) => setTimeout(resolve, delayTime));
  }
}
