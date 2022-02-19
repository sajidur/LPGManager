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
import { Company } from './entity/company.entity';
import { CompanyResponse } from './response/company.response';
@Injectable()
export class CompanyService {

  constructor(@InjectRepository(Company) private readonly repository: Repository<Company>) { }

  create(employeeDto: Company): Promise<Company> {
    const employe = this.repository.create(employeeDto);
    return this.repository.save(employe);
  }
 
  findOne(id: string): Promise<Company> {
    return this.repository.findOne(id);
  }
  all(): Promise<Company[]> {
    return this.repository.createQueryBuilder("company").getMany();
  }
 
  async remove(id: string) {
    const item = await this.findOne(id);
    return this.repository.remove(item);
  }

}


