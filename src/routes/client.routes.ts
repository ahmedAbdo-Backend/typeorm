import { Router } from "express";

import {createClint ,getClients} from "../controller/client.controller"


const router = Router()

router.post("/client",createClint)
router.get("/client",getClients)




export default router