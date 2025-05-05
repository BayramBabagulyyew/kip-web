import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Req,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { ProjectsService } from './projects.service';
import { AuthGuard } from 'src/auth/auth.guard';
import {
  fetchCategoryProjectsDto,
  fetchProjectsDto,
  upsertProjectCategoryDto,
  upsertProjectDto,
} from './projects.dto';
import { RequestWithUser } from 'src/utils/request-with-user';
import { FackeGuard } from 'src/auth/facke.guard';
import { responseInterceptor } from 'src/utils/response.interceptor';

@UseInterceptors(responseInterceptor)
@Controller('projects')
export class ProjectsController {
  constructor(private readonly projectsService: ProjectsService) {}

  @UseGuards(AuthGuard)
  @Post('/upsert')
  upsertProject(@Body() dto: upsertProjectDto, @Req() req: RequestWithUser) {
    return this.projectsService.upsertProject(dto, req.id);
  }

  @Post('fetch') // for client only
  fetchCategoryProjects(@Body() dto: fetchCategoryProjectsDto) {
    return this.projectsService.fetchCategoryProjects(dto);
  }

  @UseGuards(AuthGuard)
  @Post('all') // only for admin panel
  fetchProjects(@Body() dto: fetchProjectsDto, @Req() req: RequestWithUser) {
    return this.projectsService.fetchProjects(dto, req?.id ? req?.id : '');
  }

  @Post('one/:projectId') // only for admin panel
  fetchOneProject(@Param('projectId') projectId: string) {
    return this.projectsService.fetchOneProject(projectId);
  }

  @UseGuards(AuthGuard)
  @Post('remove/:projectId')
  removeProject(
    @Param('projectId') projectId: string,
    @Req() req: RequestWithUser,
  ) {
    return this.projectsService.removeProject(
      projectId,
      req?.id ? req?.id : '',
    );
  }
}
