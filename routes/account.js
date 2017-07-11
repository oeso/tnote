var express = require('express');
var router = express.Router();

/* write 2017-06-21 */
router.get('/account', function(req, res, next) {
    res.render('account', { title: 'account' });
});

module.exports = router;
