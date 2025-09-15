import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
  Req,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { RequestWithUser } from '@utils/request-with-user';
import { AuthGuard } from 'src/auth/auth.guard';
import { FackeGuard } from 'src/auth/facke.guard';
import { responseInterceptor } from 'src/utils/response.interceptor';
import { PaginationParams } from '../common/decorators/pagination-params.decorator';
import { PaginationRequest } from '../common/interfaces';
import { PartnerService } from './partner.service';
import { CreatePartnerDto } from './partners/create-partner.dto';

@UseInterceptors(responseInterceptor)
@Controller('partner')
export class PartnerController {
  constructor(private readonly partnerService: PartnerService) { }

  @UseGuards(AuthGuard)
  @Post()
  create(@Body() dto: CreatePartnerDto, @Req() req: RequestWithUser) {
    return this.partnerService.create(dto, req.id ?? '');
  }

  @Get()
  findAll(@PaginationParams() pagination: PaginationRequest, @Req() req: RequestWithUser) {
    return this.partnerService.findAll(pagination, req?.id || '');
  }

  @UseGuards(AuthGuard)
  @Get('by/:id')
  fetchOneBySlug(@Param('id') id: string) {
    return this.partnerService.findone(id);
  }

  @UseGuards(FackeGuard)
  @Get('/make-slug')
  slugMaker(@Query('key') key: string) {
    if (key !== 'make-me-a-slug-123') return 'Not Allowed';
    return this.partnerService.makeSlug();
  }

  @Get(':slug')
  getOne(@Param('slug') slug: string) {
    return this.partnerService.findBySlug(slug);
  }

  @UseGuards(AuthGuard)
  @Patch(':id')
  update(@Param('id') id: string, @Body() dto: CreatePartnerDto, @Req() req: RequestWithUser) {
    return this.partnerService.update(id, dto, req.id);
  }

  @UseGuards(AuthGuard)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.partnerService.remove(id);
  }

}

