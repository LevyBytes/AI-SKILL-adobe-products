# manifest

```json
{
  "requiredPermissions": {
    "network": {
      "domains": ["https://source.unsplash.com"]
    }
  }
}
```

As noted above, `fetch`, `XHR (XML HTTP Request)`, and `WebSocket` are exposed on the UXP global scope. If their differences are unclear, first compare the available options here: [fetch](https://javascript.info/fetch) | [WebSocket](https://javascript.info/websocket) | [XHR](https://javascript.info/xmlhttprequest)

### Examples

Here are representative samples.

### manifest

```json
{
  "requiredPermissions": {
    "network": {
      "domains": ["https://api.weather.gov"]
    }
  }
}
```

### manifest

```json
{
  "requiredPermissions": {
    "network": {
      "domains": ["wss://javascript.info"]
    }
  }
}
```
