import { Controller, Get, Post } from '@nestjs/common';
import { OrdersService } from '../../services/orders/orders.service';

@Controller('api/v1/orders')
export class OrdersController {
    constructor(private readonly orderService: OrdersService) {}

    @Get('history')
    findAll(): string {
        return this.orderService.findAll();
    }

    @Post()
    create(): string {
        return this.orderService.create();
    }
}
