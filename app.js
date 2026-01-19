/* node app.js */

const express = require('express');
const adminroutes = require('./routes/admin');
const shoproutes = require('./routes/shop');

const bodyParser = require('body-parser');
const path = require('path');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));// to parse the incoming request bodies

app.use(express.static(path.join(__dirname, 'public')));// to serve static files like css, images , js  from public folder
app.use('/admin', adminroutes);
app.use(shoproutes);

/* app.use('/',(req, res, next) => {
    console.log('In the middleware!');
    res.send('<h1>Welcome to the Home Page!</h1>');
   // next();
}); */
app.use((req, res, next) => {
   
   // res.status(404).send('<h1>Page Not Found!</h1>');
   res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
   // next();           
})



app.listen(3000);
