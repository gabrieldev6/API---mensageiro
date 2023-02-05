import { connection } from "../infrastructure/connection/connection";
import { NextFunction } from "express";
import * as jwt from "jsonwebtoken"
import { QueryTypes } from "sequelize"

type JwtPayLoad ={
    id: String
}



export const authMiddleware = async (req: any, res: any, next: NextFunction) => {

    const {authorization} = req.headers

    if(!authorization) {
        throw new Error('nao encontrado')
    }
    const token = authorization.split(' ')[1]
    const {id } = jwt.verify(token, process.env.SECRET || '') as JwtPayLoad

    const record = await connection.query(
    `SELECT * FROM mensageiro.users WHERE id='${id}';`, {type: QueryTypes.SELECT})
    //se nd for retornado ele vai criar a resposta

    //vai transformar de JSON para objeto
    const jsonstringfy= JSON.stringify(record[0])
    const returnUser = JSON.parse(jsonstringfy)

    if(!returnUser) {
        throw new Error('nao autorizado')
    }

    const {password: _, ...loggedUser} = returnUser

    req.user = loggedUser

    next()
    
}