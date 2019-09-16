import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Products {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    price: string;

    @Column()
    time: string;

    @Column()
    note: string;

    @Column()
    image: string;

    @Column()
    category_id: number;
}
