import { Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import * as jwt from 'jsonwebtoken';

@Injectable()
export class AuthService {
    constructor(private readonly usersService: UsersService) {}

    async createToken(id: number, name: string) {
        const expiresIn = 60 * 60;
        const secretOrKey = 'secret';
        const user = { name };
        const token = jwt.sign(user, secretOrKey, { expiresIn });

        return { expires_in: expiresIn, token};
    }

    async validateUser(signedUser): Promise<boolean> {
        if (signedUser && signedUser.name) {
            return Boolean(this.usersService.getUserByUsername(signedUser.name));
        }
        return false;
    }
}
