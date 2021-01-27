const express = require('express'); /// just like a php require

const server = express();


server.get("/", (req, res) => {
  console.log('git the home route');
    res.send('your first express ass');
})

server.get("/contact", (req, res) => {
  console.log('hit the contact');
    res.send('hit that contact page son');
});

const port = process.env.PORT || 3000; //the port number

server.listen(port, () => {
  console.log(`Server is now running at ${port}/`);
});

