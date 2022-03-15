let http=require('http')
let file=require('fs')
let server=http.createServer((req,res)=>{
    // request part 
    const url=req.url;
    const method=req.method;
    if(url==="/")
    {
        res.write('<html>')
        res.write('<head><title>my first page</title></head>')
        res.write('<body><form action="/message" method="post"><input type="text" name="message"/><button>click</button></form></body>')
        res.write('</html>')
        return res.end()

    }
    if(url==='/message' && method==='POST' )
    {
        file.writeFileSync('message.txt','DUMMY')
        res.statusCode=302;
        res.setHeader('Location','/')
        return res.end();
    }
    // console.log(req.url,"url");
    // console.log(req.headers);
    // console.log(req.method);
    // console.log(res);
    //response part
    res.setHeader('Content-Type','text/html')
    res.write('<html>')
    res.write('<head><title>my first page</title></head>')
    res.write('<body><h1>my first page in node js</h1></body>')
    res.write('</html>')
    res.end()
})

server.listen(8000)