# Socket Object

TCP connections form the Internet's basic transport layer. When a Web browser contacts a server for a page, it opens a TCP connection for the request and the server's response. With the JavaScript Socket object, scripts can connect to Internet servers and exchange data with them.

The Socket object offers basic operations for reaching a remote computer over TCP/IP or the Internet. Calls such as open() and close() establish and terminate the connection, while read() and write() move data. The listen() method creates a simple Internet server, and that server calls poll() to test for incoming connections.

Many simple protocols rely on ASCII data exchange, while others, including the FTP protocol, are more complex and use binary data. HTTP is among the simplest protocols.

This TCP/IP client sample connects to a WWW server listening on port 80. It sends a minimal HTTP GET request for the WWW server home page. The reply contains the page content plus the HTTP header returned by the server:

```javascript
var reply = "";
var conn = new Socket;

// access Adobe's home page
if (conn.open ("www.adobe.com:80")) {

    // send a HTTP GET request
    conn.write ("GET /index.html HTTP/1.0\n\n");

    // and read the server's reply
    reply = conn.read(999999);

    conn.close();
}
```

After this code runs, reply holds the Adobe home page content plus an HTTP response header.

Creating an Internet server requires a little more setup. A typical server waits for incoming connections and then processes them. Because an application usually should not sit in an endless loop waiting for connection requests, a Socket object can be queried for an incoming connection with poll().

That call only checks for incoming connections and returns immediately. If a request is waiting, poll() returns another Socket object containing the newly opened connection. Use that connection object to communicate with the client; after the exchange is finished, close the connection and discard the object.

Before a Socket object can check for incoming connections, it must be instructed to listen on a specific port, such as port 80 for HTTP requests. Call listen() rather than open() for this setup.

The next example is a minimal Web server. It listens on port 80 until an incoming request is found. The HTTP header is ignored, and a dummy HTML page is sent to the requester:

```javascript
conn = new Socket;
// listen on port 80
if (conn.listen (80)) {
    // wait forever for a connection
    var incoming;
    do incoming = conn.poll();
    while (incoming == null);

    // discard the request
    conn.read();

    // Reply with a HTTP header
    incoming.writeln ("HTTP/1.0 200 OK");
    incoming.writeln ("Content-Type: text/html");
    incoming.writeln();

    // Transmit a dummy homepage
    incoming.writeln ("<html><body><h1>Homepage</h1></body></html>");

    // done!
    incoming.close();
    delete incoming;
}
```

The remote endpoint often ends the connection after it sends data. For that reason, the connected property remains true only while the connection still exists. When connected returns false, the connection closes automatically.

If errors occur, the Socket object's error property contains a short message that identifies the error type.

With the Socket object, software can be written to communicate over the Internet. As one example, two Adobe applications can exchange documents and data by running JavaScript programs.
