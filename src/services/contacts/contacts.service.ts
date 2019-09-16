import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Contacts } from '../../entities/contacts';

@Injectable()
export class ContactsService {
    constructor(
        @InjectRepository(Contacts)
        private readonly contactRepository: Repository<Contacts>,
    ) {}

    async findAll(): Promise<Contacts[]> {
        return await this.contactRepository.find();
    }
}
