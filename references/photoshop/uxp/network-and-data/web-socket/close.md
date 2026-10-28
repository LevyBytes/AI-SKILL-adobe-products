# window.WebSocket - close([code], [reason])

Ends an active WebSocket session.

**Throws**:

- `Error` If invalid code or reason is passed

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [code] | `number` | `1000` | Integer value as per [[https://developer.mozilla.org/en-US/docs/Web/API/WebSocket#close(](https://developer.mozilla.org/en-US/docs/Web/API/WebSocket#close())](<https://developer.mozilla.org/en-US/docs/Web/API/WebSocket#close()>). |
| [reason] | `string` |  | Human-readable string explaining why the connection is closing. The default value is "". |
