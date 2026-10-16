# window.fetch(input, [init])

Requests a network resource.

**Returns**: `Promise<Response>` - resolves with an object of type `Response`.  
**Throws**:

- `TypeError` If init.body is set and init.method is either "GET" or "HEAD".
- `TypeError` If either network error or network time-out occurs after a http request is made.
- `TypeError` If there is a failure in reading files in FormData during posting FormData.

To make `fetch` usable, add the `network.domains` permission to `manifest.json` with this shape.
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
Starting with UXP v7.4.0, WildCards in top-level domains are not accepted by `permissions.network.domains`.
**Example:**

```json
{
  "domains": [
    "https://www.adobe.*",
    "https://www.*"
  ]
}
```

**See**: [Headers](../headers/reference-index.md), [Request](../request/reference-index.md) and [Response](../response/reference-index.md)

| Param | Type | Description |
| --- | --- | --- |
| input | `string` \| `Request` | URL string to connect to, or a `Request` object that carries the URL and the init option. |
| [init] | `Object` | `(Optional)` Settings that customize an HTTP request. |
| [init.method] | `string` | Method used for the HTTP request; when omitted, it is "GET". |
| [init.headers] | `Headers` | Headers included with the HTTP request. |
| [init.body] | `string` \| `ArrayBuffer` \| `TypedArray` \| `Blob` \| `FormData` \| `URLSearchParams` | Content body supplied for the HTTP request. |
| [init.credentials] | `string` | Controls whether cookies are sent. The default value is "include". Accepted values: "omit" : cookies are NOT sent. "include" : cookies are sent. |
