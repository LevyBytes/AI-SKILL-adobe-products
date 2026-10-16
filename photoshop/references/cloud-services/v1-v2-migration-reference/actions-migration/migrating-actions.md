# Action-file migration

**V1 Endpoints Consolidated:**

- `/pie/psdService/photoshopActions`
- `/pie/psdService/actionJSON`
- `/pie/psdService/productCrop`
- `/pie/psdService/depthBlur`
- `/pie/psdService/splitView`
- `/pie/psdService/sideBySide`

**V2 Endpoint:** `/v2/execute-actions`

**Key Change:** The convenience API action files are available for use.

**.atn file pattern:**

V1:

```json
{
  "options": {
    "actions": [{ "href": "<ACTION_URL>", "storage": "external" }]
  }
}
```

V2:

```json
{
  "options": {
    "actions": [
      {
        "source": {
          "url": "<ACTION_URL>"
        }
      }
    ]
  }
}
```

Related references:

- [Inline ActionJSON migration](inline-action-json-migration.md)
- [Multiple actions and action selection](multiple-actions-and-selection.md)
- [Action resource bindings and placeholders](action-resource-bindings.md)
