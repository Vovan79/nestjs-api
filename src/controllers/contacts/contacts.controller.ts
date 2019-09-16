import { Controller, Get } from '@nestjs/common';
import { ContactsService } from '../../services/contacts/contacts.service';
import { Contacts } from '../../entities/contacts';

@Controller('api/v1/contacts')
export class ContactsController {
    constructor(private readonly contactsService: ContactsService) {}

    @Get()
    findAll(): Promise<Contacts[]> {
        return this.contactsService.findAll();
    }
}
