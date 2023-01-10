import { Dialect, Sequelize } from "sequelize"; //vai fazer a conexao com o banco de dados
import * as dotenv from 'dotenv'

const result = dotenv.config()

const host = process.env.HOST
const username = 'root'
const database = process.env.DATABASE || ''
const password = process.env.PASSWORD 
const dialect: Dialect = "mysql"
//TODO: verificar por que ele nao consegue pegar apartir do process.env.DIALECT


export const connection = new Sequelize(database, username, password,  {
    host,
    dialect
})


    
    


