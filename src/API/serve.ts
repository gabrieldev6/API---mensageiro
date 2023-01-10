import * as dotenv from 'dotenv'
const result = dotenv.config()

import {app} from "./app"

const port = process.env.PORT || 3030

app.listen(port, ()=> {
    console.log(`servidor conectou na rota http://localhost:${port}`)

})