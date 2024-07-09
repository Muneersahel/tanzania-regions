import { Module } from '@nestjs/common';
import { ScraperService } from './scraper.service';

@Module({
  controllers: [],
  providers: [ScraperService],
  exports: [ScraperService],
})
export class ScraperModule {}
