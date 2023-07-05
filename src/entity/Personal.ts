import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    Unique,
} from "typeorm";

@Entity("personal")
@Unique(["email"])
@Unique(["dniId"])
export class Personal {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: "varchar", length: 255 })
    email: string;

    @Column({ type: "date", nullable: true })
    birthdate: Date;

    @Column({ type: "int", nullable: true, name: "department_id" })
    departmentId: number;

    @Column({ type: "varchar", length: 255, nullable: true, name: "dni" })
    dni: string;

    @Column({ type: "varchar", length: 255, nullable: true, name: "document_type" })
    documentType: string;

    @Column({ type: "varchar", length: 255, nullable: true, name: "first_names" })
    firstNames: string;

    @Column({ type: "varchar", length: 255, nullable: true, name: "last_names" })
    lastNames: string;

    @Column({ type: "varchar", length: 255, nullable: true })
    phone: string;

    @Column({ type: "varchar", length: 255, nullable: true })
    cellphone: string;

    @Column({ type: "varchar", length: 255, nullable: true })
    company: string;

    @Column({ type: "varchar", length: 255, nullable: true, name: "entry_date" })
    entryDate: string;

    @Column({ type: "varchar", length: 255, nullable: true })
    country: string;

    @Column({ type: "varchar", length: 255, nullable: true })
    city: string;

    @Column({ type: "varchar", length: 255, nullable: true })
    status: string;

    @Column({ type: "varchar", length: 255, nullable: true, name: "ticket_number" })
    ticketNumber: string;

    @Column({ type: "varchar", length: 255, nullable: true })
    position: string;

    @Column({ type: "varchar", length: 255, nullable: true, name: "contract_position" })
    contractPosition: string;

    @Column({ type: "timestamp", nullable: true, name: "edited_at" })
    editedAt: Date;

    @Column({ type: "timestamp", nullable: true, name: "created_at" })
    createdAt: Date;

    @Column({ type: "varchar", length: 255, nullable: true, name: "dni_id" })
    dniId: string;

    @Column({ type: "varchar", length: 255, nullable: true, name: "contract_type" })
    contractType: string;
}
