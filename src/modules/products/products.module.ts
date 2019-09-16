import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductsController } from '../../controllers/products/products.controller';
import { ProductsService} from '../../services/products/products.service';
import { Products } from '../../entities/products';

@Module({
    imports: [TypeOrmModule.forFeature([Products])],
    controllers: [ProductsController],
    providers: [ProductsService],
})
export class ProductsModule {}
