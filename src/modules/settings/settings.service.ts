/*
 * Created on Wed april 1 2021
 * Copyright (c) 2021 by Brac-UPG Programme
 * All Rights Reserved by BRAC
 * Powered By BMQA
 * BMQA-BRAC Confidential
 */
import { Injectable, NotFoundException, Type } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Product } from './entity/product.entity';
import { ProductType } from './entity/product_type.entity';
import { Size } from './entity/size.entity';
import { ProductResponse } from './response/product.response';
@Injectable()
export class SettingsService {

  constructor(@InjectRepository(Product) 
  private readonly productRepository: Repository<Product>,
  @InjectRepository(Size) private readonly sizeRepository: Repository<Size>,
  @InjectRepository(ProductType) private readonly typeRepository: Repository<ProductType>) { }


  create_product(dto: Product): Promise<Product> {
    const obj = this.productRepository.create(dto);
    return this.productRepository.save(obj);
  }
  create_size(dto: Size): Promise<Size> {
    const obj = this.sizeRepository.create(dto);
    return this.sizeRepository.save(obj);
  }
 
  create_type(dto: ProductType): Promise<ProductType> {
    const obj = this.typeRepository.create(dto);
    return this.typeRepository.save(obj);
  }
 
  all_product(): Promise<Product[]> {
    return this.productRepository.createQueryBuilder("product").getMany();
  }
  all_size(): Promise<Size[]> {
    return this.sizeRepository.createQueryBuilder("size").getMany();
  }
  all_type(): Promise<ProductType[]> {
    return this.typeRepository.createQueryBuilder("product_type").getMany();
  }

}


