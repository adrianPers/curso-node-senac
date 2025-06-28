

const calc = require('./calc')
console.log(calc.soma(5, 6 , 26, 9))

const fs = require('fs')

let html = null

fs.readFile('arquivo.html', 'utf-8', (err, data) => {

    if(err) throw err;
    html = data

})

const http = require('http')
const server = http.createServer((req, res) => {
    res.write(html)
    res.end()
})

server.listen(3000)

