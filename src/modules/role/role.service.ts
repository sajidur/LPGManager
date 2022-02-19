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
import { Role } from './entity/role.entity';
import { RoleResponse } from './response/role.response';
@Injectable()
export class RoleService {

  constructor(@InjectRepository(Role) private readonly repository: Repository<Role>) { }

  create(ObjDto: Role): Promise<Role> {
    const obj = this.repository.create(ObjDto);
    return this.repository.save(obj);
  }
 
  findOne(id: string): Promise<Role> {
    return this.repository.findOne(id);
  }
 
  async remove(id: string) {
    const item = await this.findOne(id);
    return this.repository.remove(item);
  }

}


