console.log("dd");
import { Router } from "express";

import { createTransactions } from "../controller/Transactions.controller";


const router = Router()
router.post("/transaction/:clientId",createTransactions)




export default router