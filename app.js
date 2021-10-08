const express = require('express')
const bodyparser = require('body-parser')
const users = require("./users")

const app = express()

app.use(bodyparser.urlencoded({extended:true}))


app.get('', (req,res)=>{
    res.sendFile(__dirname + "/index.html")

})

app.post('/',(req,res)=>{
    const a = Number(req.body.FirstNumber)
    const b = Number(req.body.SecondNumber)
    const add = a + b
    
    res.send("The Value is" + " " + add)
   
})


app.listen(3000, (res)=>{
        console.log('Server is running on port 3000')
})