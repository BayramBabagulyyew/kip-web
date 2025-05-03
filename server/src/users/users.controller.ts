import { Controller, Post, Get, Body } from '@nestjs/common';
import { UsersService } from './users.service';
import { singUpDto } from './user.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}
}
