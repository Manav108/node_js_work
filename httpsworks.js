const https = require('http');

const server = https.createServer((req,res) =>
{
    if(req.url==="/")
    {
        res.end("<h1>Hello World, Home Page</h1>");
    }
    else if(req.url==="/about")
    {
        res.end("<h1>Hello World, About Page</h1>");
    }
    else
    {
        res.end("<h1>Wrong Page</h1>")
    }
})



server.listen(5000);