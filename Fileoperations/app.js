var http = require('http');
 var requestListner = function(req,res){
     if(req.url=='/register'){
         res.writeHead(200);
         res.end("<h1>hii hello how are you</h1>");
     }
     else{
         res.writeHead(200);
         res.end("<h1>Jyothika</h1>");
     }
 };
 var server = http.createServer(requestListner);
 server.listen("3000");