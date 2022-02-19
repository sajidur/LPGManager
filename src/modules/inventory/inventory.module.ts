import { InventoryController } from './inventory.controller';
import { Module } from '@nestjs/common';
import { Inventory } from './entity/inventory.entity';

import { InventoryService } from './inventory.service';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Inventory])],
  controllers: [InventoryController],
  providers: [InventoryService],
  exports: [InventoryService],
})
export class InventoryModule {}
