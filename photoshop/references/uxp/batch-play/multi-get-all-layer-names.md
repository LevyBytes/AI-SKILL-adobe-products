# Reading every layer name

An element range specifier can set count to -1 to mean every element. To retrieve all layer names in a document, use this form: 

Run in Photoshop with the required active document and layers.

```javascript
const { action } = require("photoshop");
const layerProperties =
  { _obj: "multiGet",
     _target: {_ref: [{_ref: "document", _enum: "ordinal"}]},
     extendedReference: [["name"], {_obj: "layer", index: 1, count: -1}],
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
        "name": "Layer 1"
      },
      {
        "name": "Layer 2"
      },
      {
        "name": "Layer 3"
      },
      {
        "name": "Layer 4"
      }
    ]
  }
]
```

Related: [Reading multiple active-layer properties](multi-get.md).
