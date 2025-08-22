import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Query,
  Req,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { AuthGuard } from 'src/auth/auth.guard';
import { RequestWithUser } from 'src/utils/request-with-user';
import { responseInterceptor } from 'src/utils/response.interceptor';
import {
  fetchCategoryProjectsDto,
  fetchProjectsDto,
  upsertProjectDto,
} from './projects.dto';
import { ProjectsService } from './projects.service';

@UseInterceptors(responseInterceptor)
@Controller('projects')
export class ProjectsController {
  constructor(private readonly projectsService: ProjectsService) { }

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

  @Post('one/:id') // only for admin panel
  fetchOneProject(@Param('id') id: string) {
    return this.projectsService.fetchOneProject(id);
  }

  @Get('name/:slug') // only for admin panel
  fetchOneProjectViaSlug(@Param('slug') slug: string) {
    return this.projectsService.fetchOneProjectViaSlug(slug);
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

  @Get('/make-slug')
  slugMaker(@Query('key') key: string) {
    if (key !== 'make-me-a-slug-123') return 'Not Allowed';
    return this.projectsService.makeSlug();
  }
}
