# Structural changes (all output formats)

The following structural changes apply to every output type:

| V1 Field | V2 Field | Required | Notes |
| --- | --- | --- | --- |
| `outputs[].href` | `outputs[].destination.url` | Yes | Nested in destination object |
| `outputs[].type` | `outputs[].mediaType` | Yes | Renamed for clarity |
| `outputs[].storage` | `outputs[].destination.storageType` | No\* | Only for Azure/Dropbox |

\*`storageType` remains optional except for Azure Blob Storage and Dropbox.

**V1 Pattern:**

```json
{
  "outputs": [
    {
      "href": "https://...",
      "storage": "external",
      "type": "image/jpeg"
    }
  ]
}
```

**V2 Pattern:**

```json
{
  "outputs": [
    {
      "destination": {
        "url": "https://..."
      },
      "mediaType": "image/jpeg"
    }
  ]
}
```
