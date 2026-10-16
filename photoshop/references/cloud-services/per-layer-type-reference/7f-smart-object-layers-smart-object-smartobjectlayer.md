# 7f. Smart object layers (`smartObject` → `smart_object_layer`)

**Type rename:** `"smartObject"` → `"smart_object_layer"`

| V1 | V2 | Notes |
| --- | --- | --- |
| `input: {href, storage}` | `smartObject.smartObjectFile.source: {url}` | Breaking: deeply nested |
| `smartObject.linked: true` | `smartObject.isLinked: true` | Renamed; resize with linked SOs now supported |
| _(not in V1)_ | `transformMode: "none"/"custom"/"fit"/"fill"` | New in V2 |
| _(not in V1)_ | `transform.angle`, `transform.skew` | New in V2 |
| _(not in V1)_ | `transform.anchor` | New in V2 |
| _(not in V1)_ | SVG file type | New in V2 |
| `fillToCanvas: true` | **Not supported** | Missing feature |

**V2 supports linked smart objects with restrictions.** Usage details are in [Smart Object Operations Migration](../layer-operations/smart-objects/reference-index.md).
