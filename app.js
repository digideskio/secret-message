var http = require('http');

var server = http.createServer(function (req, res) {
  if (req.url === "/create") {
    res.writeHead(200, {
      'content-type': 'text/html'
    });
    res.write("<h1>Create a secret message.</h1>");
    res.end();
  } else if (req.url === "/reveal") {
    res.writeHead(200, {
      'content-type': 'text/html'
    });
    res.write("<h1>Reveal a secret message.</h1>");
    res.end();
  } else {
    res.writeHead(404, {
      'content-type': 'text/html'
    });
    res.write("<h1>404</h1>");
    res.end();
  };
});

server.listen(3000, function() {
  console.log("Listening on port 3000...");
});
