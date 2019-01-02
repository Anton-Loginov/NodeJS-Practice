const express = require('express');
const bodyParser = require('body-parser');
const router = express.Router();
const urlencodedParser = bodyParser.urlencoded({ extended: false });

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* GET login page. */
router.get('/login', function(req, res, next) {
  res.render('login', { title: 'Login' });
});

router.post('/login', urlencodedParser, function (req, res) {
  if (!req.body) return res.sendStatus(400);
  res.render('login', { email: req.body.email, password: req.body.password });
});

module.exports = router;
