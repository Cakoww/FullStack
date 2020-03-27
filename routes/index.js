'use strict';
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res) {

    console.log('You are seeing the index page, welcome!');

    res.render('index', { title: 'Not so (Yellow) Pages' });
});

module.exports = router;
