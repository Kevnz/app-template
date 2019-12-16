const Types = require('./graphql/types')
const Resolvers = require('./graphql/resolvers')
module.exports = [
  {
    plugin: require('blipp'),
  },
  {
    plugin: require('@hapi/vision'),
  },
  {
    plugin: require('@hapi/inert'),
  },
  {
    plugin: require('@hapi/good'),
    options: {
      ops: {
        interval: 30 * 200,
      },
      reporters: {
        console: [
          {
            module: '@hapi/good-console',
            args: [{ log: '*', response: '*' }],
          },
          'stdout',
        ],
      },
    },
  },
  {
    plugin: require('hapi-router'),
    options: {
      routes: ['src/server/routes/**/*.js'],
    },
  },
  {
    plugin: require('graphi'),
    options: { schema: Types, resolvers: Resolvers },
  }
]
