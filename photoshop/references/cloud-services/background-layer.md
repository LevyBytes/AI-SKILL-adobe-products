# Background layer

**Type rename**: `backgroundLayer` → `background_layer`

In the new representation, background layers include extra sub-fields that the old response did not provide. Background entries differ from text, group, and adjustment layers because `typeAttributes` is absent.

| Field | Type | Notes |
| --- | --- | --- |
| `backgroundLayer` | boolean | Top-level flag `true` — explicitly marks this as the background layer |
| `background.canConvertToLayer` | boolean | `true` — indicates the background can be promoted to a regular layer |

Example V2 background layer:

```json
{
  "type": "background_layer",
  "id": 1,
  "name": "Background",
  "backgroundLayer": true,
  "background": {
    "canConvertToLayer": true
  }
}
```
