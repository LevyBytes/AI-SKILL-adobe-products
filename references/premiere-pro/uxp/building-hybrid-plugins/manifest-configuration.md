# Manifest Configuration

Configure [`manifest.json`](../manifest.md) with these Hybrid plugin entries:

- **Manifest version**: use 6 or higher.
- [`addon`](../optional-properties/addon.md): set this field to the uxpaddon name.
- [`enableAddon`](../supporting-definitions/enable-addon.md): include this permission.

```json
{
  "manifestVersion": 6,
  "host": {
    "app": "premierepro",
    "minVersion": "25.6.0"
  },
  "addon": {
    "name": "sample-uxp-addon.uxpaddon"
  },
  "requiredPermissions": {
    "enableAddon": true
  }
}
```
