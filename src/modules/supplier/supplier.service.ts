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
import { Supplier } from './entity/supplier.entity';
import { SupplierResponse } from './response/supplier.response';
@Injectable()
export class SupplierService {

  constructor(@InjectRepository(Supplier) private readonly repository: Repository<Supplier>) { }

  create(objDto: Supplier): Promise<Supplier> {
    const obj = this.repository.create(objDto);
    return this.repository.save(obj);
  }
 
  findOne(id: string): Promise<Supplier> {
    return this.repository.findOne(id);
  }
 
  async remove(id: string) {
    const item = await this.findOne(id);
    return this.repository.remove(item);
  }

}


