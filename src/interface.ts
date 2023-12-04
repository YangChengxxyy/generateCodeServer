import { ApiProperty } from '@nestjs/swagger';

export class LoginParam {
  @ApiProperty()
  username: string;
  @ApiProperty()
  password: string;
}

export class CodeError extends Error {
  code: string;
  constructor(msg: string, code?: string) {
    super(msg);
    this.code = code || 'DEFAULT';
  }
}
