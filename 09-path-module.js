const path = require('path')

console.log(path.sep)

const filePath = path.join('/new/', 'folder', 'newfolder.txt')
console.log(filePath)

const base = path.basename(filePath)
console.log(base)

const absolute = path.resolve(__dirname, 'new', 'folder', 'newfolder.txt')
console.log(absolute)
