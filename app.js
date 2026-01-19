/* node app.js */

const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));// to parse the incoming request bodies

app.use('/',(req, res, next) => {
    console.log('In the first middleware!');
    next();
});

app.use('/add-product', (req, res, next) => {
    console.log('In the middleware!1');
   // res.send('<h1>Hello from Express.js server!</h1>');
    res.send('<form action="/product" method="POST"><input type="text" name="title"><button type="submit">Add Product</button></form>');
   // next();
});

/* app.use('/product', (req, res, next) => {
    console.log(req.body);

    res.redirect('/');
   // next();
}); */

app.post('/product', (req, res, next) => {
    console.log(req.body);

    res.redirect('/');
   // next();
});

app.use('/',(req, res, next) => {
    console.log('In the middleware!');
    res.send('<h1>Welcome to the Home Page!</h1>');
   // next();
});



app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
