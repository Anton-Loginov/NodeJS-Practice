'use strict';

const getItem = require('./get');
const createItem = require('./post');
const updateItem = require('./put');
const deleteItem = require('./delete');

module.exports = (router, Article) => {
  router.get('/items', getItem(Article));
  router.get('/items/:id', getItem(Article));
  router.post('/items', createItem(Article));
  router.put('/items', updateItem(Article));
  router.delete('/items', deleteItem(Article));
  router.delete('/items:id', deleteItem(Article));
};