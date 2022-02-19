import { SupplierController } from './supplier.controller';
import { Module } from '@nestjs/common';
import { Supplier } from './entity/supplier.entity';
import { SupplierResponse } from './response/supplier.response';

import { SupplierService } from './supplier.service';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Supplier])],
  controllers: [SupplierController],
  providers: [SupplierService],
  exports: [SupplierService],
})
export class SupplierModule {}
