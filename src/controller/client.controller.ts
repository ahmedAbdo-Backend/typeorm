import { Request, Response, NextFunction } from "express";
import { Client } from "../entities/client";
import { createQueryBuilder } from "typeorm";
export const createClint = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { first_name, last_name, email, cardId, balance } = req.body;
console.log(req.body);
  try {
    const client = Client.create({
      first_name,
      last_name,
      email,
      balance,
    });
    await client.save();
    console.log(client);

    res.status(201).json(client);
  } catch (error) {
    console.log(error.detail);
    res.status(500).json(error.detail);
  }
};


export const getClients = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  createQueryBuilder()
const clients = await Client.find({})
console.log(clients);
return res.status(200).json("success")
};
