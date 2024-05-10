// const http = require('http');
// const server = http.createServer((req, res)=>{
//     if (req.url === '/') {
//       res.setHeader('Content-Type', 'text/html')
//       res.write('<h1>Hello There</h1>')
//       res.end()  
//     }
// })

// server.listen(8001, ()=>{
//     console.log('Server is running on port 8001')
// })


const express  = require('express')
const app = express()
const dotenv=require('dotenv').config()
const PORT = 8001
const mongoose = require("mongoose")
const userRoute = require('../route/Route')
const cors = require('cors')
app.use(cors(
    // {origin: ['http://localhost:3000']}
    {origin: ['http://localhost:3000','https://task-manager-tau-ten.vercel.app/']}
))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(userRoute)




// console.log(process.env.SBFENV)
mongoose.connect (process.env.SBFENV)
.then ((req,res)=>{
    app.listen (PORT,()=>{
        console.log(`server is now running ${PORT}` );
    })
    console.log('db connected');
    app.get('/',(req,res)=>{
        res.send('home page')
    })    
})
    .catch((err)=>{
    console.log(err);
})




