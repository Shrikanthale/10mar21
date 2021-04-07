//import importcore from '../core.js';
//importcore.isEven(10)


import http from "http"
const server =http.createServer()
 
server.on('request' , myfun)
function myfun(req,res){
    console.log("running...")
    res.writeHead(200,{'content-Type':'text/plain'})
    res.write("hi shri")
    res.end()
}
server.listen(1230)