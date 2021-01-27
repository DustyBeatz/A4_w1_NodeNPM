const http = require('http'); /// just like a php require
const stream = require('fs');

// require is more or less like a js import

//const hostname = '127.0.0.1'; //this is localhost
const port = process.env.PORT || 3000; //the port number

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');

  let url = req.url; //localhost:3000/contact

  switch (url) {
    case "/contact":
      stream.readFile('contact.html', null, ((err, data) => {
          if (err) {
            res.writeHead(404);
            res.write('404 not found');
            console.log('error 404 contact');
          } else {
            res.write(data);
          }
      }))
      break;

      case "/portfolio":
      stream.readFile('portfolio.html', null, ((err, data) => {
          if (err) {
            res.writeHead(404);
            res.write('404 not found');
          } else {
            res.write(data);
          }
      }))
      break;

      default: 
      res.end('Hello WOOOOOOOOOORRRLLLLDD!');

  }

});

server.listen(port, () => {
  console.log(`Server is now running at ${port}/`);
});

