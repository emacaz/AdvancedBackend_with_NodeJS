const fs = require('fs')

const server = require('http').createServer()

server.on('request', (req, res) => {
  const src = fs.createReadStream('./big.txt')
  src.pipe(res) // el res también es un stream

})

server.listen(3000, () => console.log('Listening at 3000'))