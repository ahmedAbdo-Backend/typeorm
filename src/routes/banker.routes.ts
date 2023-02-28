import { createBanker } from '../controller/banker.controller';
import { Router } from "express";



const router = Router()

router.post("/banker",createBanker)




export default router