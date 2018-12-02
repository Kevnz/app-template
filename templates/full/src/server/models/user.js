const bookshelf = require('../bookshelf')

module.exports = bookshelf.model('User', {
  tableName: 'users',
  idAttribute: 'id'
})
