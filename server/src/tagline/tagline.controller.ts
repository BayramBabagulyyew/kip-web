import {
  Body,
  Controller,
  Get,
  Delete,
  Param,
  Patch,
  Post,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { TaglineService } from './tagline.service';
import { responseInterceptor } from 'src/utils/response.interceptor';
import { AuthGuard } from 'src/auth/auth.guard';
import { CreateTaglineDto } from './tagline.dto';
import { PaginationParams } from '../common/decorators/pagination-params.decorator';
import { PaginationRequest } from '../common/interfaces';

@UseInterceptors(responseInterceptor)
@UseGuards(AuthGuard)
@Controller('tagline')
export class TaglineController {
  constructor(private readonly taglineService: TaglineService) {}

  @Post()
  upsertNews(@Body() dto: CreateTaglineDto) {
    return this.taglineService.create(dto);
  }

  @Get()
  fetchAdminNews(@PaginationParams() pagination: PaginationRequest) {
    return this.taglineService.find(pagination);
  }

  @Get(':id')
  fetchOneNews(@Param('id') id: string) {
    return this.taglineService.findone(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() dto: CreateTaglineDto) {
    return this.taglineService.update(id, dto);
  }

  @Delete(':id')
  removeNews(@Param('id') id: string) {
    return this.taglineService.remove(id);
  }
}
