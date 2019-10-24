module.exports = [ {
  method: 'get',
  path: '/api/home',
  options: {
    id: `get-home`,
    plugins: {
      lalalambda: true,
    },
    handler: async (r, h) => {
      return {
        result: 'something'
      }
    },
  },
}]