import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { join } from 'path';

import { AppController } from './app.controller';
import { AppService } from './app.service';

import { AddressesModule } from './modules/addresses/addresses.module';
import { AuthModule } from './modules/auth/auth.module';
import { ContactsModule } from './modules/contacts/contacts.module';
import { EmployeesModule } from './modules/employees/employees.module';
import { NotificationsModule } from './modules/notifications/notifications.module';
import { OrdersModule } from './modules/orders/orders.module';
import { ProductsModule } from './modules/products/products.module';
import { ProfileModule } from './modules/profile/profile.module';
import { UsersModule } from './modules/users/users.module';

import { RegisterMiddleware } from './middlewares/register.middleware';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '123',
      database: 'database',
      entities: [join(__dirname, '**/entities/*{.ts,.js}')],
      synchronize: true,
    }),
    AddressesModule,
    AuthModule,
    ContactsModule,
    EmployeesModule,
    NotificationsModule,
    OrdersModule,
    ProductsModule,
    ProfileModule,
    UsersModule,
  ],
  controllers: [
    AppController,
  ],
  providers: [
    AppService,
  ],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
        .apply(RegisterMiddleware)
        .forRoutes('api/v1/auth/register');
  }
}
