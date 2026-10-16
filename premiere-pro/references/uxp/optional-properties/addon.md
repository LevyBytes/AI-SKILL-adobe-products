# `addon`

| Name | Type | Default |
| --- | --- | --- |
| `addon` | `object` | `{}` |

This object describes addons for [Hybrid Plugins](../hybrid-plugins/reference-index.md). In a UXP Hybrid plugin, dynamically-linked C++ native libraries can be loaded at runtime as `.uxpaddon` files. Build and configuration details are covered in the [Hybrid Plugins guide](../hybrid-plugins.md).

```json
{
  "addon": {
    "name": "sample-uxp-addon.uxpaddon"
  }
}
```
