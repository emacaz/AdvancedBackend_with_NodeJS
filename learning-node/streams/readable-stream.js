const { Readable } = require('stream')

const readableStream = new Readable()

readableStream.push(`${0/0} `.repeat(10).concat("Batman, Batman!"))
readableStream.push(null) // We say to the readableStream he stopped to receive data

readableStream.pipe(process.stdout)