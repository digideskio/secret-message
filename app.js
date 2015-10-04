var express = require('express'),
  path = require('path'),
  server = express();

// ROUTES

/*
  since server.use needs a CALLBACK function,
  express.static() must create one for us....
  that means, that when we execute express.static(),
  it constructs and returns a callback function.  ta-da
*/
// server.use(express.static('public_files'));
server.use(express.static(path.join(__dirname, 'public')));

server.use(function(req, res, next) { // MEGA LOGGER
  console.log("=========== BEGIN LOGGER ===========");
  console.log("req.body:   ", req.body);
  console.log("req.query:  ", req.query);
  console.log("req.params: ", req.params);
  console.log("===========  END LOGGER  ===========");
  next();
});

/* server.use happens for every incoming request that matches the string */
server.use('/', function(req, res, next) {
  // req.newProperty = "Hey, I'm not going anywhere..."
  console.log("SOMEONE HAS HIT /");
  next();
});

// server.use('/', function (req, res, next) {
//   // console.log(req.newProperty);
//   if (req.query.user) {
//     res.greeting = "<h1>Howdy, " + req.query.user.name + "....</h1>";
//   } else {
//     res.greeting = "<h1>Howdy, stranger....</h1>";
//   }
//
//   console.log("Query: ", req.query);
//   next();
// });

server.post('/', function() {
  console.log("SOMEONE HAS TRIED TO POST TO /");
});

server.get('/', function(req, res) {
  console.log("SOMEONE HAS ASKED / TO GET");
  res.sendFile(__dirname + '/views/index.html');
});

server.get('*', function(req, res) {
  res.redirect('/#' + req.originalUrl);
});

server.listen(3000, function() {
  console.log("I'm waiting...");
});
