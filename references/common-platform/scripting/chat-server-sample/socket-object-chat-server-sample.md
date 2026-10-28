# Socket Object - Chat server sample

This sample code builds a minimal chat server. A chat client can connect to the server listening on port number 1234. The server sends a welcome message and waits for one input line from the client. The client enters text and sends it to the server, the server displays that text, and the person at the server computer can type a line that the client computer displays in return. Typing "bye" on either side ends the session:

```javascript
// A simple Chat server on port 1234
function chatServer() {
    var tcp = new Socket;

    // listen on port 1234
    writeln ("Chat server listening on port 1234");
    if (tcp.listen (1234)) {
        for (;;) {
            // poll for a new connection
            var connection = tcp.poll();
            if (connection != null) {
                writeln ("Connection from " + connection.host);

                // we have a new connection, so welcome and chat
                // until client terminates the session
                connection.writeln ("Welcome to a little chat!");
                chat (connection);
                connection.writeln ( "*** Goodbye ***");
                connection.close();
                delete connection;
                writeln ("Connection closed");
            }
        }
    }
}

function chatClient() {
    var connection = new Socket;

    // connect to sample server
    if (connection.open ("remote-pc.corp.adobe.com:1234")) {
        // then chat with server
        chat (connection);
        connection.close();
        delete connection;
    }
}

function chat (c) {
    // select a long timeout
    c.timeout=1000;

    while (true) {
        // get one line and echo it
        writeln (c.read());

        // stop if the connection is broken
        if (!c.connected)
            break;

        // read a line of text
        write ("chat: ");
        var text = readln();

        if (text == "bye")
            // stop conversation if the user entered "bye"
            break;
        else
            // otherwise transmit to server
            c.writeln (text);
    }
}
```
