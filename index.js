const path = require('path')

require = require("@std/esm")(module, { cjs: true, esm: "js" })

const byLine = require("./modules/index.js").default

module.exports = byLine
