# Group layer create and edit

V2 adds `type: "group_layer"` where V1 used `"layerSection"`, plus one `operation` model for group reordering and insertion into existing groups.

**New document creation with a group layer is still not supported (upcoming feature).**
To add a layer inside a group layer while **editing an existing document**, use `placement.type: "into"` with `referenceLayer` (e.g. `"referenceLayer": { "name": "Group 1" }`); this case **is supported**.

```json
{
  "type": "smart_object_layer",
  "name": "Logo",
  "operation": {
    "type": "add",
    "placement": {
      "type": "into",
      "referenceLayer": { "name": "Group 1" }
    }
  },
  "smartObject": {
    "smartObjectFile": { "source": { "url": "<LOGO_URL>" } }
  }
}
```

Placement options for ordering within groups: `into`, `above`, `below`, `top`, `bottom`.

See [Advanced Layer Operations Migration](../../layer-operations/advanced/reference-index.md) for the full group layer reference.
