import {
  Entity,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
  ManyToMany,
} from "typeorm";
import { Banker } from "./Banker";
import { Person } from "./Person";
import { Transaction } from "./Transaction";

@Entity("client")
export class Client extends Person {
  @Column({
    type: "numeric", // numeric for money or prices
    default: 0,
  })
  balance: number;
  @Column({
    default: true,
    name: "active", //change the name of colum in db
  })
  is_Active: string;
  @Column({ type: "simple-array", nullable: true })
  family_members: string[];

  @OneToMany(() => Transaction, (transaction) => transaction.client)
  transactions: Transaction[];

  @ManyToMany(() => Banker)
  bankers: Banker[];
  @CreateDateColumn()
  createdAt: Date;
  @UpdateDateColumn()
  updatedAt: Date;
}
