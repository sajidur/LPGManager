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
import { User } from './entity/user.entity';
import { UserResponse } from './response/user.response';
@Injectable()
export class UserService {

  constructor(@InjectRepository(User) private readonly repository: Repository<User>) { }

  create(employeeDto: User): Promise<User> {
    const employe = this.repository.create(employeeDto);
    return this.repository.save(employe);
  }
 
  getEmployeeByDesignation(designation): Promise<User[]> {
    var data= this.repository.find({designation:designation});
    return data;
  }
 
  findOne(id: string): Promise<User> {
    return this.repository.findOne(id);
  }
 
  async update(id: string, updateItemDto: User): Promise<User> {
    const item = await this.repository.preload({
      id: id,
      ...updateItemDto,
    });
    if (!item) {
      throw new NotFoundException(`employee ${id} not found`);
    }
    return this.repository.save(item);
  }
 
  async remove(id: string) {
    const item = await this.findOne(id);
    return this.repository.remove(item);
  }

}


