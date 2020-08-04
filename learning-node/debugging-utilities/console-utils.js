// console.log works with a util-format that means:
// %s -> String
// %d -> Number
// %j -> JSON
// Small placeholders to format our data
console.log("Mi %s tiene %d años", "perro", 5)

// Alias del "console.log"
console.info("Hello World")

// Alias del "console.error"
console.warn("Hello error")

// if there´s an error, it shows us that there´s
// an error in a boolean or in a verification
// console.assert()

// Examples
console.assert(42 == "42") // it shows nothing
console.assert(42 === "42") // it shows a failure

// it indicates the lines where the error is located
console.trace("Hello error line")


// A DEBUG_LOG "CALL":

// Requiring the utility
const util = require('util')

// Invoking the "debugLog" calling:
const debugLog = util.debuglog("foo") // This is very similar to how it works the Express package
// New debugging with a namespace of "foo" (It´s the parameter)

debugLog("Hello from foo")
// To print the previous line, we need to pass our ENV variable
// in the terminal as:
// $ NODE_DEBUG=foo node YOUR_FILE.js