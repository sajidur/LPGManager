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
import { InventoryService } from './inventory.service';
import { Inventory } from './entity/inventory.entity';
  import {InventoryResponse} from './response/inventory.response'
  @ApiTags('user API')
  @Controller('user')
  @UseInterceptors(TransformInterceptor, RequestLogInterceptor)
  @UseFilters(HttpExceptionFilter)
  export class InventoryController {
    private readonly logger = new Logger(InventoryController.name);
  
    constructor(private inventoryService: InventoryService) {}

    @Post('employee/create')
    @ApiOkResponse({ type: () => InventoryResponse })
    @ApiOkResponse({ type: () => SwaggerResponseType(InventoryResponse) })
    @UseInterceptors(ClassSerializerInterceptor)
    async create(
      @Body() inventory:Inventory    ) {
      if (inventory.ProductName == '') return "Bad request designation should't empty";
      return this.inventoryService.create(
        inventory
      );
    }
  
  }

  