import {Message} from "./Message"
import {User} from "./User"

export default class Friend {
    private readonly nickname:string
    private readonly email:string
    private readonly chat: Array<Message| null>

    private constructor(user: User, chat:Array<Message| null>) {
        
        this.nickname = user.getNickname()
        this.email = user.getEmail()
        this.chat = chat
    }

    static create(user: User, chat:Array<Message| null>) {   
            return new Friend(user, chat) 
    }
    
    send(message: Message) {
        if(this.chat[0]==null) {
            this.chat[0] = message
        }else {
            this.chat.push(message)
        }
        
    }
    getNickname(){
        if(this.nickname != null ) {
            return this.nickname
        }
        
    }
    getEmail():string{
        return this.email
    }
    getChat(): Array<Message | null>{
        return this.chat
    }
}