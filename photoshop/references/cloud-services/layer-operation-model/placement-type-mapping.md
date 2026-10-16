# Placement type mapping

| V1 (`add.*`) | V2 (`operation.placement`) |
| --- | --- |
| `insertTop: true` | `{type: "top"}` |
| `insertBottom: true` | `{type: "bottom"}` |
| `insertAbove: {name: "LayerName"}` | `{type: "above", referenceLayer: {name: "LayerName"}}` |
| `insertAbove: {id: 123}` | `{type: "above", referenceLayer: {id: 123}}` |
| `insertBelow: {name: "LayerName"}` | `{type: "below", referenceLayer: {name: "LayerName"}}` |
| `insertBelow: {id: 123}` | `{type: "below", referenceLayer: {id: 123}}` |
| `insertInto: {name: "GroupName"}` | `{type: "into", referenceLayer: {name: "GroupName"}}` |

Some V1 contexts named a placement target with `relativeTo`. V2 names that target `referenceLayer`; treat it as a field rename, not as an alias. Update every relative placement reference accordingly.
