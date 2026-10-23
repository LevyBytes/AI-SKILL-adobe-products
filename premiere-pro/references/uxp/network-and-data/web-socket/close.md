# window.WebSocket - close([code], [reason])

Closes the websocket connection.

**Throws**:

- `Error` Thrown when an invalid code or reason value is supplied.

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [code] | `number` | `1000` | Close status code defined by [[https://developer.mozilla.org/en-US/docs/Web/API/WebSocket#close(](https://developer.mozilla.org/en-US/docs/Web/API/WebSocket#close())](<https://developer.mozilla.org/en-US/docs/Web/API/WebSocket#close()>). |
| [reason] | `string` |  | Human-readable text giving the close reason. The default value is "". |
