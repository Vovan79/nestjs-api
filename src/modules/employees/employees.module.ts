import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EmployeesController } from '../../controllers/employees/employees.controller';
import { EmployeesService} from '../../services/employees/employees.service';
import { Employees } from '../../entities/employees';

@Module({
    imports: [TypeOrmModule.forFeature([Employees])],
    controllers: [EmployeesController],
    providers: [EmployeesService],
})
export class EmployeesModule {}
