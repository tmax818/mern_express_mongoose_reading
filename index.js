const fs = require('fs')

const files = ['config', 'controllers', 'models', 'routes']

files.forEach(file => {
fs.mkdirSync(`${__dirname}/server/${file}/`, {recursive: true})
})

