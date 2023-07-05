import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    Unique,
} from "typeorm";

@Entity("User")
@Unique(["email"])
export class User {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: "varchar", length: 255 })
    email: string;
}
