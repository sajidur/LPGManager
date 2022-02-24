/*
 * Created on Wed april 1 2021
 * Copyright (c) 2021 by Brac-UPG Programme
 * All Rights Reserved by BRAC
 * Powered By BMQA
 * BMQA-BRAC Confidential
 */
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Inventory } from './entity/inventory.entity';
@Injectable()
export class InventoryService {

  constructor(@InjectRepository(Inventory) private readonly repository: Repository<Inventory>) { }

  create(inventotyDto: Inventory): Promise<Inventory> {
    const employe = this.repository.create(inventotyDto);
    return this.repository.save(employe);
  }
  add(inv:Inventory):Promise<Inventory>{
     let existingInv=this.repository.findOne(inv).then(a=>{
      if(existingInv!=null){
          a.quantity+=inv.quantity;
          a.price+=inv.price;
          a.DamageQuantity+=a.DamageQuantity;
          a.OpeningQuantity+=a.OpeningQuantity;
          a.ReceivingQuantity+=a.ReceivingQuantity;
          a.SaleQuantity+=a.SaleQuantity;
          this.update(a.id,a);
      }
      else{
        this.create(inv);
      }
  });
  return null;
}
  minus(inv:Inventory):Promise<Inventory>{
    let existingInv=this.findOne(inv);
    if(existingInv!=null){
      existingInv.then(a=>{
        a.quantity+=inv.quantity;
        a.price+=inv.price;
        a.DamageQuantity+=a.DamageQuantity;
        a.OpeningQuantity+=a.OpeningQuantity;
        a.ReceivingQuantity+=a.ReceivingQuantity;
        a.SaleQuantity+=a.SaleQuantity;
        this.update(a.id,a);
      }
      );
    }
    return existingInv;
  }
  findOne(inv: Inventory): Promise<Inventory> {
    return this.repository.findOne({ProductName:inv.ProductName,SupplierId:inv.SupplierId,size:inv.size,product_type:inv.product_type});
  }
 
  all(): Promise<Inventory[]> {
    return this.repository.createQueryBuilder("inventory").getMany();
  }
  async update(id: number, updateItemDto: Inventory): Promise<Inventory> {
    const item = await this.repository.preload({
      id: id,
      ...updateItemDto,
    });
    if (!item) {
      throw new NotFoundException(`inventory ${id} not found`);
    }
    return this.repository.save(item);
  }

}


