# Reading properties from a layer range

The next example reads several values from the first two layers: 

Run in Photoshop with the required active document and layers.

```javascript
const { action } = require("photoshop");
const layerProperties = {
  _obj: "multiGet",
  _target: {_ref: [{_ref: "document", _enum: "ordinal"}]},
  extendedReference: [
    ["name", "layerID", "opacity"],
    {_obj: "layer", index: 1, count: 2}
  ],
  options: {failOnMissingProperty: false, failOnMissingElement: false}
};
const result = await action.batchPlay([layerProperties], {});
```

 This command will generate a result such as the following: 

Example returned data, not an executable statement.

```json
[
  {
    "list": [
      {
        "name": "Layer 1",
        "layerID": 2,
        "opacity": 255
      },
      {
        "name": "Layer 2",
        "layerID": 3,
        "opacity": 255
      }
    ]
  }
]
```

 In this example, values are being obtained from several layers, so the base object specified by `_target` is a document. extendedReference uses its two-element form to supply both a property list and a layer range.

Related: [Reading multiple active-layer properties](multi-get.md).
