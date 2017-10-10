var http=require('http');
var fs=require('fs');
var url=require('url');
var qs=require('querystring');
var users=[];
http.createServer(function(req,res) {
    var u=url.parse(req.url);
    if (u.pathname == 'favicon.ico') {
        res.end();
        return;
    }
    if(u.pathname=='/'||u.pathname=='/ajax-post.html'){
        fs.readFile('./ajax-post.html',function(err,data){
            res.write(data);
            res.end();
        })
        return;
    }
    if(u.pathname=='/login'){
        var data="";
        req.on('data',function(d){
            data+=d;
        })
        req.on('end',function(){
            users.push(qs.parse(data));
            res.end('登录成功');
            console.log(users)
        })
    }
}).listen(8080);