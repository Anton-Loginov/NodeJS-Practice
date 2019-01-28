'use strict';

module.exports = () => {
  return (req, res) => {
    if (!req.body) return res.sendStatus(400);
    res.render('login', { email: req.body.email, password: req.body.password });
  }
};