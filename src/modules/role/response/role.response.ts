import { IsEmail, IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class RoleResponse {

  id: string;

  @IsNotEmpty()
  @ApiProperty()
  name: string;
  constructor(props) {
    Object.assign(this, props);
  }
}