import { BaseEntity, Column, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class Product extends BaseEntity {
  @PrimaryGeneratedColumn('increment')
  id: string;

 @Column({ name: 'name', type: 'varchar', length: 500 })
 name: string;
}
