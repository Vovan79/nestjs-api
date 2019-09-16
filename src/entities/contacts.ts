import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Contacts {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    icon: string;

    @Column()
    type: number;

    @Column()
    href: string;
}
