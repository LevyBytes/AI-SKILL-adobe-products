# Move placement options

**V1 → V2 Mapping:**

| V1 | V2 |
| --- | --- |
| `move: {insertTop: true}` | `operation: {type: "move", placement: {type: "top"}}` |
| `move: {insertBottom: true}` | `operation: {type: "move", placement: {type: "bottom"}}` |
| `move: {insertAbove: {name: "X"}}` | `operation: {type: "move", placement: {type: "above", referenceLayer: {name: "X"}}}` |
| `move: {insertBelow: {id: 123}}` | `operation: {type: "move", placement: {type: "below", referenceLayer: {id: 123}}}` |
| `move: {insertInto: {name: "Group"}}` | `operation: {type: "move", placement: {type: "into", referenceLayer: {name: "Group"}}}` |
