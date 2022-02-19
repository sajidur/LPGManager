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
import { RoleService } from './role.service';
import { Role } from './entity/role.entity';
import { RoleResponse } from './response/role.response';
  
  @ApiTags('role API')
  @Controller('role')
  @UseInterceptors(TransformInterceptor, RequestLogInterceptor)
  @UseFilters(HttpExceptionFilter)
  export class RoleController {
    private readonly logger = new Logger(RoleController.name);
  
    constructor(private roleService: RoleService) {}
  
    @Get('getById/:id')
    @ApiOkResponse({ type: () => RoleResponse })
    async getById(
      @Param('id') id: string,
    ) {
      if (id == '') return "Bad request id should't empty";
      return this.roleService.findOne(
        id
      );
    }

    @Post('role/create')
    @ApiOkResponse({ type: () => RoleResponse })
    @ApiOkResponse({ type: () => SwaggerResponseType(RoleResponse) })
    @UseInterceptors(ClassSerializerInterceptor)
    async create(
      @Body() role:Role    ) {
      if (role.name == '') return "Bad request name should't empty";
      return this.roleService.create(
        role
      );
    }
  
  }

  