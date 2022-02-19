/*
 * Created on Wed april 1 2021
 * Copyright (c) 2021 by Brac-UPG Programme
 * All Rights Reserved by BRAC
 * Powered By BMQA
 * BMQA-BRAC Confidential
 */
import {
    Controller,
    Get,
    Post,
    Body,
    Param,
    Delete,
    Put,
    Req,
    ValidationPipe,
    HttpException,
    HttpStatus,
    HttpCode,
    UseFilters,
    UseInterceptors,
    UsePipes,
    Logger,
    ClassSerializerInterceptor,
    Query,
  } from '@nestjs/common';
  import {
    ApiBearerAuth,
    ApiOperation,
    ApiResponse,
    ApiResponseProperty,
    ApiTags,
    ApiOkResponse,
    ApiQuery,
  } from '@nestjs/swagger';
  import { query } from 'express';
import { HttpExceptionFilter } from 'src/common/HttpExceptionFilter';
import { RequestLogInterceptor } from 'src/common/RequestLogInterceptor';
import { SwaggerResponseType } from 'src/common/SwaggerResponseType';
import { TransformInterceptor } from 'src/common/TransformInterceptor';
import { CompanyService } from './company.service';
import { Company } from './entity/company.entity';
import { CompanyResponse } from './response/company.response';
  
  @ApiTags('company API')
  @Controller('company')
  @UseInterceptors(TransformInterceptor, RequestLogInterceptor)
  @UseFilters(HttpExceptionFilter)
  export class CompanyController {
    private readonly logger = new Logger(CompanyController.name);
  
    constructor(private companyService: CompanyService) {}
  
    @Get('getById/:id')
    @ApiOkResponse({ type: () => CompanyResponse })
    async getByDesignation(
      @Param('id') id: string,
    ) {
      if (id == '') return "Bad request designation should't empty";
      return this.companyService.findOne(
        id
      );
    }

    @Get('getall')
    @ApiOkResponse({ type: () => CompanyResponse })
    async getall(
    ) {
      return this.companyService.all(   
      );
    }

    @Post('employee/create')
    @ApiOkResponse({ type: () => CompanyResponse })
    @ApiOkResponse({ type: () => SwaggerResponseType(CompanyResponse) })
    @UseInterceptors(ClassSerializerInterceptor)
    async create(
      @Body() company:Company    ) {
      if (company.company_name == '') return "Bad request comapny name should't empty";
      return this.companyService.create(
        company
      );
    }
  
  }

  