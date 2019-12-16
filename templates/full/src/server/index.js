require('xtconf')()
const Path = require('path')

const Hapi = require('@hapi/hapi')
const Manifest = require('./manifest')

let app

const start = async () => {
  try {
    const server = app = Hapi.server({
      port: process.env.PORT,
      routes: {
        files: {
          relativeTo: Path.join(__dirname, 'public'),
        },
        cors: {
          origin: ['*'],
          additionalHeaders: ['x-media-server', 'content-type'],
        },
      },
    })
    await app.register(Manifest)
    await app.start()
  } catch (err) {
    console.error(err)
    process.exit(1)
  }
  console.info('🚀 Server running')
}

process.on('SIGINT', async () => {
  console.warn('stopping server')
  try {
    await app.stop({ timeout: 10000 })
    console.warn('The server has stopped 🛑')
    process.exit(0)
  } catch (err) {
    console.error('shutdown server error', err)
    process.exit(1)
  }
})

start()
