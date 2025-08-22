import { Module } from '@nestjs/common';
import { SlugUtil } from '@utils/slug.util';
import { NewsController } from './news.controller';
import { NewsService } from './news.service';

@Module({
  controllers: [NewsController],
  providers: [NewsService, SlugUtil],
})
export class NewsModule { }
