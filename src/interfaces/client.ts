import { TransactionInterface } from "./transactions";

export interface clientInterface {
  balance: number;

  is_Active: string;
  family_members: string[];

  transactions: TransactionInterface[];

  _id: number;

  first_name: string;

  last_name: string;

  email: string;

  cardId: string;

  additional_info: {
    age: number;
    address: string;
  };
}
