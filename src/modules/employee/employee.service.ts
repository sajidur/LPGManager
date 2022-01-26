/*
 * Created on Wed april 1 2021
 * Copyright (c) 2021 by Brac-UPG Programme
 * All Rights Reserved by BRAC
 * Powered By BMQA
 * BMQA-BRAC Confidential
 */
import { Injectable } from '@nestjs/common';
import { employee } from './entity/employee.entity';
import { employeeResponse } from './response/employee.response';
@Injectable()
export class EmployeeService {
  constructor(
  ) {}


  async getEmployeeByDesignation(
    designation
  ): Promise<employeeResponse> {
    var emp= new employeeResponse(null);
    emp.name='test';
    return emp;
  }

}


