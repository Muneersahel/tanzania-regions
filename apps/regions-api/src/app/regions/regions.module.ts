import { Module } from '@nestjs/common';
import { ScraperModule } from '@tanzania/scraper';
import { RegionsController } from './regions.controller';
import { RegionsService } from './regions.service';

@Module({
  imports: [ScraperModule],
  controllers: [RegionsController],
  providers: [RegionsService],
})
export class RegionsModule {}
