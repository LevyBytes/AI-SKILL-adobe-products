# Network Security

Internet access is blocked for UXP plugins unless you opt in, which prevents unexpected or hidden network behavior. When a plugin must fetch data, retrieve images, or work with WebSockets, declare the needed [network permissions](../supporting-definitions/permissions-definition.md).

Inside the plugin's `manifest.json`, configure [`requiredPermissions.network`](../supporting-definitions/network.md) with the domain list the plugin may reach.

```json
{
  "requiredPermissions": {
    "network": {
      "domains": ["https://api.example.com", "https://*.adobe.io"]
    }
  }
}
```

Domain patterns can include wildcards, for example `"https://api.*.example.com"` for dev, staging, and production environments. Requests to domains outside the list fail with a permission error.

HTTP and HTTPS are both available to the APIs, but macOS blocks `http://` for security. Prefer `https://`.
