/*
var http = require('http');
function onRequest(request, response) {
    console.log("사용자가 request 합니다" + request.url);
    response.writeHead(200, {"Context-Type": "text/plane"});
    response.write("This is my web server");
    response.end();
}
http.createServer(onRequest).listen(8888);
console.log("서버가 실행되었습니다");
//-------------------------------------------

var http = require("http");
var fs = require("fs");

// 웹페이지 없을 때 404 response
function send404Response(response) {
    response.writeHead(404, {"Content-Type": "text/plain"});
    response.write("404 Error: Couldn't find the page");
    response.end();
}
// 사용자 요구에 응답 처리
function onRequest(request, response) {
    if(request.method == "GET" && request.url == '/') {
        response.writeHead(200, {"Content-Type": "text/html"});
        fs.createReadStream("./index.html").pipe(response);
    }
    else {
        // 파일이 없을 경우
        send404Response(response);
    }
}

function onRequset(request, response){

}

http.createServer(onRequest).listen(8888);
console.log("서버가 실행되었습니다");

//---------------------------------------------
//var http = require("http");
// connect : 프레임워크
// Express : 프레임워크
var connect = require('connect');
var http = require('http');

var app = connect();

function doOne(request, response, next) {
    console.log("do one");
    next();
}
function doTwo(request, response) {
    console.log("do two");
}

app.use(doOne);
app.use(doTwo);
http.createServer(app).listen(8888);
console.log("Server is on");

*/


var connect = require('connect');
var http = require('http');
var app = connect();

function about(request, response) {
    console.log("사용자가 about페이지를 요청하였습니다");
}


function email(request, response) {
    console.log("사용자가 email페이지를 요청하였습니다");
}

app.use('/about', about);
app.use('/email', email);

http.createServer(app).listen(8888);
console.log("Server is on");
