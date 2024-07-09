import { Controller, Get, Param } from '@nestjs/common';
import { districts, regions, wards } from '@tanzania/regions';

@Controller('regions')
export class RegionsController {
  // constructor(private readonly scraperService: ScraperService) {}

  @Get()
  getRegions() {
    return regions();
  }

  // ? This route is for scraping data from tanzaniapostcode.com and is used only during development to generate required json data
  // @Get('scrape')
  // scrapeRegions() {
  //   this.scraperService.scrapeRegions();
  //   return { message: 'Scraping...' };
  // }

  @Get(':region')
  getDistricts(@Param('region') region: string) {
    return districts(region);
  }

  @Get(':region/districts/:district')
  getWards(
    @Param('region') region: string,
    @Param('district') district: string,
  ) {
    return wards(region, district);
  }
}
