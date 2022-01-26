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
import { EmployeeService } from './employee.service';
import { employeeResponse } from './response/employee.response';
  
  @ApiTags('Employee API')
  @Controller('employee')
 // @UseInterceptors(TransformInterceptor, UPGRequestLogInterceptor)
  @UseFilters(HttpExceptionFilter)
  export class EmployeeController {
    private readonly logger = new Logger(EmployeeController.name);
  
    constructor(private employeeService: EmployeeService) {}
  
    @Get('employee/getByDesignation/:designtion')
    @ApiOkResponse({ type: () => employeeResponse })
    async getByformAndClientId(
      @Param('designation') designation: string,
    ) {
      if (designation == '') return "Bad request designation should't empty";
      return this.employeeService.getEmployeeByDesignation(
        designation
      );
    }
  
  }

  