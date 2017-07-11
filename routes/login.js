var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Express' });
});

/* write 2017-06-21 */
router.get('/login', function(req, res, next) {
    res.render('login', { title: 'Login' });
});

module.exports = router;
