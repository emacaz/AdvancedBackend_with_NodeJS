const fs = require('fs')

fs.copyFile('./mkdir.js', './mkdirCopy2.js', err => {
  if(err) {
    return console.log(err)
  }

  console.log('El archivo fue copiado con éxito');
})