# window.WebSocket - send(data)

Queues data for delivery to the peer over the WebSocket connection,
and raises bufferedAmount by the byte count required for that payload.
If delivery cannot proceed, for example because buffering is needed and no buffer space remains, the socket self-closes.

| Param | Type | Description |
| --- | --- | --- |
| data | `string` \| `ArrayBuffer` \| `ArrayBufferView` | Data to send to the server. |

**Example**

```js
ws.send(new Float32Array([5, 2, 1, 3, 6, -1]));
```

**Example**

```js
ws.send(new Int32Array([5, -1]).buffer);
```
