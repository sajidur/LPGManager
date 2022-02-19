import { BaseEntity, Column, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class RolePermission extends BaseEntity {
    @PrimaryGeneratedColumn('increment')
    id: number;

 @Column({ name: 'role_id', type: 'int' })
 RoleId: number;

 @Column({ name: 'feature_name', type: 'varchar', length: 500 })
 FeatureName: string;
}
