import { Entity, Column, CreateDateColumn, UpdateDateColumn, ManyToMany, JoinTable } from "typeorm";
import { Client } from "./client";
import { Person } from "./Person";

@Entity("Banker")
export class Banker extends Person {

    @Column({
        unique: true
    })
    employee_Id: number


    @ManyToMany(
        () => Client
    )
    @JoinTable({   // JoinTable join write only on one table
        name: "banker_client",
        joinColumn: {
            name: "banker_id",
            referencedColumnName: "_id"
        },
        inverseJoinColumn: {
            name: "client_id",
            referencedColumnName: "_id"
        }
    })
    clients: Client[]
    @CreateDateColumn()
    createdAt: Date
    @UpdateDateColumn()
    updatedAt: Date
}