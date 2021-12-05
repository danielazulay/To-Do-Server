require('dotenv').config()
const express = require('express')
const cors= require('cors')
const app = express()
const conectTODb = require('./db/db.config')
const userRouter = require('./router/userRouter')
const projectRouter = require('./router/projectRouter')
const taskModel = require('./router/taskRouter')
app.use(express.json())
app.use(cors())
async function init(){

    const db = await conectTODb()

app.use('/',userRouter)
app.use('/',projectRouter)
app.use('/',taskModel)

    app.listen(process.env.PORT,()=>{

        console.log('conectado na porta : ',process.env.PORT)
    })

}

init()