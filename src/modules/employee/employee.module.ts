import { EmployeeController } from './employee.controller';
import { Module } from '@nestjs/common';
import { employee } from './entity/employee.entity';
import { employeeResponse } from './response/employee.response';

import { EmployeeService } from './employee.service';

@Module({
  imports: [],
  controllers: [EmployeeController],
  providers: [EmployeeService],
  exports: [EmployeeService],
})
export class EmployeeModule {}
