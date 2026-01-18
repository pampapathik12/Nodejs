/* node app.js */
// core modules
/* 
//http://localhost:3000/
http -> launching a server and send requests
https -> launch a ssl server
fs  -> file system  to read and write files
path -> work with file and directory path
as -> work with operating system
*/
const fs = require('fs');
const http = require('http');// it will alwasy look for the global modules
const path = require('path');
const os = require('os');
const https = require('https');// 

fs.writeFileSync('hello.txt', 'Hello, World! pampa', 'utf8');

/* function rqListener(req, res) {

} */

/* http.createServer(rqListener); */

const server = http.createServer((req, res) => {
    //console.log(req.url, req.method, req.headers);
    // set header content type
    // console.log(req.url,req.method,req.headers);
    // console.log(req);
    //process.exit()
    const url = req.url;
    if (url === '/') {
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write('<head><title>My First Page</title></head>');
        res.write('<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form></body>');
        res.write('<html>');
        return res.end();

    } else if (url === '/about') {
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write('<head><title>About Page</title></head>');
        res.write('<body><h1>About Page</h1></body>');
        res.write('</html>');
        return res.end();
    } else if (url === '/message' && req.method === 'POST') {
        fs.writeFileSync('message.txt', 'DUMMY');
        res.statusCode = 302;
        res.setHeader('Location', '/');
       return res.end();
        // res.setHeader('Content-Type', 'text/html');
        // res.write( '<head><title>My First Page</title></head>');
        // res.write('<body><h1>Hello from my Node.js Server!</h1></body>'); 
        // res.write( '<html>');
        // res.end();
    }
    console.log('Request made', res);// it will print in the terminal
});
server.listen(3000);// port number