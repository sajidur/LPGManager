import { IsEmail, IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class SupplierResponse {

  @IsNotEmpty()
  @ApiProperty()
  name: string;

  @ApiProperty()
  @IsNotEmpty()
  image: string;

  @ApiProperty()
  @IsNotEmpty()
  address : string;

  @ApiProperty()
  @IsNotEmpty()
  phone: number;

  @ApiProperty()
  @IsNotEmpty()
  company_type: number;
  constructor(props) {
    Object.assign(this, props);
  }
}