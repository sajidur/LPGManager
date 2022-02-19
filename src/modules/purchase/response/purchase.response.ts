import { IsEmail, IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class PurchaseDetailsResponse {

    id: string;
  
    @IsNotEmpty()
    @ApiProperty()
    PurchaseMasterId: number;
  
    @ApiProperty()
    @IsNotEmpty()
    SupplierId: number;
  
    @ApiProperty()
    @IsNotEmpty()
    ProductName : string;
  
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
export class PurchaseMasterResponse {

  id: string;

  @IsNotEmpty()
  @ApiProperty()
  OrderNo: string;

  @ApiProperty()
  @IsNotEmpty()
  SupplierId: number;

  @ApiProperty()
  @IsNotEmpty()
  TotalPrice : number;

  @ApiProperty()
  @IsNotEmpty()
  TotalCommission: number;

  @ApiProperty()
  @IsNotEmpty()
  WarehouseId : number;

  @ApiProperty()
  @IsNotEmpty()
  DueAdvance : number;

  @ApiProperty()
  @IsNotEmpty()
  PaymentType : number;

  @ApiProperty()
  @IsNotEmpty()
  Notes : string;

  @ApiProperty({ type: PurchaseDetailsResponse, isArray: true })
  @IsNotEmpty()
  PurchaseDetails:PurchaseDetailsResponse[];
  constructor(props) {
    Object.assign(this, props);
  }
}
