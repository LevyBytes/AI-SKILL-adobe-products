# Creative Cloud output destinations

**Use Case:** Write outputs into ACP (Adobe Content Platform), the storage layer behind Creative Cloud.

**Request:**

```json
{
  "outputs": [
    {
      "destination": {
        "creativeCloudPath": "my-folder/output.jpg"
      },
      "mediaType": "image/jpeg",
      "quality": "maximum"
    }
  ]
}
```

**Status Response:**

```json
{
  "status": "succeeded",
  "result": {
    "outputs": [
      {
        "destination": {
          "creativeCloudPath": "my-folder/output.jpg"
        },
        "mediaType": "image/jpeg",
        "quality": "maximum"
      }
    ]
  }
}
```

**Pattern:** The output repeats the Creative Cloud path once the file is stored in ACP-backed Creative Cloud storage.

**Alternative: Creative Cloud File ID**

Request

```json
{
  "destination": {
    "creativeCloudFileId": "urn:aaid:sc:VA6C2:...",
    "creativeCloudProjectId": "urn:aaid:sc:VA6C2:..."
  }
}
```

Status Response

```json
{
  "destination": {
    "creativeCloudFileId": "urn:aaid:sc:VA6C2:...",
    "creativeCloudProjectId": "urn:aaid:sc:VA6C2:..."
  }
}
```

Related references:

- [Creative Cloud response migration](creative-cloud-response-migration.md)
