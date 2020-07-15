const http = require('http')
const server = http.createServer()

server.on('request', (req, res) => {
  res.statusCode = 200
  res.setHeader('Content-Type', 'text/plain')// tipo de respuesta que vamos a recibir

  res.end('Hello world\n')
})

server.listen(9000, () => console.log('Servidor en la URL http://localhost:9000'))