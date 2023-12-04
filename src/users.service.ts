import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';
import { LoginParam } from './interface';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  findUsernamePassword(param: LoginParam): Promise<User | null> {
    return this.usersRepository.findOne({
      where: { username: param.username || '', password: param.password || '' },
    });
  }
}
