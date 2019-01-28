'use strict';

module.exports = (Article) => {
  console.log(Article);
  return (req, res) => {
    res.send('get article for Blog');
  }
};