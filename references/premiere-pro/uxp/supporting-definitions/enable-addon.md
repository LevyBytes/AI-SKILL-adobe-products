# `enableAddon`

| Name | Type | Required | Default |
| --- | --- | --- | --- |
| `enableAddon` | `boolean` | optional | `false` |

`enableAddon` allows native C++ addons, packaged as `.uxpaddon` files, to load in the plugin. [Hybrid Plugins](../hybrid-plugins/reference-index.md) require this permission. Its default is `false`.

```json
{
"requiredPermissions": {
  "enableAddon": true
}
}
```
