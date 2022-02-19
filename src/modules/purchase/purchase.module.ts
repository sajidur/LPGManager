import { PurchaseController } from './purchase.controller';
import { forwardRef, Module } from '@nestjs/common';
import { PurchaseMaster } from './entity/purchase-master.entity';
import { PurchaseDetails } from './entity/purchase-details.entity';

import { PurchaseMasterResponse } from './response/purchase.response';

import { PurchaseService } from './purchase.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { InventoryService } from '../inventory/inventory.service';
import { InventoryModule } from '../inventory/inventory.module';

@Module({
  imports: [TypeOrmModule.forFeature([PurchaseMaster,PurchaseDetails]),forwardRef(() => InventoryModule)],
  controllers: [PurchaseController],
  providers: [PurchaseService],
  exports: [PurchaseService],
})
export class PurchaseModule {}
