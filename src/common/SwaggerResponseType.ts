import { Type } from '@nestjs/common';
import { ApiProperty } from '@nestjs/swagger';

export const SwaggerResponseType = <T>(
  clazz: Type<T>,
  isArray = false,
): any => {
  class A {
    @ApiProperty()
    status: string;
  }

  if (isArray) {
    class ResultSet extends A {
      @ApiProperty({ type: () => clazz, isArray: true })
      resultset: any;
    }
    return ResultSet;
  } else {
    class Result extends A {
      @ApiProperty({ type: () => clazz })
      result: any;
    }

    return Result;
  }
};
