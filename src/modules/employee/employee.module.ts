import { EmployeeController } from './employee.controller';
import { Module } from '@nestjs/common';
import { employee } from './entity/employee.entity';
import { employeeResponse } from './response/employee.response';

import { EmployeeService } from './employee.service';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([employee])],
  controllers: [EmployeeController],
  providers: [EmployeeService],
  exports: [EmployeeService],
})
export class EmployeeModule {}
