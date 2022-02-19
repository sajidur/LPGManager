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
    ApiBody,
  } from '@nestjs/swagger';
  import { query } from 'express';
import { HttpExceptionFilter } from 'src/common/HttpExceptionFilter';
import { RequestLogInterceptor } from 'src/common/RequestLogInterceptor';
import { SwaggerResponseType } from 'src/common/SwaggerResponseType';
import { TransformInterceptor } from 'src/common/TransformInterceptor';
import { PurchaseService } from './purchase.service';
import { PurchaseDetails } from './entity/purchase-details.entity';
import { PurchaseMaster } from './entity/purchase-master.entity';

import { PurchaseMasterResponse } from './response/purchase.response';
  
  @ApiTags('Purchase API')
  @Controller('purchase')
  @UseInterceptors(TransformInterceptor, RequestLogInterceptor)
  @UseFilters(HttpExceptionFilter)
  export class PurchaseController {
    private readonly logger = new Logger(PurchaseController.name);
  
    constructor(private purchaseService: PurchaseService) {}
    @Post('purchase/create')
    @ApiBody({ type: PurchaseMasterResponse })
    @ApiOkResponse({ type: () => PurchaseMasterResponse })
    @ApiOkResponse({ type: () => SwaggerResponseType(PurchaseMasterResponse) })
    @UseInterceptors(ClassSerializerInterceptor)
    async create(
      @Body() purchase:PurchaseMaster    ) {
      if (purchase.OrderNo == '') return "Bad request should't empty";
      return this.purchaseService.create(
        purchase
      );
    }
  
  }

  