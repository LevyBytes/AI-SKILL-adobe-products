# Xml Http Request

> Adobe Premiere Pro reference. Original prose; identifiers preserved verbatim.

`XMLHttpRequest` objects communicate with servers.
They can fetch data from a URL without requiring a full page refresh.
With that behavior, a Web page can update only part of itself while leaving the user's current activity uninterrupted.

To use `XMLHttpRequest`, add the `network.domains` permission to `manifest.json` with this pattern.

** Example **

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
Starting with UXP v7.4.0, top-level-domain WildCards are unsupported in `permissions.network.domains`. Example:

```json
{
  "domains": [
    "https://www.adobe.*",
    "https://www.*"
  ]
}
```

**Returns**: `XMLHttpRequest` - Creates and returns an `XMLHttpRequest` object.
