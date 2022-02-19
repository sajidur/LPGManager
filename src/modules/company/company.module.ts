import { CompanyController } from './company.controller';
import { Module } from '@nestjs/common';
import { Company } from './entity/company.entity';
import { CompanyResponse } from './response/company.response';

import { CompanyService } from './company.service';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Company])],
  controllers: [CompanyController],
  providers: [CompanyService],
  exports: [CompanyService],
})
export class CompanyModule {}
