const express = require('express');
const path = require('path');
const rootDir = require('../util/path');


const router = express.Router();

router.use('/', (req, res, next) => {
   // console.log('In the shop middleware!');
    //res.send('<h1>Welcome to the Shop Page!</h1>');
    res.sendFile(path.join(rootDir, 'views', 'shop.html'));
   // next();
});

module.exports = router;