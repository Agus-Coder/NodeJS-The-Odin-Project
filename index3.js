import http from "http";
import { readFile } from "fs";

const page404 = readFile("./pages/404.html","utf-8", (err, dat) => {
  if (err) throw err;
  return dat;
});

const router = (req, res) => {
  console.log("Nueva peticion router!");
  console.log(`Se ha pedido la ruta:"${req.url}"`);

  // let filename = "";
  // if (req.url === "/") {
  //   filename = "index.html";
  // } else {
  //   filename = "." + req.url;
  // }

  let filename = req.url === "/" ? "index.html" : "." + req.url;

  res.statusCode = 200;
  res.setHeader("Content-Type", "text/html");

  readFile(filename, "utf-8", (err, data) => {
    if (err) {
      res.writeHead(404, { "Content-Type": "text/html" });
      res.write(page404);
      return res.end();
    } else {
      console.log(`esta es la data:`);
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write(data);
      return res.end();
    }
  });
};

const server = http.createServer(router);

/*
When an HTTP request hits the server, node calls the request handler function with a few handy objects for dealing with the transaction, request and response. We'll get to those shortly.
In order to actually serve requests, the listen method needs to be called on the server object. In most cases, all you'll need to pass to listen is the port number you want the server to listen on. There are some other options too, so consult the API reference.
*/

server.listen(3000);
console.log("escuchando puerto 3000");
