const express = require('express');
const bodyParser = require('body-parser');
const Orders = require('../models/orders');

const ordersRouter = express.Router();
ordersRouter.use(bodyParser.json());

ordersRouter.route('/')
.post((req, res, next) => {
    Orders.create(req.body)
    .then(order => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(order);
    }, (err) => next(err))
    .catch((err) => next(err));
})

module.exports = ordersRouter;