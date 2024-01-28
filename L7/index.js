// Building http server in node js
const http = require("http"); // build in package
const fs = require("fs");

const myServer = http.createServer((req, res) => {
  console.log("New Req received ");
  //   console.log(req.headers);
  //console.log(res);

  const log = `${Date.now()} : New Req Received\n`;
  fs.appendFile("log.txt", log, (err, data) => {
    switch (req.url) {
      case "/":
        res.end("Homepage");
        break;
      case "/about":
        res.end("This is about page");
        break;
      default:
        res.end("404 notfound");
    }
  });
});

myServer.listen(3000, () => {
  console.log("Server started...");
});
