import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Employees {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    note: string;

    @Column()
    image: string;

    @Column()
    schedule_type: number;

    @Column()
    address_id: number;
}
