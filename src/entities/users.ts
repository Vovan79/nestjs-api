import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Users {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    first_name: string;

    @Column()
    last_name: string;

    @Column()
    middle_name: string;

    @Column()
    email: string;

    @Column()
    tel: string;

    @Column()
    password: string;
}
