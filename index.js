require('dotenv').config()
const express=require('express')
const app=express()
const port=4000
app.get('/',(req,res)=>{
    res.send('Hello world')
})
app.get('/login',(req,res)=>{
    res.send('login')
})

app.listen(process.env.PORT,()=>{
    console.log(`${port} at`);
})