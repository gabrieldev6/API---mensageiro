import Friend from "./Friend"
import { v4 as uuid } from "uuid"

export class User {
    private readonly id: string
    private nickname: string
    private email: string
    private password: string
    private friends: Array<Friend | null>

    private constructor(nickname:string, email:string, password:string, friends: Array<Friend | null>) {
        this.id = uuid()
        this.nickname = nickname
        this.email = email
        this.password = password
        this.friends = friends
        
        this.validate()
    }

    static create(nickname:string, email:string, password:string, friends: Array<Friend | null>) {
        return new User(nickname, email, password, friends)
    }

    addFriend(friend: Friend) {
        if(this.friends[0]==null) {
            this.friends[0] = friend
        }else {
            this.friends.push(friend)
        }
    }

    deleteFriend (friend: Friend) { 

        this.friends.forEach((value, index)=> {

            if(friend == value) {
                this.friends.splice(index, 1)
            }
            return "friend not found"
        })
        
    }
    
    validate() {
        let validateEmail = new RegExp("^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$")
        let validatePassword = new RegExp("^(?=.*[A-Za-z])(?=.*?[0-9]).{6,}$")
        if(this.nickname == null) {
            throw new Error('preciso de um nickname')
        }
        if(!validatePassword.test(this.password) && this.password == null) {
            throw new Error('A senha precisa conter letras maiusculas, minusculas, numeros e caracteres especiais, tente novamente')
        }
        if(!validateEmail.test(this.email) && this.email == null) {
            throw new Error('Email não é valido, tente novamente')
        }

    }
    getId() {
        return this.id
    }
    getNickname() {
        return this.nickname
    }
    getEmail() {
        return this.email
    }
    getPassword() {
        return this.password
    }
    getFriends() {
        return this.friends
    }

}