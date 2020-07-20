const fs = require('fs')

try {
  const file = process.argv[2] //To be able to read what we write over the terminal
  // the number 2 indicates the position of the word to read
  // i.e.: node sync-files.js orange.txt <- in the previos case, it takes the "second" word
  // orange.txt. BECAUSE the 1 = sync-files.js and the 0 = node

  const content = fs.readFileSync(file).toString()

  const lines = content.split('\n').length
  console.log("Lines: ", lines)

} catch (error) {
  return console.log(error)
}