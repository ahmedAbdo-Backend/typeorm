import { Client } from "src/entities/client"

export  interface TransactionInterface {


 
    _id:string
    type:string,
    amount:number

    client:Client

}