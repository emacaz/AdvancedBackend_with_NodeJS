const { Duplex } = require('stream')
const { read } = require('fs')

const duplexStream = new Duplex({
  // Constructor
  write(chunk, encoding, callback) {
    console.log(chun.toString())
    callback()
  },

  read(size) {
    if(this.currentCharCode > 90) {
      this.push(null)
      return
    }

    this.push(String.fromCharCode(this.currentCharCode++))
  }
})

duplexStream.currentCharCode = 65
process.stdin.pipe(duplexStream).pipe(process.stdout)