# Socket.listen()

socketObj.listen(port[, encoding="ASCII"]);

### Description

Tells the object to begin listening for an incoming connection.

open() and listen() are alternatives for a socket setup. Choose one of them for a given object.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| port | Number. | The TCP/IP port number to listen on. Valid port numbers are [1..65535]. Typical values are 80 for a Web server, 23 for a Telnet server and so on. |
| encoding | String | Optional. The encoding to be used for the connection. Typical values are "ASCII", "binary", or "UTF-8". Default is "ASCII" |

### Returns

Boolean. true on success.
