import { BaseEntity, Column, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class Role extends BaseEntity {
  @PrimaryGeneratedColumn('increment')
 id: number;

 @Column({ name: 'name', type: 'varchar', length: 500 })
 name: string;

 static findById(id: string) {
    return this.createQueryBuilder("company")
      .where("LPGManager.id = :id", { id })
      .getOne();
  }
}
