const path = require('path')
const { Observable } = require('rxjs')
const byLine = require('./index.js')

const file = path.resolve(__dirname, 'test.txt')
const parseCSV = byLine.parseBy('  ')

parseCSV(byLine(file))
  .subscribe(console.log)