import { Controller, Get } from '@nestjs/common';
import { User } from './user.entity';
import { UsersService } from './users.service';

@Controller()
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get('/users')
  findAll(): Promise<User[]> {
    return this.usersService.findAll();
  }

  @Get('/yang')
  findYang(): Promise<User> {
    return this.usersService.findFirstName('yang');
  }
}
