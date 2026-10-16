# Socket.close()

socketObj.close();

### Description

Closes the open connection. Deleting the object also closes it, but only after JavaScript garbage collection reaches the object.

Without an explicit close call, the connection can remain open longer than intended.

### Returns

Boolean. true if the connection was closed, false on I/O errors.
