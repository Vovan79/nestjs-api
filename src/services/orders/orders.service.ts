import { Injectable } from '@nestjs/common';

@Injectable()
export class OrdersService {
    findAll(): string {
        return 'This is an order history';
    }

    create(): string {
        return 'This action creates an order';
    }
}
