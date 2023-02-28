import { BaseEntity ,Entity , Column ,PrimaryGeneratedColumn,ManyToOne,JoinColumn } from 'typeorm';
import { Client } from './client';
export enum TransactionType {
    Deposit="deposit",
    WITHDRAW="withdraw"
}

@Entity("Transaction")
export class Transaction extends BaseEntity {

    @PrimaryGeneratedColumn()
    _id:string

    @Column({
        type:"enum",
        enum:TransactionType
    })
    @ManyToOne(()=>Client,
      client=>client.transactions

    )
    @JoinColumn({
        name:"client_id"
    })
    client:Client
}