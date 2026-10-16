# Issue: group children structure

**Problem:** V1 used a nested `children` array

**Solution:** V2 adds layers into an existing group through sequential layer entries, using `into` placement with `referenceLayer`; see the example below.

Partial `edits.layers` array: create the group first, then add its child. Supply the child image source in the marked object.

```jsonc
[
// Create the group first
{
  "type": "group_layer",
  "name": "Group",
  "operation": {"type": "add", "placement": {"type": "top"}}
},
// Then add layers into it
{
  "type": "layer",
  "name": "Child",
  "image": {
    "source": {/* additional content omitted */}
  },
  "operation": {
    "type": "add",
    "placement": {
      "type": "into",
      "referenceLayer": {"name": "Group"}
    }
  }
}
]
```
