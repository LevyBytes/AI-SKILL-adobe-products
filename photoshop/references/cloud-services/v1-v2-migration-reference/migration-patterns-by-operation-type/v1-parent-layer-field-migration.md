# V1 `parentLayer` Field migration

**V1 `parentLayer` Field:**
In V1, layer operations accepted `parentLayer: {id: N}` or `parentLayer: {name: "..."}` to identify the group/layer ownership target. That field is valid in V1 and should not be treated as a no-op. For V2 payloads, replace `parentLayer` with placement data.

| V1 operation | V2 equivalent |
| --- | --- |
| `add` + `parentLayer: {id: N}` | `operation.type: "add"` + `placement: {type: "into", referenceLayer: {id: N}}` |
| `move` + `parentLayer: {id: N}` | `operation.type: "move"` + `placement: {type: "into", referenceLayer: {id: N}}` |
| `edit` + `parentLayer: {id: N}` | `operation.type: "edit"` - drop `parentLayer` entirely because V2 targets by name/id independent of parent |

**Layer processing order (breaking change):** V1 evaluated the array from the bottom upward, so the last item ran first. V2 runs from the top downward, with the first item handled first. Whenever `above`, `below`, or `into` placement names a `referenceLayer`, that referenced layer must already exist or appear earlier in the array than the referring layer.
