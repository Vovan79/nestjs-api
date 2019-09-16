import { Controller, Get } from '@nestjs/common';
import { EmployeesService } from '../../services/employees/employees.service';
import { Employees } from '../../entities/employees';

@Controller('api/v1/employee')
export class EmployeesController {
    constructor(private readonly employeesService: EmployeesService) {}

    @Get()
    findAll(): Promise<Employees[]> {
        return this.employeesService.findAll();
    }
}
