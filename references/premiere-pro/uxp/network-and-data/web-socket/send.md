# window.WebSocket - send(data)

Queues the supplied data for transmission to the remote end of the WebSocket connection,
raising bufferedAmount by the byte count needed to hold that data.
When the data cannot be sent, such as when buffering is required but the buffer is full, the socket closes automatically.

| Param | Type | Description |
| --- | --- | --- |
| data | `string` \| `ArrayBuffer` \| `ArrayBufferView` | Payload for the remote endpoint. |

**Example**

```js
ws.send(new Float32Array([5, 2, 1, 3, 6, -1]));
```

**Example**

```js
ws.send(new Int32Array([5, -1]).buffer);
```
