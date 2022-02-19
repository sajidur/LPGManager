import { BaseEntity, Column, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class Company extends BaseEntity {
  @PrimaryGeneratedColumn('increment')
  id: string;

 @Column({ name: 'image', type: 'varchar' })
 image: string;

 @Column({ name: 'company_name', type: 'varchar', length: 500 })
 company_name: string;

 @Column({ name: 'designation', type: 'varchar', nullable: true, length: 1000 })
 address: string;

 @Column({ name: 'phone', type: 'varchar',length:14 })
 phone: number;

 @Column({ name: 'company_type', type: 'int' })
 company_type: number;

 static findById(id: string) {
    return this.createQueryBuilder("company")
      .where("LPGManager.id = :id", { id })
      .getOne();
  }
}
