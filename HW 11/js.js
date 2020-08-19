//Task 1
// const http = require("http");
// let os = require('os');
// let path = require('path');


// http.createServer(function (request, response) {
//   response.writeHead(200, {'Content-Type': 'text/html'});

//   response.write('<h1>System Information</h1>')

//   response.write('<p>Current user name: ' + os.userInfo().username + '</p>');
//   response.write('<p>OS type: ' + os.type() + '</p>');
//   response.write('<p>System work time: ' + (os.uptime()/60) + ' minutes</p>');
//   response.write('<p>Current work directory: ' + path.dirname(__filename) + '</p>');

//   response.end('<p>Server file name: ' + path.basename('C:/Users/Христинка/Desktop/JavaScript Core/HW 11/js.js') + '</p>');

// }).listen(5000);
// console.log('Server running at http://127.0.0.1:5000/');

//Task 2
var http = require('http');
var dt = require ('./personalmodule');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write(dt.myDateTime());
  res.end();
}).listen(8080);
console.log('Server running at http://127.0.0.1:8080/');