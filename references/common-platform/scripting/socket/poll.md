# Socket.poll()

socketObj.poll();

### Description

Checks a listening object for a new incoming connection. If a request is found, the method returns a new Socket object that represents the new connection. Communicate with the remote computer through that connection object.

When communication is finished, close the connection and delete the JavaScript object. When nothing is waiting, no connection object is returned.

### Parameters

### Returns

Socket object or null.
