import { Router } from "express";

import {createClint} from "../controller/client.controller"


const router = Router()

router.post("/client",createClint)




export default router