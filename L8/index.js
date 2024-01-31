// Building http server in node js
const http = require("http"); // build in package
const fs = require("fs");

const url = require("url");

const myServer = http.createServer((req, res) => {
  console.log("New Req received ");
  //   console.log(req.headers);
  //console.log(res);

  const log = `${Date.now()} : ${req.url}\n`;

  const myUrl = url.parse(req.url, true);
  console.log(myUrl);

  fs.appendFile("log.txt", log, (err, data) => {
    switch (myUrl.pathname) {
      case "/":
        res.end("Homepage");
        break;
      case "/about":
        const username = myUrl.query.name;
        res.end(`This is about page , hi ${username}`);
        break;
      case "/search":
        const search = myUrl.query.search_query;
        res.end("Here are your search results " + search);
        break;
      default:
        res.end("404 notfound");
    }
  });
});

myServer.listen(3000, () => {
  console.log("Server started...");
});
