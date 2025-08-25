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
import { FackeGuard } from 'src/auth/facke.guard';
import { RequestWithUser } from 'src/utils/request-with-user';
import { responseInterceptor } from 'src/utils/response.interceptor';
import { PaginationParams } from '../common/decorators/pagination-params.decorator';
import { PaginationRequest } from '../common/interfaces';
import { UpsertNewsDto } from './news.dto';
import { NewsService } from './news.service';

@UseInterceptors(responseInterceptor)
@Controller('news')
export class NewsController {
  constructor(private readonly newsService: NewsService) {}

  @UseGuards(AuthGuard)
  @Post('/upsert')
  upsertNews(@Body() dto: UpsertNewsDto, @Req() req: RequestWithUser) {
    return this.newsService.upsertNews(dto, req.id);
  }

  @UseGuards(FackeGuard)
  @Post('all')
  fetchAdminNews(
    @PaginationParams() pagination: PaginationRequest,
    @Req() req: RequestWithUser,
  ) {
    return this.newsService.fetchAdminNews(pagination, req?.id ? req?.id : '');
  }

  @UseGuards(FackeGuard)
  @Get('/one/:id')
  fetchOneNews(@Param('id') id: string, @Req() req: RequestWithUser) {
    return this.newsService.fetchOneNews(id, req.id);
  }

  @UseGuards(FackeGuard)
  @Get('/name/:slug')
  fetchOneNewsViaSlug(
    @Param('slug') slug: string,
    @Req() req: RequestWithUser,
  ) {
    return this.newsService.fetchOneNewsViaSlug(slug, req.id);
  }

  @UseGuards(AuthGuard)
  @Post('/remove/:newsId')
  removeNews(@Param('newsId') newsId: string, @Req() req: RequestWithUser) {
    return this.newsService.removeNews(newsId, req.id);
  }

  @UseGuards(FackeGuard)
  @Get('/make-slug')
  slugMaker(@Query('key') key: string) {
    if (key !== 'make-me-a-slug-123') return 'Not Allowed';
    return this.newsService.makeSlug();
  }
}
