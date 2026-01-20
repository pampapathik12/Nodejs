const express = require('express');
const path = require('path');
const rootDir = require('../util/path');

const router = express.Router();

const products = [];

router.get('/add-product', (req, res, next) => {
   // console.log('In the middleware!1');
    //res.send('<form action="/admin/add-product" method="POST"><input type="text" name="title"><button type="submit">Add Product</button></form>');
    res.sendFile(path.join(rootDir, 'views', 'add-product.html'));
   // next();
});

// admin/add-product
router.post('/add-product', (req, res, next) => {
   products.push({ title: req.body.title });

    res.redirect('/');
   // next();
});



exports.router = router;
exports.products = products;