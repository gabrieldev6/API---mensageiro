//imports default express
import { User } from '../entities/User'
import {Router} from 'express'


//import controllers
import { ResponseModel } from '../infrastructure/controller/UserController'
import { authMiddleware } from '../middlewares/authMiddleware'

const router = Router()

let user: User

router.get("/", (req: any, res: any)=>{
    res.send({user})
})

router.post("/login", (req:any, res:any)=> {
    return ResponseModel.login(req, res)

})

router.post("/create_account", (req: any, res: any) => {
    return ResponseModel.create(req, res)
})

router.get("/home", authMiddleware, (req: any, res: any)=> {
    return ResponseModel.getProfile(req, res)
})


export {router}


//POST:cria