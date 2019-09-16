import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ContactsController } from '../../../dist/controllers/contacts/contacts.controller';
import { ContactsService } from '../../services/contacts/contacts.service';
import { Contacts } from '../../entities/contacts';

@Module({
    imports: [TypeOrmModule.forFeature([Contacts])],
    controllers: [ContactsController],
    providers: [ContactsService],
})
export class ContactsModule {}
