var express = require('express');
var router = express.Router();

/* GET create page. */
router.get('/create', function(req, res, next) {
    console.log('render create');
    res.render('create', { title: 'qSign | Create' });
});


module.exports = router;