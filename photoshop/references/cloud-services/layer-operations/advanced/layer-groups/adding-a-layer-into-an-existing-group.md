# Adding a layer into an existing group

For an **editing an existing document** flow, such as create-composite against an existing PSD, a new layer can be inserted into a group that is already present. Use `operation.type: "add"` together with `placement.type: "into"` and a `referenceLayer` that targets the group:

```json
{
  "type": "layer",
  "name": "Child Layer",
  "image": { "source": { "url": "<IMAGE_URL>" } },
  "operation": {
    "type": "add",
    "placement": {
      "type": "into",
      "referenceLayer": { "name": "My Group" }
    }
  }
}
```

The referenced group needs to exist already in the document, for example in the input PSD. New-document creation with a group layer remains an upcoming feature and is not currently supported.
