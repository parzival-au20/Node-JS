const fs = require('fs');
const qs = require('querystring');

const routeHandler = (req,res) => {
    const url = req.url;
    const method = req.method;
  
    res.setHeader('Content-Type','text/html');
  
    if (url === "/") {
      res.write(`
          <!DOCTYPE html>
          <html lang="en">
          <head>
              <meta charset="UTF-8">
              <meta name="viewport" content="width=device-width, initial-scale=1.0">
              <title>Document</title>
          </head>
          <body>
              <form action="/log" method="post">
              <input type="text" name="message">
              <button type="submit">Save</button>
              </form>
          </body>
          </html>`);
          return res.end();
    }
  if(url === '/log' && method === 'POST'){
  
      const body = []
      req.on('data',(chunk)=>{
          body.push(chunk);
          console.log(chunk);
      });
  
      req.on('end',()=>{
          const bodyParsed = Buffer.concat(body).toString();
          const message = bodyParsed.split('=')[1];
  
          console.log(qs.parse(bodyParsed));
  
          fs.appendFileSync('message.txt',message+'\n');
         
      });
      
      res.statusCode = 302;
      res.setHeader('Location','/');
      return res.end();
  }
}

module.exports = routeHandler ;