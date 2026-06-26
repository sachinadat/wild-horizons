import http from 'node:http'

const PORT = 8000

const server = http.createServer((req, res) => {

    if (req.url === '/api' && req.method === 'GET') {
        res.end('Hello Hello Hello')
    } else {
        res.end()
    }

})

server.listen(PORT, () => console.log(`Server started on ${PORT}`))