import { IsEmail, IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class employeeResponse {
  @ApiProperty()
  id: string;
  @IsNotEmpty()
  @ApiProperty()
  name: string;

  @ApiProperty()
  @IsNotEmpty()
  image: string;

  @ApiProperty()
  @IsNotEmpty()
  designation = false;

  @ApiProperty()
  @IsNotEmpty()
  salary: number;
  constructor(props) {
    Object.assign(this, props);
  }
}