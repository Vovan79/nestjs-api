import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Addresses {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    icon: string;

    @Column()
    geo: string;
}
