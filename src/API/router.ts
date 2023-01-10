//imports default express
import { User } from '../entities/User'
import {Router} from 'express'


//import controllers
import { ResponseModel } from '../infrastructure/controller/UserController'
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

router.get("/home", (req: any, res: any)=> {
    res.send('get request')
})


export {router}


//POST:cria