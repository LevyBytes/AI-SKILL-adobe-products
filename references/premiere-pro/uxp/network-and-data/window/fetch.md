# window.fetch(input, [init])

Fetch retrieves a network resource.

**Returns**: `Promise<Response>` Promise resolving to a Response object.  
**Throws**:

- `TypeError` When init.method is "GET" or "HEAD" while init.body has a value.
- `TypeError` When a network error or network time-out happens after an http request is made.
- `TypeError` When posting FormData fails because files in FormData cannot be read.

To use `fetch`, add the `network.domains` permission to `manifest.json` as shown here.
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
For UXP v7.4.0 and later, top-level domain WildCards are not valid in `permissions.network.domains`.
**Example:**

```json
{
  "domains": [
    "https://www.adobe.*",
    "https://www.*"
  ]
}
```

**See**: [Headers](../headers/reference-index.md), [Request](../request/reference-index.md) and [Response](https://raw.githubusercontent.com/AdobeDocs/uxp-premiere-pro/main/src/pages/uxp-api/reference-js/global-members/data-transfers/response.md)

| Param | Type | Description |
| --- | --- | --- |
| input | `string` \| `Request` | URL string to connect to, or a Request object containing the URL plus the init option. |
| [init] | `Object` | `(Optional)` Custom settings for an HTTP request. |
| [init.method] | `string` | HTTP request method. Default value is "GET". |
| [init.headers] | `Headers` | HTTP request headers to include. |
| [init.body] | `string` \| `ArrayBuffer` \| `TypedArray` \| `Blob` \| `FormData` \| `URLSearchParams` | Body to include with the HTTP request. |
| [init.credentials] | `string` | Cookie sending flag. Default is "include". Supported values: "omit" : sends no cookies. "include" : sends cookies. |
