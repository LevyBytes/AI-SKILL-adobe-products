# Layer placement migration patterns

In v1, these parameters determined how a layer was inserted:

- `insertTop: true` - Place the new layer at the top of the layer stack.
- `insertBottom: true` - Place the new layer at the bottom of the layer stack.
- `insertAbove: {id: 123}` - Insert above a particular layer identified by ID.
- `insertBelow: {name: "Layer"}` - Insert below a particular layer identified by name.
- `insertInto: {name: "Group"}` - Put the layer inside a named group.

In v2, the same placement intent is expressed through the `operation.placement` property:

- `type: "top"` - Place at the top.
- `type: "bottom"` - Place at the bottom.
- `type: "above"` with `referenceLayer` - Place above the referenced layer.
- `type: "below"` with `referenceLayer` - Place below the referenced layer.
- `type: "into"` with `referenceLayer` - Use a group as the container.
