import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AddressesController } from '../../../dist/controllers/addresses/addresses.controller';
import { AddressesService } from '../../services/addresses/addresses.service';
import { Addresses } from '../../entities/addresses';

@Module({
    imports: [TypeOrmModule.forFeature([Addresses])],
    controllers: [AddressesController],
    providers: [AddressesService],
})
export class AddressesModule {}
