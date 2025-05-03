import { Module, Global } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { JwtModule } from '@nestjs/jwt';

@Global()
@Module({
  controllers: [AuthController],
  providers: [AuthService],
  imports: [
    JwtModule.register({
      secret: process.env.PRIVATE_KEY, //|| 'SECRET',
      signOptions: {},
    }),
  ],
  exports: [JwtModule, AuthService],
})
export class AuthModule {}
