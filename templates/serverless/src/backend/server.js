const Hapi = require('@hapi/hapi')
const LaLaLambda = require('lalalambda')

exports.deployment = async start => {

  const server = Hapi.server({
    port: process.env.PORT,
    routes: {
      files: {
        relativeTo: Path.join(__dirname, 'public'),
      },
      cors: {
        origin: ['*'],
        additionalHeaders: ['x-serverless', 'content-type'],
      },
    },
  })

  await server.register(LaLaLambda)

  await server.register(Manifest)

  if (start) {
    await server.start()
    console.info(`Server started at ${server.info.uri} 🚀`)
  }
  return server
}

if (!module.parent) {
  exports.deployment(true)
}
