import { Injectable } from '@nestjs/common';
import {Column, Repository} from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Users } from '../../entities/users';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
    private saltRounds = 10;

    constructor(
        @InjectRepository(Users)
        private readonly usersRepository: Repository<Users>,
    ) {}

    async getAllUsers(): Promise<Users[]> {
        return await this.usersRepository.find();
    }

    async getUserByUsername(name: string): Promise<Users> {
        return (await this.usersRepository.find({ name }))[0];
    }

    async createUser(user: Users): Promise<Users> {
        const defaultOptions = {
            first_name: '',
            last_name: '',
            middle_name: '',
            email: '',
            tel: '',
        };
        const passwordToHash = user.password;
        user.password = await this.getHash(passwordToHash);
        return this.usersRepository.save({ ...user, ...defaultOptions});
    }

    async getHash(password: string): Promise<string> {
        return bcrypt.hash(password, this.saltRounds);
    }

    async getHashByParam(password: string): Promise<string> {
        return bcrypt.hash(password, this.saltRounds);
    }

    async compareHash(password: string, hash: string): Promise<boolean> {
        return bcrypt.compare(password, hash);
    }
}
