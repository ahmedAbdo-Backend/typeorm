import { Request, Response, NextFunction } from "express";
import { Client } from "../entities/client";
import { TransactionInterface } from "../interfaces/transactions";
import { Transaction, TransactionType } from "../entities/Transaction";

export const createTransactions = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { amount, type } = req.body as TransactionInterface;
  const { clientId } = req.params;
  console.log();
  const client = await Client.findOne({ where: { _id: clientId } });
  if (!client) return res.status(404).json("client not  fount");

  const transaction = Transaction.create({
    amount,
    type,
    client,
  });
  await transaction.save();
  if (type == TransactionType.Deposit) {
    client.balance += amount;
  } else if (type == TransactionType.WITHDRAW) {
    client.balance -= amount;
  }
  await client.save();
  return res.status(201).json("transaction created");

};
