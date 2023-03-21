const express = require('express');
const bodyParser = require('body-parser');
const Products = require('../models/products');

const productsRouter = express.Router();
productsRouter.use(bodyParser.json());

productsRouter.route('/')
.get((req, res, next) => {
    Products.find(req.query)
    .then(products => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(products);
    }, err => next(err))
    .catch(err => next(err));
})

module.exports = productsRouter;