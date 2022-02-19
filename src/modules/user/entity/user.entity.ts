import { BaseEntity, Column, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class User extends BaseEntity {
  @PrimaryGeneratedColumn('increment')
 id: number;

 @Column({ name: 'image', type: 'varchar' })
 image: string;

 @Column({ name: 'name', type: 'varchar', length: 50 })
 name: string;

 @Column({ name: 'designation', type: 'varchar', nullable: true, length: 255 })
 designation: string;

 @Column({ name: 'salary', type: 'int' })
 salary: number;
}
