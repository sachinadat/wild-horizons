import http from 'node:http'
import { getDataFromDB } from './database/db.js'
import sendResponse from './utils/sendResponse.js'
import getDataByPathParams from './utils/getDataByPathParams.js'
import { getDataByQueryParams } from './utils/getDataByQueryParams.js'

const PORT = 8000

const server = http.createServer(async (req, res) => {
    const destinations = await getDataFromDB()
    const urlObj = new URL(req.url, `http://${req.headers.host}`)

    if (urlObj.pathname === '/api' && req.method === 'GET') {
        const queryParams = Object.fromEntries(urlObj.searchParams)
        const filteredData = getDataByQueryParams(destinations, queryParams)
        sendResponse(res, filteredData)
    } else if (req.url.startsWith('/api/country') && req.method === 'GET') {
        const country = req.url.split('/').pop()
        const filteredData = getDataByPathParams(destinations, 'country', country)
        sendResponse(res, filteredData)
    } else if (req.url.startsWith('/api/continent') && req.method === 'GET') {
        const continent = req.url.split('/').pop()
        const filteredData = getDataByPathParams(destinations, 'continent', continent)
        sendResponse(res, filteredData)
    } else {
        sendResponse(res, {
            error: "not found",
            message: "The requested route does not exist"
        }, 404)
    }

})

server.listen(PORT, () => console.log(`Server started on ${PORT}`))