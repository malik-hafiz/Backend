import express from "express"
import dotenv from 'dotenv';
import { connectDb } from './utils/database.js'
import morgan from "morgan";
//import userRouter from "./router/userRouter.js";
dotenv.config(); 
const app = express()
app.use(morgan())
app.use(express.json())
const port = process.env.PORT || 8000

app.get('/',(req,res)=>{
    res.send(new Date().toString())
})

const data = [
{
    name:"ali",
    age:23
},
{
    name:"ali 2",
    age:23
},
{
    name:"ali 3",
    age:23
}
]
// for testing api's
// use postman, swagger,thunderclient,insomnia


connectDb()

app.get('/data',(req,res)=>{
    res.send(data)
    console.log(data)
})

const data = []
app.post('/post-data',(req,res)=>{
    res.status(201).send({data:req.body,message:"data posted"})
    data.push(req.body)
    console.log("data=>",req.body)
})

// routing
app.use("/api/v1/user",userRouter)


app.listen(port,()=>{
    console.log(`hello backend is running on ${port}` )
})