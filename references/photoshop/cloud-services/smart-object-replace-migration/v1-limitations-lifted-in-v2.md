# V1 Limitations Lifted in V2

| V1 Limitation | V2 Behavior |
| --- | --- |
| Linked smart objects not supported | `smartObject.isLinked: true` supported |
| Objects over 2000×2000 px are rasterized | No equivalent rasterization limit |
| Smart object name must be alphanumeric | Any valid layer name accepted |
| Replaced smart object auto-fits original bounding box | Use `transformMode` to control fit behavior |

For transform behavior, see [Smart Object Layer Operations](../layer-operations/smart-objects/reference-index.md).
