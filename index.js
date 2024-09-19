const os = require('os')


// platform() is which device you enter
// console.log(os.platform())

// information
// console.log(os.cpus())

//architecture
// console.log(os.arch())

// show memory
// console.log(os.freemem())

//total memory
// console.log(os.totalmem())

const fs = require('fs')
const path = require('path')

const http = require('http')

const server = http.createServer((req, res) => {
    if (req.method === 'GET') {
        res.writeHead(200, { "Content-Type": "text/html" })
        if (req.url === '/') {
            fs.readFile(path.join(__dirname, 'template', 'index.html'), (err, content) => {
                if (err) throw err
                res.end(content)
            })
        }
        res.end(``)
    } else if (req.method === 'POST') {
        const body = []

        req.on('data', data => {
            body.push(Buffer.from(data))
        })

        req.on('end', () => {
            const message = body.toString().split('=')[1]

            res.end(`Name Successfully added:) ${message}`)
        })
    }
})

server.listen(3002, () => {
    console.log('Server has been started on port: 3002')
})