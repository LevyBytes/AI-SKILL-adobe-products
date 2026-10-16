# Socket.open()

socketObj.open(host[, encoding="ASCII"]);

### Description

Prepares the connection for later read/write operations.

open() and listen() are alternatives for a socket setup. Choose one of them for a given object.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| host | String | The name or IP address of the remote computer, followed by a colon and the port number to connect to. The port number is required. Valid computer names are, for example, "www.adobe.com:80" or "192.150.14.12:80". |
| encoding | String | Optional. The encoding to be used for the connection. Typical values are "ASCII", "binary", or "UTF-8". Default is "ASCII" |

### Returns

Boolean. true on success.
