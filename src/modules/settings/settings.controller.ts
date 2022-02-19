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
import { SettingsService } from './settings.service';
import { Product } from './entity/product.entity';
import { ProductResponse } from './response/product.response';
import { SizeResponse } from './response/size.response';
import { Size } from './entity/size.entity';
import { ProductType } from './entity/product_type.entity';
  
  @ApiTags('Settings API')
  @Controller('setting')
  @UseInterceptors(TransformInterceptor, RequestLogInterceptor)
  @UseFilters(HttpExceptionFilter)
  export class SettingsController {
    private readonly logger = new Logger(SettingsController.name);
  
    constructor(private settingsService: SettingsService) {}
  

    @Post('product/create')
    @ApiOkResponse({ type: () => ProductResponse })
    @ApiOkResponse({ type: () => SwaggerResponseType(ProductResponse) })
    @UseInterceptors(ClassSerializerInterceptor)
    async product_create(
      @Body() employee:Product    ) {
      if (employee.name == '') return "Bad request designation should't empty";
      return this.settingsService.create_product(
        employee
      );
    }
    @Post('size/create')
    @ApiOkResponse({ type: () => ProductResponse })
    @ApiOkResponse({ type: () => SwaggerResponseType(ProductResponse) })
    @UseInterceptors(ClassSerializerInterceptor)
    async size_create(
      @Body() size:Size    ) {
      if (size.name == '') return "Bad request designation should't empty";
      return this.settingsService.create_size(
        size
      );
    }
    @Post('type/create')
    @ApiOkResponse({ type: () => ProductResponse })
    @ApiOkResponse({ type: () => SwaggerResponseType(ProductResponse) })
    @UseInterceptors(ClassSerializerInterceptor)
    async type_create(
      @Body() type:ProductType    ) {
      if (type.name == '') return "Bad request designation should't empty";
      return this.settingsService.create_type(
        type
      );
    }

    @Get('product/getall')
    @ApiOkResponse({ type: () => ProductResponse })
    async getall_product(
    ) {
      return this.settingsService.all_product(   
      );
    }
    @Get('size/getall')
    @ApiOkResponse({ type: () => SizeResponse })
    async getall_size(
    ) {
      return this.settingsService.all_size(   
      );
    }

    @Get('type/getall')
    @ApiOkResponse({ type: () => SizeResponse })
    async getall_type(
    ) {
      return this.settingsService.all_type(   
      );
    }
  
  }

  