/*
 * Created on Wed april 1 2021
 * Copyright (c) 2021 by Brac-UPG Programme
 * All Rights Reserved by BRAC
 * Powered By BMQA
 * BMQA-BRAC Confidential
 */
import { forwardRef, Inject, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PurchaseDetails } from './entity/purchase-details.entity';
import { PurchaseMaster } from './entity/purchase-master.entity';
import { PurchaseMasterResponse } from './response/purchase.response';
import { InventoryService } from '../inventory/inventory.service';
import { InventoryResponse } from '../inventory/response/inventory.response';
import { Inventory } from '../inventory/entity/inventory.entity';
@Injectable()
export class PurchaseService {

  constructor(
    @InjectRepository(PurchaseMaster) private readonly purchaseMasterRepository: Repository<PurchaseMaster>,
    @InjectRepository(PurchaseDetails) private readonly purchaseDetailsRepository: Repository<PurchaseDetails>,
    @Inject(forwardRef(() => InventoryService))
    private readonly inventoryService: InventoryService)
     { }

  create(Dto: PurchaseMaster): Promise<PurchaseMaster> {
    const employe = this.purchaseMasterRepository.create(Dto);
    var masterId=this.purchaseMasterRepository.save(employe);
    masterId.then(a=>{
      console.log(masterId.then(a=>console.log(a.id)));
      Dto.PurchaseDetails.map(purchase=>{
        const obj = this.purchaseDetailsRepository.create(purchase);
        obj.PurchaseMasterId=a.id;
        this.purchaseDetailsRepository.save(obj);

        let inv=new Inventory(purchase);
        console.log(inv);
        inv.OpeningQuantity=0;
        inv.quantity=0;
        this.inventoryService.add(inv).then((res: any)=>{
          console.log(res);
        });
      });    
    })
    return masterId;
  }
 
  findOne(id: string): Promise<PurchaseMaster> {
    return this.purchaseMasterRepository.findOne(id);
  }
 
  async remove(id: string) {
    const item = await this.findOne(id);
    return this.purchaseMasterRepository.remove(item);
  }

}


