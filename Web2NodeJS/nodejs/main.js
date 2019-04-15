var http = require('http');
var fs = require('fs');
var url = require('url');

var app = http.createServer(function(request,response){
    var _url = request.url;
    var queryData = url.parse(_url, true).query;
    var pathname = url.parse(_url, true).pathname;

    if(pathname === "/"){
      var title = queryData.id;

      if(title === undefined){
        title = 'Welcomd';
        var description = 'Hello, Node.Js';
        var templet = `
        <!doctype html>
    <html>
    <head>
      <title>WEB1 - ${title}</title>
      <meta charset="utf-8">
    </head>
    <body>
      <h1><a href="/">WEB</a></h1>
      <ol>
        <li><a href="/?id=HTML">HTML</a></li>
        <li><a href="/?id=CSS">CSS</a></li>
        <li><a href="/?id=JavaScript">JavaScript</a></li>
      </ol>
      <h2>${title}</h2>
      <p>
          ${description}
      </p>
    </body>
    </html>
        `;
    
        response.writeHead(200);
        response.end(templet);
        
      } else{
        fs.readFile(`data/${title}.txt`, 'utf8', function(err, data){
          var description = data;
          var templet = `
        <!doctype html>
    <html>
    <head>
      <title>WEB1 - ${title}</title>
      <meta charset="utf-8">
    </head>
    <body>
      <h1><a href="/">WEB</a></h1>
      <ol>
        <li><a href="/?id=HTML">HTML</a></li>
        <li><a href="/?id=CSS">CSS</a></li>
        <li><a href="/?id=JavaScript">JavaScript</a></li>
      </ol>
      <h2>${title}</h2>
      <p>
          ${description}
      </p>
    </body>
    </html>
        `;
    
        response.writeHead(200);
        response.end(templet);
        });
      }
      
    } else{
      response.writeHead(404);
      response.end('Not found');
    }

    
});
app.listen(3000);