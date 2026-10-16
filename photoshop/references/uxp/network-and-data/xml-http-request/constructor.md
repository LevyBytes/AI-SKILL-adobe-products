# window.XMLHttpRequest — XMLHttpRequest()

XMLHttpRequest objects exchange data with servers.
They can fetch data from a URL without requiring a full page refresh.
That lets a Web page refresh only part of itself while the user keeps working.

To use `XMLHttpRequest`, add the `network.domains` permission to `manifest.json` as shown below.

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
For UXP v7.4.0 and newer, top-level-domain WildCards are unsupported in `permissions.network.domains`. Example:

```json
{
  "domains": [
    "https://www.adobe.*",
    "https://www.*"
  ]
}
```

**Returns**: `XMLHttpRequest` - New XMLHttpRequest object
