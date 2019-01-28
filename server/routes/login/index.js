'use strict';

const getItem = require('./get');
const postItem = require('./post');
const bodyParser = require('body-parser');
const urlencodedParser = bodyParser.urlencoded({ extended: false });

module.exports = (router, Login) => {
  router.get('/login', getItem(Login));
  router.post('/login', urlencodedParser, postItem(Login));
};