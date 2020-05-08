var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('home', { title: 'qSign | Home' });
});

/* GET faq page. */
router.get('/faq', function(req, res, next) {
    res.render('faq', { title: 'qSign | FAQ' });
});

module.exports = router;
