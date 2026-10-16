# window.WebSocket — WebSocket(url, protocols)

Use WebSocket to open and control a server connection, then exchange data across that connection.
To use `WebSocket`, add the `network.domains` permission to `manifest.json` as shown below.
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
For UXP v7.4.0 and newer, top-level-domain WildCards are unsupported in `permissions.network.domains`.
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

- `Error` If invalid url or protocols is passed

| Param | Type | Description |
| --- | --- | --- |
| url | `string` | URL to which to connect; this should be the URL to which the WebSocket server will respond. |
| protocols | `string` \| `Array<string>` | Either a single protocol string or an array of protocol strings. |

**Example**

```js
var ws = new WebSocket("wss://demos.kaazing.com/echo", "wss");
```
