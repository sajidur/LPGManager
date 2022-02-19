import { ApiProperty } from "@nestjs/swagger";
import { BaseEntity, Column, Entity, JoinTable, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { PurchaseDetails } from "./purchase-details.entity";

@Entity()
export class PurchaseMaster extends BaseEntity {
 @PrimaryGeneratedColumn('increment')
 id: number;
 @Column({ name: 'order_no', type: 'varchar' , length: 500})
 OrderNo: string;
 @Column({ name: 'supplier_id', type: 'int' })
 SupplierId: number;
 @Column({ name: 'total_price', type: 'decimal' })
 TotalPrice: number;
 @Column({ name: 'total_commission', type: 'decimal' })
 TotalCommission: number;
 @Column({ name: 'paid-amount', type: 'decimal' })
 WarehouseId: number;
 @Column({ name: 'due_advance', type: 'decimal' })
 DueAdvance: number;
 @Column({ name: 'payment_type', type: 'int' })
 PaymentType: number;
 @Column({ name: 'notes', type: 'varchar' , length: 500 })
 Notes: string;
 @ApiProperty({ type: () => [PurchaseDetails] })
 @OneToMany(() => PurchaseMaster, (user) => user.PurchaseDetails)
 @JoinTable()
 PurchaseDetails: PurchaseDetails[];
}
