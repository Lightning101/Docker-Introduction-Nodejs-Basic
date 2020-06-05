'use strict';
const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Hero = require('../../models/hero.model');


router.get('/list', function (req, res, next) {
    Hero.find(function (err, products) {
        if (err) return next(err);
        res.json(products);
    });
});

module.exports = router;