import { RoleController } from './role.controller';
import { Module } from '@nestjs/common';
import { Role } from './entity/role.entity';
import { RolePermission } from './entity/role_permission.entity';

import { RoleResponse } from './response/role.response';

import { RoleService } from './role.service';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Role,RolePermission])],
  controllers: [RoleController],
  providers: [RoleService],
  exports: [RoleService],
})
export class RoleModule {}
