const fs = require('fs')

  const file = process.argv[2] //To be able to read what we write over the terminal
  // the number 2 indicates the position of the word to read
  // i.e.: node sync-files.js orange.txt <- in the previos case, it takes the "second" word
  // orange.txt. BECAUSE the 1 = sync-files.js and the 0 = node

  if (!file) {
    throw new Error('Debes indicar el archivo que quieres leer')
  }

  const content = fs.readFile(file, function(err, content) {
    if (err) {
      return console.log('error: ', err)
    }

    const lines = content.toString().split('\n').length
    console.log("Lines: ", lines)
  })