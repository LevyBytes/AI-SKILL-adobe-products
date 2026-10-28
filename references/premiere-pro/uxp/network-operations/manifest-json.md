# manifest.json

```json
{
  "requiredPermissions": {
    "network": {
      "domains": [
        "https://api.weather.gov"
      ]
    }
  }
}
```

...

...

After receiving a `response`, call `json()`, `text()`, or `blob()` to read the matching data type. Use `await` to obtain the result because each method gives back a [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise).

### manifest.json

```json
{
  "requiredPermissions": {
    "network": {
      "domains": [
        "https://picsum.photos/"
      ]
    }
  }
}
```

...

...

In UXP, the `<img>` tag works without issue when the remote domain is on the allow-list.

### manifest.json

```json
{
  "requiredPermissions": {
    "network": {
      "domains": [
        "https://api.weather.gov"
      ]
    }
  }
}
```

...

...

### manifest.json

```json
{
  "requiredPermissions": {
    "network": {
      "domains": [
        "wss://javascript.info"
      ]
    }
  }
}
```

...

...

UXP supports WebSocket clients only

Plugins may open connections to WebSocket servers, but they cannot host or accept inbound connections.
