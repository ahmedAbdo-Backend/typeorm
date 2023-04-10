import {
  BaseEntity,
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
} from "typeorm";
import { Client } from "./client";
export enum TransactionType {
  Deposit = "deposit",
  WITHDRAW = "withdraw",
}

@Entity("Transaction")
export class Transaction extends BaseEntity {
  @PrimaryGeneratedColumn()
  _id: string;

  @Column({
    type: "enum",
    enum: TransactionType,
  })
  type: string;
  @ManyToOne(() => Client, (client) => client.transactions)
  @JoinColumn({
    name: "client_id", // name of forgin key
  })
  client: Client;
  @Column({ type: "numeric", precision: 10, scale: 2, default: 0 })
  amount: number;

  beforeInsert() {
    if (this.amount < 0) {
      throw new Error("Amount must be a positive number");
    }
  }

  beforeUpdate() {
    if (this.amount < 0) {
      throw new Error("Amount must be a positive number");
    }
  }
}
