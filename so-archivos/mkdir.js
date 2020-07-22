const fs = require('fs')


// To create several directories and if they don´t exist
// I tell it to create with "recursive: true"
fs.mkdir("platzi/escuela-js/node", { recursive: true }, err => {
  if(err) {
    return console.log(err)
  }
})