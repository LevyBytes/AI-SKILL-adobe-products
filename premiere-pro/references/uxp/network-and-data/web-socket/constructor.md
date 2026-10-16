# window.WebSocket — WebSocket(url, protocols)

`WebSocket` is the interface used to open and control a WebSocket connection with a server,
and to exchange data across that connection.
To use `WebSocket`, add the `network.domains` permission to `manifest.json` with this pattern.
**Example:**

```json
{
  "permissions": {
    "network": {
      "domains": ["https://www.adobe.com", "https://*.adobeprerelease.com", "wss://*.myplugin.com"]
    }
  }
}
```

**Limitation:**
Starting with UXP v7.4.0, top-level-domain WildCards are unsupported in `permissions.network.domains`.
Example:

```json
{
  "domains": [
    "https://www.adobe.*",
    "https://www.*"
  ]
}
```

**Throws**:

- `Error` Thrown when an invalid url or protocols value is supplied.

| Param | Type | Description |
| --- | --- | --- |
| url | `string` | URL used for the connection; the WebSocket server should answer at this URL. |
| protocols | `string` \| `Array<string>` | One protocol identifier, or multiple protocol identifiers in an array. |

**Example**

```js
var ws = new WebSocket("wss://demos.kaazing.com/echo", "wss");
```
