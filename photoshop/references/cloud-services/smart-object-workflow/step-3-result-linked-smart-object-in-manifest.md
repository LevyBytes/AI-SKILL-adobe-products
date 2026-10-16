# Step 3 — Result: linked smart object in manifest

Manifest JSON layer excerpt:

```json
{
  "smartObject": {
    "isSmartObject": true,
    "isLinked": true,
    "isValid": true,
    "smartObjectData": {
      "type": "smartObject",
      "transform": [
        0,
        0,
        1000,
        0,
        1000,
        1000,
        0,
        1000
      ],
      "fileInfo": {
        "relative": "../../df06670e-467a-4880-a697-cfc162f313c3/downloads/c89b3884-3df6-444e-9540-a0c26af33ddc.png",
        "name": "c89b3884-3df6-444e-9540-a0c26af33ddc.png",
        "path": "/tmp/df06670e-467a-4880-a697-cfc162f313c3/downloads/c89b3884-3df6-444e-9540-a0c26af33ddc.png",
        "fileType": "png",
        "linked": true
      }
    }
  }
}
```

The snippet shows that linked smart objects report `linked` as `true` and include `path` details for the external file.
