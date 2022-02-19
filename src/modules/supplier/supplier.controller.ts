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
import { SupplierService } from './supplier.service';
import { Supplier } from './entity/supplier.entity';
import { SupplierResponse } from './response/supplier.response';
  
  @ApiTags('user API')
  @Controller('user')
  @UseInterceptors(TransformInterceptor, RequestLogInterceptor)
  @UseFilters(HttpExceptionFilter)
  export class SupplierController {
    private readonly logger = new Logger(SupplierController.name);
  
    constructor(private supplierService: SupplierService) {}
  
    @Get('getById/:id')
    @ApiOkResponse({ type: () => SupplierResponse })
    async getByDesignation(
      @Param('id') id: string,
    ) {
      if (id == '') return "Bad request id should't empty";
      return this.supplierService.findOne(
        id
      );
    }

    @Post('supplier/create')
    @ApiOkResponse({ type: () => SupplierResponse })
    @ApiOkResponse({ type: () => SwaggerResponseType(SupplierResponse) })
    @UseInterceptors(ClassSerializerInterceptor)
    async create(
      @Body() supplier:Supplier    ) {
      if (supplier.name == '') return "Bad request designation should't empty";
      return this.supplierService.create(
        supplier
      );
    }
  
  }

  