import {
    Column,
    CreateDateColumn,
    Entity,
    JoinColumn,
    ManyToOne,
    PrimaryGeneratedColumn,
} from 'typeorm';
import { User } from '../../accounts/entities/User';

@Entity("games")
class Game {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    game_number: number;

    @Column()
    classification: string;

    @Column()
    user_id: number;

    @JoinColumn({ name: "user_id" })
    @ManyToOne(() => User)
    userId: User;

    @Column()
    user_name: string;

    @Column()
    points: number;

    @CreateDateColumn({ name: 'created_at' })
    created_at: Date;
}

export { Game }
