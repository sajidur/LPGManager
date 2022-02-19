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
import { UserService } from './user.service';
import { User } from './entity/user.entity';
import { UserResponse } from './response/user.response';
  
  @ApiTags('user API')
  @Controller('user')
  @UseInterceptors(TransformInterceptor, RequestLogInterceptor)
  @UseFilters(HttpExceptionFilter)
  export class UserController {
    private readonly logger = new Logger(UserController.name);
  
    constructor(private userService: UserService) {}
  
    @Get('getByDesignation/:designation')
    @ApiOkResponse({ type: () => UserResponse })
    async getByDesignation(
      @Param('designation') designation: string,
    ) {
      if (designation == '') return "Bad request designation should't empty";
      console.log(designation);
      return this.userService.getEmployeeByDesignation(
        designation
      );
    }

    @Post('employee/create')
    @ApiOkResponse({ type: () => UserResponse })
    @ApiOkResponse({ type: () => SwaggerResponseType(UserResponse) })
    @UseInterceptors(ClassSerializerInterceptor)
    async create(
      @Body() employee:User    ) {
      if (employee.name == '') return "Bad request designation should't empty";
      return this.userService.create(
        employee
      );
    }
  
  }

  