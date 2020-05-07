var express = require('express');
var router = express.Router();

/* GET 404 page. */
router.get('/', function(req, res, next) {
    res.render('page404', { title: 'qSign | 404' });
});


module.exports = router;