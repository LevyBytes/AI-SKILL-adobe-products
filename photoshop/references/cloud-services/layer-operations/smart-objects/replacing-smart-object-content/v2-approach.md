# V2 approach

```json
{
  "edits": {
    "layers": [
      {
        "type": "smart_object_layer",
        "name": "Existing Smart Object",
        "operation": {
          "type": "edit"
        },
        "smartObject": {
          "smartObjectFile": {
            "source": {
              "url": "<NEW_SOURCE_URL>"
            }
          }
        }
      }
    ]
  }
}
```

To swap in new smart object content, provide the replacement file URL at `smartObject.smartObjectFile.source.url`. The layer edit still requires `operation.type: "edit"`.

Known limitation: V2 cannot replace a linked smart object layer with an embedded smart object.
