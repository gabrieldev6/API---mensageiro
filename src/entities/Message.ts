import {User} from "./User"


export class Message {
    private readonly message: string
    private readonly date:Date
    private readonly howSend: User
    private readonly howGet: User

    private constructor( message: string, date:Date, howSend: User, howGet: User) {

        this.message = message
        this.date=date
        this.howSend=howSend
        this.howGet=howGet
    }

    static create(message: string, date:Date, howSend: User, howGet: User) {
        return new Message( message, date, howSend, howGet)
    }

    getMessage() {
        return this.message
    }
    getDate() {
        return this.date
    }
    getHowSend(){
        return this.howSend
    }
    getHowGet() {
        return this.howGet
    }
}