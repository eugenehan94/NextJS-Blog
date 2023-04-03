// https://nextjs.org/learn/basics/api-routes/creating-api-routes

// req = HTTP incoming message, res = HTTP server response
//export default function handler(req, res) {
// ...
//}


export default function handler(req, res) {
    res.status(200).json({text: 'Hello'})
}