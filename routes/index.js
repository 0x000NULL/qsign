var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'qSign | Home' });
});

/* GET create page. */
router.get('/create', function(req, res, next) {
    res.render('create', { title: 'qSign | create' });
});

/* GET faq page. */
router.get('/faq', function(req, res, next) {
    res.render('faq', { title: 'qSign | faq' });
});

module.exports = router;