var express = require('express'),
    router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index', {
        title: 'Gleaner Users'
    });
});

/* GET contact page. */
router.get('/contact', function (req, res, next) {
    res.render('contact', {});
});

/* GET login page. */
router.get('/login', function (req, res, next) {
    res.render('login', {});
});

/* GET forgot page. */
router.get('/login/forgot', function (req, res, next) {
    res.render('forgot', {});
});

/* GET reset page. */
router.get('/login/reset/:token', function (req, res, next) {
    res.render('reset', {
        token: req.params.token
    });
});

/* GET signup page. */
router.get('/signup', function (req, res, next) {
    res.render('signup', {});
});

/* GET users list view. */
router.get('/users', function (req, res, next) {
    res.render('users', {});
});

/* GET pofile view. */
router.get('/users/:userId', function (req, res, next) {
    res.render('profile', {
        userId: req.params.userId
    });
});

module.exports = router;
