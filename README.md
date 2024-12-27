# Incomplete HTTP Response in Node.js

This repository demonstrates a common error in Node.js HTTP servers: incomplete responses due to missing `Content-Length` header and `res.end()` call.

## Bug
The `bug.js` file contains a simple HTTP server that sends a 'Hello, world!' response.  However, it omits the `Content-Length` header and the crucial `res.end()` call, leading to incomplete or delayed responses in clients.

## Solution
The `bugSolution.js` file corrects this by adding the `Content-Length` header (to inform the client of the response size) and calling `res.end()` to explicitly signal the end of the response.