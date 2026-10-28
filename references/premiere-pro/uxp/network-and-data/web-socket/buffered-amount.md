# window.WebSocket - bufferedAmount : `number`

**Read only**
Counts the bytes queued by send() calls that have not yet reached the network.
After every queued item has been sent, this value returns to zero.
Closing the connection does not by itself return this value to zero;
continued send() calls will keep increasing it.
