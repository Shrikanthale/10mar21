import express from "express"
import bodyParser from "body-parser"
import userRouter from "./routes/users.js"

const server = express()
const PORT = 8000
server.use(bodyParser.json())

var homepage=(req,res) => res.send("welcome to our liberay express page")//handle http://localhos:8000

server.use("/user", userRouter)
server.get('/',homepage)

 server.listen(PORT)