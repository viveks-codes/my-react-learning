// simple http node server

const http = require('http');
const port = 8080;

http.createServer((req, res) => {
    res.write('Hello World!'); // write a response to the client
    res.end(); 
}
).listen(port); // the server object listens on port 8080
// # run node httpserver.js to start the server