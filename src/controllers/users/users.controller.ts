import { Controller, Get, Param } from '@nestjs/common';
import { UsersService } from '../../services/users/users.service';
import { Users } from '../../entities/users';

@Controller('api/v1/users')
export class UsersController {
    constructor(private readonly usersService: UsersService) {}

    @Get()
    findAll(): Promise<Users[]> {
        return this.usersService.getAllUsers();
    }

    @Get('hash/:password')
    getHashByParam(@Param() params): Promise<string> {
        return this.usersService.getHashByParam(params.password);
    }
}
