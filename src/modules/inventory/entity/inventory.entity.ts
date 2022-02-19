import { BaseEntity, Column, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class Inventory extends BaseEntity {
 @PrimaryGeneratedColumn('increment')
 id: number;
 @Column({ name: 'supplier_id', type: 'int' })
 SupplierId: number;
 @Column({ name: 'product_name', type: 'varchar', length: 500 })
 ProductName: string;
 @Column({ name: 'size', type: 'varchar', length: 500 })
 size: string;
 @Column({ name: 'product_type', type: 'varchar', length: 500 })
 product_type: string;
 @Column({ name: 'price', type: 'decimal' })
 price: number;
 @Column({ name: 'quantity', type: 'decimal' })
 quantity: number;
 @Column({ name: 'warehouse_id', type: 'int' })
 WarehouseId: number;
 @Column({ name: 'opening_quantity', type: 'decimal' })
 OpeningQuantity: number;
 @Column({ name: 'receiving_quantity', type: 'decimal' })
 ReceivingQuantity: number;
 @Column({ name: 'return_quantity', type: 'decimal' })
 ReturnQuantity: number;
 @Column({ name: 'damage_quantity', type: 'decimal' })
 DamageQuantity: number;
 @Column({ name: 'sale_quantity', type: 'decimal' })
 SaleQuantity: number;
 constructor(props) {
   super();
  Object.assign(this, props);
}
}
