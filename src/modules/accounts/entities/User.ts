import {
    Column,
    CreateDateColumn,
    Entity,
    PrimaryGeneratedColumn,
    UpdateDateColumn
} from 'typeorm';
import { Exclude } from 'class-transformer';

@Entity("users")
class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    email: string;

    @Exclude()
    @Column()
    password: string;

    @Column()
    is_admin?: boolean;

    @Column()
    is_active?: boolean;

    @CreateDateColumn({ name: 'created_at' })
    created_at: Date;

    @UpdateDateColumn({ name: 'updated_at' })
    updated_at: Date;
}

export { User }