var http = require('http')
function myfun(req,res){
    console.log("running...")
    res.writeHead(200,{'content-Type':'text/plain'})
    res.write("hi shri")
    res.end()
}
http.createServer(myfun).listen(1230)