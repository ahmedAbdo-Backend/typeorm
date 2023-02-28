import { Banker } from './../entities/Banker';
import { Request, Response, NextFunction } from "express"

export const createBanker = async (req: Request, res: Response, next: NextFunction) => {
    const { first_name, last_name, email, cardId, employee_Id } = req.body


    try {
        const banker = Banker.create({ first_name, last_name, email, cardId, employee_Id })
        await banker.save()

        res.status(201).json(banker)
    } catch (error) {
        console.log(error.detail);
        res.status(500).json(error.detail)

    }

}