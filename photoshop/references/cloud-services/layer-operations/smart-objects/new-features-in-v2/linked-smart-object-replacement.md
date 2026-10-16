# Replacement of linked smart object with another linked smart object

With V2, an existing linked smart object can be replaced by a different linked smart object. V1 did not allow that replacement.

**Example:**

```json
{
  "edits": {
    "layers": [
      {
        "name": "Existing Linked Smart Object",
        "type": "smart_object_layer",
        "operation": {
          "type": "edit"
        },
        "smartObject": {
          "isLinked": true,
          "smartObjectFile": {
            "source": {
              "url": "<NEW_LINKED_FILE_URL>"
            }
          }
        }
      }
    ]
  }
}
```
