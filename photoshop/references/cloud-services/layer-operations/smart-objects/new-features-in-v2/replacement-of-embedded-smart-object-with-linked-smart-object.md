# Replacement of embedded smart object with linked smart object

V2 can turn an embedded smart object into a linked smart object when it is replaced with a linked file. V1 did not support this flow.

**Example:**

```json
{
  "edits": {
    "layers": [
      {
        "name": "Existing Embedded Smart Object",
        "type": "smart_object_layer",
        "operation": {
          "type": "edit"
        },
        "smartObject": {
          "isLinked": true,
          "smartObjectFile": {
            "source": {
              "url": "<LINKED_FILE_URL>"
            }
          }
        }
      }
    ]
  }
}
```

When converting an embedded smart object to a linked smart object, set `isLinked` to `true`.
