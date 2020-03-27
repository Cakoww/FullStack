'use strict';
var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res) {
    var list = 
        [
            {
                "id": "001",
                "name": "user 1",
                "email":"teste@tetse.com"
        }, {
            "id": "002",
            "name": "Detonator",
            "email": "detonator@tetse.com"

        }, {
            "id": "003",
            "name": "Mr. Katsunomoto",
            "email": "adminorjst@tetse.com"

        }
        ]

    console.log(JSON.stringify(list));
    res.render('users', { users: list});
});

module.exports = router;
