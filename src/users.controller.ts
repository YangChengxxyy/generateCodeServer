import { Body, Controller, Post } from '@nestjs/common';
import { User } from './user.entity';
import { UsersService } from './users.service';
import { CodeError, LoginParam } from './interface';

@Controller('/api')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post('/login')
  async findAll(@Body() param: LoginParam): Promise<User | null> {
    if (param === null) {
      throw new CodeError('USER NOT FOUND', 'ILLEGAL_PARAM');
    }
    const res = await this.usersService.findUsernamePassword(param);
    if (res === null) {
      throw new CodeError(
        `USER:${JSON.stringify(param)} NOT FOUND`,
        'USER_NOT_FOUNT',
      );
    }
    return res;
  }
}
