import { mixin, Type } from '@nestjs/common';
import { ApiProperty } from '@nestjs/swagger';

function createResponseType<T>(clazz: Type<T>, isArray = false) {
  class A {
    @ApiProperty()
    status: string;
  }

  if (isArray) {
    class ResultSet extends A {
      @ApiProperty({ type: clazz, isArray: true })
      resultset: any;
    }
    return mixin(ResultSet);
  }

  class Result extends A {
    @ApiProperty({ type: clazz })
    result: any;
  }
  return mixin(Result);
}

export const SwaggerResponseType = <T>(
  clazz: Type<T>,
  isArray = false,
): Type<any> => createResponseType(clazz, isArray);
