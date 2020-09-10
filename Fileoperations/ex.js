var http=require('http');
var reqlistener=function(req,res)
{
    if(req.url=='/register')
    {res.writeHead(200);
        res.end("<h1>WELCOME</h1>")
    }
    else{
    res.writeHead(200);
    res.end("<h1>HIII</h1>")}
};
var server=http.createServer(reqlistener);
server.listen("8080")