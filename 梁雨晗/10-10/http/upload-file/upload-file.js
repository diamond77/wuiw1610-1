var http=require('http');
var fs=require('fs');
var url=require('url');
var p=require('path');
var formidable=require('formidable');
http.createServer(function(req,res) {
    var u=url.parse(req.url);
    if (u.pathname == 'favicon.ico') {
        res.end();
        return;
    }
    if(u.pathname=='/'||u.pathname=='/upload-file.html'){
        fs.readFile('./upload-file.html',function(err,data){
            res.write(data);
            res.end();
        })
        return;
    }
    if(u.pathname=='/uploads'){
        var form = new formidable.IncomingForm();

        form.parse(req, function(err, fields, files) {
            fs.existsSync('./upload')||fs.mkdir('./upload');
            var d=new Date();
            var path=d.getFullYear()+"-"+(d.getMonth()+1)+"-"+d.getDate();  //创建名字为2017-10-10的文件夹
            fs.existsSync('./upload/'+path)||fs.mkdir('./upload/'+path);
            var filename=''+d.getTime()+Math.floor(Math.random()*1000)+p.extname(files.avatar.name);
            var lujing='/upload/'+path+'/'+filename;
            // console.log(filename)
            fs.readFile(files.avatar.path,function (err,data) {
                fs.writeFile('.'+lujing,data,function (err) {
                    res.end(lujing);
                });
            })
        });
        return;
    }

    if(fs.existsSync('.'+u.pathname)){
        fs.readFile('.'+u.pathname,function (err,data) {
            res.end(data);
        })
    }
}).listen(8080);