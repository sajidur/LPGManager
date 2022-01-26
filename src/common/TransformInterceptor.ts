import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { isUndefined } from '@nestjs/common/utils/shared.utils';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export interface Response<T> {
  status: 'ok';
  code: 200;
  result?: T;
  resultset?: T[];
  error_name?: undefined;
  message?: undefined;
}

@Injectable()
export class TransformInterceptor<T>
  implements NestInterceptor<T, Response<T>>
{
  intercept(
    context: ExecutionContext,
    next: CallHandler,
  ): Observable<Response<T>> {
    const request = context.switchToHttp().getRequest();
    const shouldResponseWrapped = this.shouldResponseWrapped(request);

    return next
      .handle()
      .pipe(map((x) => this.mapResponse(x, shouldResponseWrapped)));
  }

  private mapResponse(data: any, shouldResponseWrapped = false): Response<T> {
    const response = {
      status: 'ok',
    };
    data = isUndefined(data) ? null : data;

    Array.isArray(data)
      ? Object.assign(response, { resultset: data })
      : Object.assign(response, { result: data });

    return shouldResponseWrapped
      ? Object.assign(response, { error_name: null, message: null, code: 200 })
      : (response as any);
  }

  private shouldResponseWrapped(request: any): boolean {
    const requestResponseType: string =
      request.headers['x-response'] || request.query.response;

    return requestResponseType &&
      requestResponseType.toLocaleLowerCase() === 'wrapped'
      ? true
      : false;
  }
}
