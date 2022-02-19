import { IsEmail, IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class InventoryResponse {

  id: number;
  @ApiProperty()
  @IsNotEmpty()
  SupplierId: number;

  @ApiProperty()
  @IsNotEmpty()
  ProductName: string;

  @ApiProperty()
  @IsNotEmpty()
  size: string;

  @ApiProperty()
  @IsNotEmpty()
  product_type: string;

  @ApiProperty()
  @IsNotEmpty()
  price: number;

  @ApiProperty()
  @IsNotEmpty()
  quantity: number;

  @ApiProperty()
  @IsNotEmpty()
  WarehouseId: number;

  @ApiProperty()
  @IsNotEmpty()
  OpeningQuantity: number;

  @ApiProperty()
  @IsNotEmpty()
  ReceivingQuantity: number;

  @ApiProperty()
  @IsNotEmpty()
  ReturnQuantity: number;

  @ApiProperty()
  @IsNotEmpty()
  DamageQuantity: number;

  @ApiProperty()
  @IsNotEmpty()
  SaleQuantity: number;
  constructor(props) {
    Object.assign(this, props);
  }
}