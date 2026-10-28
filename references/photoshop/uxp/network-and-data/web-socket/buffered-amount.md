# window.WebSocket - bufferedAmount : `number`

**Read only**
Bytes queued by send() calls that have not yet reached the network.
After all queued data is transmitted, the value returns to zero.
Closing the connection does not zero this value;
continued send() calls keep increasing it.
