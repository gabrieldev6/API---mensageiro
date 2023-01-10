import { User } from "../../entities/User"
import { connection } from "../connection/connection"
import * as bcrypt from "bcrypt"
import Query from "mysql2/typings/mysql/lib/protocol/sequences/Query"
import { QueryTypes } from "sequelize"

export class ResponseModel {
    sucess: boolean
    data: Array<any> 
    error: Array<any>

    constructor(sucess?:boolean, data?: Array<any>, error?: Array<any>) {
        //Object.assign(this, sucess, data, error)
        
        if((sucess != undefined)&&(data != undefined)&&(error != undefined)) {
            this.sucess = sucess
            this.data = data
            this.error = error
        } else {
            this.sucess = false
            this.data = []
            this.error = []
        }
        
    }
    static responseModel() {
        return new ResponseModel()
    }

    static async create(req: any, res: any) {
        const response = {...new ResponseModel()}
        const salt = await bcrypt.genSalt(12)

        const {nickname, email, password} = req.body
        
        let user = User.create(nickname, email, password,[null])
        const passwordHash = await bcrypt.hash(user.getPassword(), salt)

        //apartir da conexao ele vai fazer uma query
        const [,affectRows] = await connection.query(
              "INSERT INTO `mensageiro`.`users` (`id`, `username`, `password`, `email`) VALUES('"+user.getId()+"','"+user.getNickname()+"','"+passwordHash+"','"+user.getEmail()+"');")

            //"INSERT INTO `mensageiro`.`users` (`id`, `username`, `password`, `email`) VALUES ('1', 'sloyxkira6', '12345678', 'chibata@gmail.com');"

        if(!user.getNickname()) {
            res.status(422).json({msg: 'nickname obrigatorio'})
        }
        if(!user.getEmail) {
            res.status(422).json({msg: 'email obrigatorio'})
        }
        if(!user.getPassword) {
            res.status(422).json({msg: 'password obrigatorio'})
        }
        response.sucess = true
        response.data = [user]
        return res.json(response)
    }

    static async login(req: any, res: any) {
        //TODO: concertar problema de dados mocados, para que ele possa receber outros valores alem dos que ja se
        const response = {...ResponseModel.responseModel()}
        
        
        const {nickname, password} = req.body

        const record = await connection.query(
            `SELECT * FROM mensageiro.users WHERE username='${nickname}';`, {type: QueryTypes.SELECT})
        //se nd for retornado ele vai criar a resposta
        
        try {
            const jsonstringfy= JSON.stringify(record[0])
            const jsonparse = JSON.parse(jsonstringfy)
            //console.log(`data obtido: ${jsonparse.email}`)
            
            response.sucess = await bcrypt.compare(password, jsonparse.password)
            return res.status(200).json(response)

        } catch(err) {
            response.sucess = false
            response.error = ['not found']
 
            res.status(404).json(response)
        }
    }
} 