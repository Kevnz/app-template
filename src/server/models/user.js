const bookshelf = require('../bookshelf')
require('./candidate')

module.exports = bookshelf.model('User', {
  tableName: 'users',
  idAttribute: 'id',
  votes: function() {
    return this.belongsToMany('Candidate', 'votes', 'user_id', 'candidate_id')
  },
})
