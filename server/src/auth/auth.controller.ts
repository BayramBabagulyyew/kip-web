import {
  Controller,
  Post,
  Body,
  UseInterceptors,
  UseGuards,
  Req,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { ChangePasswordDto, singUpDto } from 'src/users/user.dto';
import { responseInterceptor } from 'src/utils/response.interceptor';
import { AuthGuard } from './auth.guard';
import { RequestWithUser } from 'src/utils/request-with-user';

@UseInterceptors(responseInterceptor)
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('signup')
  signUp(@Body() dto: singUpDto) {
    return this.authService.signUp(dto);
  }

  @Post('signin')
  singIn(@Body() dto: singUpDto) {
    return this.authService.signIn(dto);
  }

  @UseGuards(AuthGuard)
  @Post('change-password')
  changePassword(@Req() req: RequestWithUser, @Body() dto: ChangePasswordDto) {
    const userId: string = req?.id ? req?.id : '';
    return this.authService.changePassword(dto, userId);
  }
}
