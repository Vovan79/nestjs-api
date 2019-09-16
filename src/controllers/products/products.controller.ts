import { Controller, Get, Post, Body, Response, HttpStatus, UseInterceptors } from '@nestjs/common';
import { ProductsService } from '../../services/products/products.service';
import { Products } from '../../entities/products';
import { ProductsMiddleware } from '../../middlewares/products.middleware';

@Controller('api/v1/products')
@UseInterceptors(ProductsMiddleware)
export class ProductsController {
    constructor(private readonly productsService: ProductsService) {}

    @Get()
    async findAll(@Response() res): Promise<Products[]> {
        const products = await this.productsService.findAll();
        return res.status(HttpStatus.OK).json(products);
    }

    @Post()
    createProduct(@Body() body: Products) {
        if (body && body.name) {
            return this.productsService.createProduct(body);
        }
    }
}
