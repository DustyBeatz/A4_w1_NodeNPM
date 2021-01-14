const http = require('http'); //just like a php require

//require is more or less the same as a JS import

const hostname = '127.0.0.1'; //hard coded localhost 
const port = process.env.PORT || 3000; //to view this app in browser type Localhost: 3000

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Im sorry too');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});