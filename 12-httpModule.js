// HTTP Module
const http = require("http");

const server = http.createServer((req, res) => {
  //   console.log(req);
  if (req.url === "/") {
    res.end("Welcome to our homepage");
  } else if (req.url === "/about") {
    res.end("About page");
  } else {
    res.end(`
      <h1>OPPs!!</h1>
      <p>We can't find the page</p>
      <a href="/">back home</a>
      `);
  }
});

server.listen(5000);
