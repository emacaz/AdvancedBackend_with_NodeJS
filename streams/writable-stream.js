const { Writable } = require('stream') //Native class from js

const writableStream = new Writable({
  write(chunk, encoding, callback) {
    console.log(chunk.toString())
    callback()
  }
})

process.stdin.pipe(writableStream)