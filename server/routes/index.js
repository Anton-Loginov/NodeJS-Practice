const express = require('express');
const router = express.Router();
const Article = require("../models/Article");
const Login = require("../models/Login");

router.get('/', function(req, res) {
  res.render('index', { title: 'Express' });
});

require('./article')(router, Article);
require('./login')(router, Login);

module.exports = router;
