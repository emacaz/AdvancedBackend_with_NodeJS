const EventEmitter = require('events')

class Logger extends EventEmitter {
  execute(cb) {
    console.log('Before')
    this.emit('start')
    cb()
    this.emit('Finish')
    console.log('After')
  }
}

const logger = new Logger()

logger.on('start', () => { // Cada vez que ocurra el evento 'start', haga algo...
  console.log('Starting')
})

logger.on('Finish', () => console.log('Finishing'))
logger.on('Finish', () => console.log('It is Done'))

logger.execute(() => console.log('Hello world'))