import express from 'express'

const PORT=8000;

const app =express()
const users = [{'name':'rahul chahar','age':23,'email':'rahul@gmail.com'},
    {'name':'ravi singh','age':32,'email':'ravi@gmail.com'}
]

app.get('/',(req,res)=>{
    res.send("home page")
})

app.get('/users',(req,res)=>{
    res.send(users)
})

app.listen(PORT,()=>{
    console.log(`server is running on localhost:${PORT}`);
    
})
