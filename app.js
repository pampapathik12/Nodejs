// core modules
 /* 
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

/* function rqListener(req, res) {

} */

/* http.createServer(rqListener); */

const server = http.createServer((req, res) => {
    //console.log(req.url, req.method, req.headers);
    // set header content type
    console.log(req);
});
server.listen(3000);// port number