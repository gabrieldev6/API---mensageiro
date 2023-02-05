//imports default express
import {Router} from 'express'


//import controllers
import { ResponseModel } from '../infrastructure/controller/UserController'
import { authMiddleware } from '../middlewares/authMiddleware'

const router = Router()


router.get("/", (req: any, res: any)=>{
    res.send("hello word")
})
router.post("/create_account", (req: any, res: any) => {
    return ResponseModel.create(req, res)
})

router.post("/login", (req:any, res:any)=> {
    return ResponseModel.login(req, res)

})

router.use(authMiddleware)

router.get("/home", (req: any, res: any)=> {
    return ResponseModel.getProfile(req, res)
})


export {router}


//POST:cria