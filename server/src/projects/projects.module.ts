import { Module } from '@nestjs/common';
import { SlugUtil } from '@utils/slug.util';
import { ProjectsController } from './projects.controller';
import { ProjectsService } from './projects.service';

@Module({
  controllers: [ProjectsController],
  providers: [ProjectsService, SlugUtil],
})
export class ProjectsModule { }
