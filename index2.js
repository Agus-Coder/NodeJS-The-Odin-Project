import http from "http";
import path from "path";

const host = "localhost";
const port = 8000;

/* Serving an HTML file */

/* To serve HTML files, we load the HTML file with the fs module and use its data when writing our HTTP response. */

import { readFile } from "fs";

/* This module contains a readFile() function that we’ll use to load the HTML file in place. We import the promise variant in keeping with modern JavaScript best practices. We use promises as its syntactically more succinct than callbacks, which we would have to use if we assigned fs to just require('fs') */

const __dirname = "C:/Users/Agus/Documents/GitHub/NodeJS-The-Odin-Project";

const requestListener = (req, res) => {
    readFile(__dirname + "/index.html")
    //1
    .then((contents) => {
        res.setHeader("Content-Type", "text/html");
        res.writeHead(200);
        res.end(contents);
    })
    //2
    .catch((err) => {
        res.writeHead(500);
        res.end(err);
        return;
    });
};
const server = http.createServer(requestListener);

server.listen(port, host, () => {
    console.log(`Server is running on http://${host}:${port}`);
});

// 1
/* If the fs.readFile() promise successfully resolves, it will return its data. We use the then() method to handle this case. The contents parameter contains the HTML file’s data. */
/* We first set the Content-Type header to text/html to tell the client that we are returning HTML data. We then write the status code to indicate the request was successful. We finally send the client the HTML page we loaded, with the data in the contents variable. */

//2
/* The fs.readFile() method can fail at times, so we should handle this case when we get an error. Add this to the requestListener() function: */

/*  */
/*  */
