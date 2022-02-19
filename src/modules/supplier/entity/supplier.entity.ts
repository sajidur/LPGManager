import { BaseEntity, Column, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class Supplier extends BaseEntity {
  @PrimaryGeneratedColumn('increment')
 id: number;

 @Column({ name: 'image', type: 'varchar' })
 image: string;

 @Column({ name: 'name', type: 'varchar', length: 500 })
 name: string;

 @Column({ name: 'address', type: 'varchar', nullable: true, length: 1000 })
 address: string;

 @Column({ name: 'phone', type: 'varchar',length:14 })
 phone: number;

 @Column({ name: 'company_type', type: 'int'})
 company_type: number;
}
