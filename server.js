import http from "http";
import fs from 'fs/promises';
import path from 'path';
import url from 'url';

const PORT = process.env.PORT;


const __filename = url.fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

console.log(`file: ${__filename}  Directory Path: ${__dirname}`);


const server = http.createServer( async (req, res) => {
    console.log(`calling method`);
    // res.write(`Server running on port ${PORT}`);
    // res.statusCode = 202;
    // res.setHeader("Content-Type","text/html")
    // res.setHeader("custom-Type","data")
    // res.end(`<h1> hello from server</h1>`);
    console.log(
        `Request Method: ${req.method} Request URL: ${req.url}`
    );
    try {
        if (req.method == 'GET') {
            let filepath;
            if (req.url === '/') {
                filepath = path.join(__dirname,'public','index.html')
            } else if (req.url === '/home') {
                res.writeHead(200, { 'content-type': 'text/html' })
                filepath = path.join(__dirname,'public','home.html')
            } else if (req.url === '/about') {
                res.writeHead(200, { 'content-type': 'text/html' })
                res.end(`<h1>About page</h2>`)
            } else {
                throw new Error("Endpoint not found")
            }
            const data = await fs.readFile(filepath)
            res.writeHead(200, {'content-type':'text/html'});
            res.write(data)
            res.end()
        } else {
            throw new Error("Method not allowed")
        }
    } catch (error) {
        console.error(error);
        res.writeHead(500, { "content-type": "text/plain" })
        res.end(`Server ${error}`)
    }
})


server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
})