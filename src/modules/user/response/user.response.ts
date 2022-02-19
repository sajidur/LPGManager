import { IsEmail, IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class UserResponse {

  @IsNotEmpty()
  @ApiProperty()
  name: string;

  @ApiProperty()
  @IsNotEmpty()
  image: string;

  @ApiProperty()
  @IsNotEmpty()
  designation : string;

  @ApiProperty()
  @IsNotEmpty()
  salary: number;
  constructor(props) {
    Object.assign(this, props);
  }
}