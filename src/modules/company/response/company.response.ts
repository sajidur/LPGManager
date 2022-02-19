import { IsEmail, IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CompanyResponse {

  id: string;

  @IsNotEmpty()
  @ApiProperty()
  company_name: string;

  @ApiProperty()
  @IsNotEmpty()
  image: string;

  @ApiProperty()
  @IsNotEmpty()
  address : string;

  @ApiProperty()
  @IsNotEmpty()
  phone: number;
  constructor(props) {
    Object.assign(this, props);
  }
}