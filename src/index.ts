import { Transaction } from "./entities/Transaction";
import { Client } from "./entities/client";
import { createConnection } from "typeorm";
import express from "express";
import { Banker } from "./entities/Banker";
import clientRouter from "./routes/client.routes";
import bankerRouter from "./routes/banker.routes";
import transactionRouter from "./routes/transaction.routes";

const app = express();

const main = async () => {
  try {
    await createConnection({
      type: "postgres",
      host: "localhost",
      port: 5432,
      username: "postgres",
      password: "1",
      database: "postgres",
      entities: [Client, Banker, Transaction],
      synchronize: true, //to execute the entities
    });
    app.use(express.json());
    app.use("/api", bankerRouter);

    app.use("/api", clientRouter);
    app.use("/api", transactionRouter);
    app.listen(8080, () => {
      console.log("Now running on port 8080");
    });
  } catch (error) {
    console.error(error);
    throw new Error("Unable to connect to db");
  }
};

main();
