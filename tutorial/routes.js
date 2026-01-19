const fs = require('fs');

const requestHandler = (req, res) => {
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
        // console.log('req',req)
        const body = [];
        req.on('data', (chunk) => {
            console.log(chunk);
            body.push(chunk);
        });
        return req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString();
            console.log(parsedBody);
            // strore the data into our file
            const message = parsedBody.split('=')[1];
           // fs.writeFileSync('message.txt', message);// it will block the next line until this line is executed
            fs.writeFile('message.txt', message, (err) => {
                res.statusCode = 302;
                res.setHeader('Location', '/');
                return res.end();
            });
            // fs.writeFileSync('hello.txt', 'DUMMY');

        });

        res.setHeader('Content-Type', 'text/html');
        res.write('<head><title>My First Page</title></head>');
        res.write('<body><h1>Hello from my Node.js Server!</h1></body>');
        res.write('<html>');
        res.end();
    }
}