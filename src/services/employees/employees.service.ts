import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Employees } from '../../entities/employees';

@Injectable()
export class EmployeesService {
    constructor(
        @InjectRepository(Employees)
        private readonly employeesRepository: Repository<Employees>,
    ) {}

    async findAll(): Promise<Employees[]> {
        return await this.employeesRepository.find();
    }
}
