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
import { employee } from './entity/employee.entity';
import { employeeResponse } from './response/employee.response';
@Injectable()
export class EmployeeService {

  constructor(@InjectRepository(employee) private readonly repository: Repository<employee>) { }

  create(employeeDto: employee): Promise<employee> {
    const employe = this.repository.create(employeeDto);
    return this.repository.save(employe);
  }
 
  getEmployeeByDesignation(designation): Promise<employee[]> {
    var data= this.repository.find({designation:designation});
    return data;
  }
 
  findOne(id: string): Promise<employee> {
    return this.repository.findOne(id);
  }
 
  async update(id: string, updateItemDto: employee): Promise<employee> {
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


