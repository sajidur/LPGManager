/*
 * Created on january 23 2022
 * by Md Sajidur Rahman
 * This will catch all the exceptions and give formatted response to client
 */
import {
    ArgumentsHost,
    Catch,
    HttpException,
    HttpStatus,
    InternalServerErrorException,
  } from '@nestjs/common';
  import { BaseExceptionFilter } from '@nestjs/core';
  import { Request, Response } from 'express';
  
  @Catch()
  export class HttpExceptionFilter extends BaseExceptionFilter {
    catch(exception: HttpException, host: ArgumentsHost) {
      const ctx = host.switchToHttp();
      const response = ctx.getResponse<Response>();
      const request = ctx.getRequest<Request>();
      if (!(exception instanceof HttpException)) {
        exception = new InternalServerErrorException(exception);
      }
  
      const status = exception.getStatus();
      const exceptionDetails = exception.getResponse();
  
      response
        .status(200)
        .send(this.mapError(exceptionDetails, true));
    }
  
    private mapError(message: any, shouldResponseWrapped = false) {
      message = this.buildErrorMessage(message);
      return shouldResponseWrapped
        ? Object.assign(message, { result: null, status: 'failed' })
        : message;
    }
  
    private buildErrorMessage(message: any) {
      const errorMessage = {} as any;
      errorMessage.error_name = message?.error || message?.message || message;
      errorMessage.message = message?.message || message;
      errorMessage.code = message?.statusCode || HttpStatus.INTERNAL_SERVER_ERROR;
      return errorMessage;
    }
  }
  