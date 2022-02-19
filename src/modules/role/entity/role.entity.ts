import { BaseEntity, Column, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class Role extends BaseEntity {
 @PrimaryGeneratedColumn('uuid')
 id: string;

 @Column({ name: 'name', type: 'varchar', length: 500 })
 name: string;

 static findById(id: string) {
    return this.createQueryBuilder("company")
      .where("LPGManager.id = :id", { id })
      .getOne();
  }
}
