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
    // const method = req.method;

    console.log('Request made', res);// it will print in the terminal
});
server.listen(3000);// port number

/* stream and buffer the data data coming the stream of incoming requests and fully parsed the data */
/* Buffer zone is contract , allow the mulstiple cheunks once the full load is complete */