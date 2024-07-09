import { Module } from '@nestjs/common';
import { ScheduleModule } from '@nestjs/schedule';
import { ScraperModule } from '@tanzania/scraper';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RegionsModule } from './regions/regions.module';

@Module({
  imports: [ScheduleModule.forRoot(), RegionsModule, ScraperModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
