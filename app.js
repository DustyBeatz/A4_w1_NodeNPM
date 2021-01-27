const http = require('http'); /// just like a php require

// require is more or less like a js import

//const hostname = '127.0.0.1'; //this is localhost
const port = process.env.PORT || 3000; //the port number

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello WOOOOOOOOOORRRLLLLDD!');
});

server.listen(port, () => {
  console.log(`Server is now running at ${port}/`);
});

