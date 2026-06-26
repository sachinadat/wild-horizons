export default function sendResponse(res, payload, statusCode = 200) {
    res.setHeader('Content-Type', 'application/json')
    res.statusCode = statusCode
    res.end(JSON.stringify(payload))
}