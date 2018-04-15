const parser = require('comment-parser')
const fs = require('file-system')

const buffer = fs.readFileSync(__dirname + '/stylus/elements/typography/headers.styl', 'utf-8')
console.log(parser.parse(buffer))
