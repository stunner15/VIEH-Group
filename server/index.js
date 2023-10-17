const express=require("express")
const mongoose=require('mongoose')
const cors=require("cors")
const SignupModel=require('./models/Signup')

const app=express()
app.use(express.json())
app.use(cors())

mongoose.connect("mongodb://127.0.0.1:27017/Signup")

app.post('/',(req,res)=>{
    SignupModel.create(req.body)
    .then(Signup=>res.json(Signup))
    .catch(err=>res.json(err))
})

app.post('/login',(req,res)=>{
    const {email,password}=req.body
    SignupModel.findOne({email:email})
    .then(user=>{
        if(user){
           if(user.password===password){
            res.json("Success")
           }else{
            res.json("Incorrect Password")
           }
        }else{
            res.json("No Record existed")
        }
    })
})

app.listen(3001,()=>{
    console.log("Server is Running")
})