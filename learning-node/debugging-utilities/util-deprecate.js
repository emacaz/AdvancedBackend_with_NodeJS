const util = require('util')

// We make 2 "wrap" of an obsolete funtion
// and we want to make to know our users
// this function it may not be used
const helloPluto = util.deprecate(() => {
  console.log("Hello Pluto")
}, "Pluto is deprecated. It is not a planet anymore")

helloPluto()