# Reading multiple active-layer properties

Sometimes you need multiple property values from one target, or the same property from multiple similar targets. Examples include:
- Retrieve a specific document's name, id, and color mode.
- Retrieve the id's for every open document. Although multiple "get" statements can retrieve this information, the `multiGet` command is more efficient. A multiGet command uses this form:
- `_obj`: must be "multiGet".
- `_target`: a target reference that defines a base object.
- extendedReference: a list that describes which values to return from the base object. extendedReference has either one element or two. The first element is a property-list. The optional second element specifies an element range.
- options: describes how the command responds when requested values are unavailable. options can include:
- failOnMissingProperty: A boolean that controls what happens when one target element does not expose a requested property. The default is true, so the command fails if a requested property is unavailable.
- failOnMissingElement: A boolean that controls what happens when one requested target element does not exist. The default is true, so the command fails if any requested element does not exist. This example reads several values from the active layer: 

Run in Photoshop with the required active document and layers.

```javascript
const { action } = require("photoshop");
const layerProperties = {
  _obj: "multiGet",
  _target: {_ref: [
    {_ref: "layer", _enum: "ordinal"},
    {_ref: "document", _enum: "ordinal"}
  ]},
  extendedReference: [["name", "layerID", "opacity"]],
  options: {failOnMissingProperty: false, failOnMissingElement: false}
};
const result = await action.batchPlay([layerProperties], {});
```

 This command will generate a result such as the following: 

Example returned data, not an executable statement.

```json
[
  {
    "name": "Layer 4",
    "layerID": 5,
    "opacity": 255
  }
]
```

 Here, the base object is a layer. extendedReference names the properties to return from the target layer.

Related references:

- [Reading properties from a layer range](multi-get-layer-range.md)
- [Reading every layer name](multi-get-all-layer-names.md)
