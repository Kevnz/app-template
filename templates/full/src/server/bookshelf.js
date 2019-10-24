const Knex = require('knex')
const Bookshelf = require('bookshelf')
const knexfile = require('../../knexfile')
const knex = Knex(knexfile[process.env.NODE_ENV || 'development'])

const bookshelf = Bookshelf(knex)

bookshelf.plugin('bookshelf-virtuals-plugin')

module.exports = bookshelf
