'use strict';
var express = require('express');
var router = express.Router();

const { getArticle, insertArticle } = require('../persistence/articlePersistence')

/* GET users listing. */
router.get('/', async function (req, res) {
    try {

        var articlelist = [];

        articlelist = await getArticle();
        console.log('this is how a console log looks like on Log file');
        res.render('articles', { articles: articlelist });


    } catch (error) {
        console.log(error);
        res.status(500);
        res.send({ messase: 'An Error Occured' })
    }
});

router.post('/insert', async function (req, res) {
    try {
        var article = req.body;

        console.log(req.body);
        await insertArticle(article);
        res.redirect('/articles');

    } catch (error) {
        console.log(error);
        res.status(500);
        res.send({ messase: 'An Error Occured' })
    }
});

module.exports = router;
