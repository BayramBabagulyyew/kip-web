import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class FackeGuard implements CanActivate {
  constructor(private readonly jwtService: JwtService) { }

  async canActivate(context: ExecutionContext) {
    const req = context.switchToHttp().getRequest();
    try {
      const authHeader = req.headers?.authorization;
      const token = authHeader?.split(' ')[1];
      const user = this.jwtService.verify(token);
      let userId = '';
      userId = user?.id;
      req.id = userId;
      return true;
    } catch (err) {
      req.id = '';
      return true;
    }
  }
}
