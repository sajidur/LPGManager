import { SettingsController } from './settings.controller';
import { Module } from '@nestjs/common';
import { Product } from './entity/product.entity';
import { ProductType } from './entity/product_type.entity';
import { Size } from './entity/size.entity';
import { Warehouse } from './entity/warehouse.entity';

import { ProductResponse } from './response/product.response';

import { SettingsService } from './settings.service';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Product,ProductType,Size,Warehouse])],
  controllers: [SettingsController],
  providers: [SettingsService],
  exports: [SettingsService],
})
export class SettingsModule {}
