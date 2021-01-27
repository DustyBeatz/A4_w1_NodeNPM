const express = require('express'); /// just like a php require
const path = require('path');
const server = express();

//set our view directory
server.set('views', path.join(__dirname, 'views'));
// set the static assets director so express knows where to look
//for css files, JSfiles, images etc.. -anything static
server.use(express.static(path.join(__dirname, 'public')));

server.get('/', (req, res) => {
  console.log('git the home route');
  res.sendFile('index.html');
});

server.get('/contact', (req, res) => {
  console.log('hit the contact');
    res.render('contact');
});


const port = process.env.PORT || 3000; //the port number

server.listen(port, () => {
  console.log(`Server is now running at ${port}/`);
});

