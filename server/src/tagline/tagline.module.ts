import { Module } from '@nestjs/common';
import { TaglineController } from './tagline.controller';
import { TaglineService } from './tagline.service';

@Module({
  controllers: [TaglineController],
  providers: [TaglineService],
  exports: [TaglineService],
})
export class TaglineModule {}
