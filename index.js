import http from "http";

// The http module contains the function to create the server, which we will see later on

const host = "localhost";
const port = 8000;

/* As mentioned before, web servers accept requests from browsers and other clients. We may interact with a web server by entering a domain name, which is translated to an IP address by a DNS server. An IP address is a unique sequence of numbers that identify a machine on a network, like the internet */

/* The value localhost is a special private address that computers use to refer to themselves. It’s typically the equivalent of the internal IP address 127.0.0.1 and it’s only available to the local computer, not to any local networks we’ve joined or to the internet. */

/* The port is a number that servers use as an endpoint or “door” to our IP address. In our example, we will use port 8000 for our web server. Ports 8080 and 8000 are typically used as default ports in development, and in most cases developers will use them rather than other ports for HTTP servers. */

/* Let’s add a special function, which in Node.js we call a request listener. This function is meant to handle an incoming HTTP request and return an HTTP response. This function must have two arguments, a request object and a response object. The request object captures all the data of the HTTP request that’s coming in. The response object is used to return HTTP responses for the server. */

const requestListener = function (req, res) {
  res.writeHead(200);
  res.end("My first server!");
};

/* The function would usually be named based on what it does. For example, if we created a request listener function to return a list of books, we would likely name it listBooks() */

/* All request listener functions in Node.js accept two arguments: req and res (we can name them differently if we want). The HTTP request the user sends is captured in a Request object, which corresponds to the first argument, req. The HTTP response that we return to the user is formed by interacting with the Response object in second argument, res. */

/* The first line res.writeHead(200); sets the HTTP status code of the response. HTTP status codes indicate how well an HTTP request was handled by the server. In this case, the status code 200 corresponds to "OK" */

/* The next line of the function, res.end("My first server!");, writes the HTTP response back to the client who requested it. This function returns any data the server has to return. In this case, it’s returning text data. */

/* Listeners */

const server = http.createServer(requestListener);

server.listen(port, host, () => {
  console.log(`Server is running on http://${host}:${port}`);
});

/* In the first line, we create a new server object via the http module’s createServer() function. This server accepts HTTP requests and passes them on to our requestListener() function. */

/* After we create our server, we must bind it to a network address. We do that with the server.listen() method. It accepts three arguments: 
port,
host,
a callback function that fires when the server begins to listen. */

/* All of these arguments are optional, but it is a good idea to explicitly state which port and host we want a web server to use. When deploying web servers to different environments, knowing the port and host it is running on is required to set up load balancing or a DNS alias. */

/* IMPORTANT!

The callback function logs a message to our console so we can know when the server began listening to connections.

*/

