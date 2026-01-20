const express = require('express');
const path = require('path');
const rootDir = require('../util/path');

const adminData = require('./admin');


const router = express.Router();

router.get('/', (req, res, next) => {
    console.log(adminData.products);
   // console.log('In the shop middleware!');
   console.log('Products:', adminData.products);
    //res.send('<h1>Welcome to the Shop Page!</h1>');
    res.sendFile(path.join(rootDir, 'views', 'shop.html'));
   // next();
});

module.exports = router;