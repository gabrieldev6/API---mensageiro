import Friend from './entities/Friend'
import { Message } from './entities/Message'
import { User } from './entities/User'
import { ResponseModel } from './infrastructure/controller/UserController'



// let gabriel = User.create("sloxkira6", "gabriel@gmail.com", "G1a2b3r4i5e6l7,.",[null])
// let matheus = User.create("coxinha", "doquinha@gmail.com", "m1a2t3a4r5a6c0", [null])
// let lara = User.create("noobkill", "laraforadacasinha@gmail.com", "matue345,.", [null])

// let friend1 = Friend.create(gabriel, [null])
// let friend2 = Friend.create(lara, [null])
// let friend3 = Friend.create(matheus, [null])

// let mensagem1 = Message.create("hey hi",new Date(), matheus, gabriel)


// matheus.addFriend(friend1)
// matheus.addFriend(friend2)
// matheus.addFriend(friend3)

// friend1.send(mensagem1)

// matheus.deleteFriend(friend1)

// //console.log(Object.values(matheus))
// console.log(matheus.getFriends())


let responseModel: ResponseModel = new ResponseModel()
console.log(responseModel)