import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Addresses } from '../../entities/addresses';

@Injectable()
export class AddressesService {
    constructor(
        @InjectRepository(Addresses)
        private readonly addressesRepository: Repository<Addresses>,
    ) {}

    async findAll(): Promise<Addresses[]> {
        return await this.addressesRepository.find();
    }
}
