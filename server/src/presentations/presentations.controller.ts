import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { AuthGuard } from 'src/auth/auth.guard';
import { responseInterceptor } from 'src/utils/response.interceptor';
import { PaginationParams } from '../common/decorators/pagination-params.decorator';
import { PaginationRequest } from '../common/interfaces';
import { CreatePresentationDto } from './presentations.dto';
import { PresentationsService } from './presentations.service';

@UseInterceptors(responseInterceptor)
@Controller('presentation')
export class PresentationsController {
  constructor(private readonly presentationsService: PresentationsService) {}

  // Public endpoint: client fetches the latest uploaded presentation
  @Get('latest')
  fetchLatest(@Query('language') language?: string) {
    return this.presentationsService.findLatest(language);
  }

  @UseGuards(AuthGuard)
  @Post()
  create(@Body() dto: CreatePresentationDto) {
    return this.presentationsService.create(dto);
  }

  @UseGuards(AuthGuard)
  @Get()
  findAll(@PaginationParams() pagination: PaginationRequest) {
    return this.presentationsService.find(pagination);
  }

  @UseGuards(AuthGuard)
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.presentationsService.findone(id);
  }

  @UseGuards(AuthGuard)
  @Patch(':id')
  update(@Param('id') id: string, @Body() dto: CreatePresentationDto) {
    return this.presentationsService.update(id, dto);
  }

  @UseGuards(AuthGuard)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.presentationsService.remove(id);
  }
}
