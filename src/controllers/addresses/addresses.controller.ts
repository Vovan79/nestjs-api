import { Controller, Get } from '@nestjs/common';
import { AddressesService } from '../../services/addresses/addresses.service';
import { Addresses } from '../../entities/addresses';

@Controller('api/v1/addresses')
export class AddressesController {
    constructor(private readonly addressesService: AddressesService) {}

    @Get()
    findAll(): Promise<Addresses[]> {
        return this.addressesService.findAll();
    }
}
