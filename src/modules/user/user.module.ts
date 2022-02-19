import { UserController } from './user.controller';
import { Module } from '@nestjs/common';
import { User } from './entity/user.entity';

import { UserService } from './user.service';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  controllers: [UserController],
  providers: [UserService],
  exports: [UserService],
})
export class EmployeeModule {}
