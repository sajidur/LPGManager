import { IsEmail, IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class SizeResponse {
    @ApiProperty()
    id: number;
    @IsNotEmpty()
    @ApiProperty()
    name: string;
  constructor(props) {
    Object.assign(this, props);
  }
}