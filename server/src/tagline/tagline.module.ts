import { Module } from '@nestjs/common';
import { TaglineService } from './tagline.service';
import { TaglineController } from './tagline.controller';

@Module({
  controllers: [TaglineController],
  providers: [TaglineService],
})
export class TaglineModule {}
