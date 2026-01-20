const express = require('express');
const adminData = require('./routes/admin');
const shoproutes = require('./routes/shop');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
app.set

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
app.use('/admin', adminData.router);
app.use(shoproutes);

app.use((req, res, next) => {
    res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
});

app.listen(3000);
