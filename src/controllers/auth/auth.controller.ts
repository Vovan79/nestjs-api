import { Controller, Get, Post, Body, Response, HttpStatus } from '@nestjs/common';
import { AuthService } from '../../services/auth/auth.service';
import { UsersService } from '../../services/users/users.service';
import { Users } from '../../entities/users';

@Controller('api/v1/auth')
export class AuthController {
    constructor(
        private readonly authService: AuthService,
        private readonly usersService: UsersService,
    ) {}

    @Get()
    findAll(): Promise<Users[]> {
        return this.usersService.getAllUsers();
    }

    @Post('login')
    async loginUser(@Body() body: Users, @Response() res: any) {
        if (!(body && body.name && body.password)) {
            return res.status(HttpStatus.UNAUTHORIZED).json({message: 'Bad login or password'});
        }

        const user = await this.usersService.getUserByUsername(body.name);

        if (user) {
            if (await this.usersService.compareHash(body.password, user.password)) {
                const token = await this.authService.createToken(user.id, user.name);
                return res.status(HttpStatus.OK).json(token);
            }
        }

        return res.status(HttpStatus.UNAUTHORIZED).json({message: 'Bad login or password'});
    }

    @Post('register')
    async registerUser(@Body() body: Users, @Response() res: any) {
        if (!(body && body.name && body.password)) {
            return res.status(HttpStatus.FORBIDDEN).json({message: 'Login or password are required!'});
        }

        let user = await this.usersService.getUserByUsername(body.name);

        if (user) {
            return res.status(HttpStatus.OK).json({user, message: 'User exists'});
        } else {
            user = await this.usersService.createUser(body);
        }

        return res.status(HttpStatus.OK).json(user);
    }
}
