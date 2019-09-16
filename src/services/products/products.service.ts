import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Products } from '../../entities/products';

@Injectable()
export class ProductsService {
    constructor(
        @InjectRepository(Products)
        private readonly productsRepository: Repository<Products>,
    ) {}

    async findAll(): Promise<Products[]> {
        return await this.productsRepository.find();
    }

    async createProduct(product: Products): Promise<Products> {
        const defaultOptions = {
            price: '',
            time: '',
            note: '',
            image: '',
            category_id: 0,
        };
        return this.productsRepository.save({ ...product, ...defaultOptions });
    }
}
