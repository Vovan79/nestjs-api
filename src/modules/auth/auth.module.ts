import {MiddlewareConsumer, Module, NestModule, RequestMethod} from '@nestjs/common';
import {AuthController} from '../../controllers/auth/auth.controller';
import {AuthService} from '../../services/auth/auth.service';
import {UsersModule} from '../users/users.module';
import {JwtStrategy} from '../../services/auth/jwt.strategy';
import * as passport from 'passport';

@Module({
    imports: [UsersModule],
    controllers: [AuthController],
    providers: [AuthService, JwtStrategy],
})
export class AuthModule implements NestModule {
    public configure(consumer: MiddlewareConsumer) {
        consumer
            .apply(passport.authenticate('jwt', { session: false }))
            .forRoutes(
                { path: '/api/v1/addresses', method: RequestMethod.ALL },
                { path: '/api/v1/contacts', method: RequestMethod.ALL },
                { path: '/api/v1/employee', method: RequestMethod.ALL },
                { path: '/api/v1/notifications', method: RequestMethod.ALL },
                { path: '/api/v1/notifications/mark/*', method: RequestMethod.ALL },
                { path: '/api/v1/notifications/mark-all', method: RequestMethod.ALL },
                { path: '/api/v1/notifications/test', method: RequestMethod.ALL },
                { path: '/api/v1/orders', method: RequestMethod.ALL },
                { path: '/api/v1/orders/*', method: RequestMethod.ALL },
                // { path: '/api/v1/products', method: RequestMethod.GET },
                { path: '/api/v1/profile', method: RequestMethod.ALL },
                { path: '/api/v1/users', method: RequestMethod.ALL },
            );
    }
}
