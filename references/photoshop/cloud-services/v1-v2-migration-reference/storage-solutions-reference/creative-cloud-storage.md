# 2. Creative Cloud storage

**Note:** In this context, Creative Cloud Storage specifically means file storage and access through ACP (Adobe Content Platform).

Choose one source representation.

By Creative Cloud path

```json
{
  "image": {
    "source": {
      "creativeCloudPath": "my-folder/input.psd"
    }
  },
  "outputs": [
    {
      "destination": {
        "creativeCloudPath": "my-folder/output.jpg"
      },
      "mediaType": "image/jpeg"
    }
  ]
}
```

By Creative Cloud file ID; creativeCloudProjectId is optional

```json
{
  "image": {
    "source": {
      "creativeCloudFileId": "urn:aaid:...",
      "creativeCloudProjectId": "urn:aaid:sc:..."
    }
  },
  "outputs": [
    {
      "destination": {
        "creativeCloudPath": "my-folder/output.jpg"
      },
      "mediaType": "image/jpeg"
    }
  ]
}
```

**No leading slash:** `creativeCloudPath` values must not begin with `/`. Use `"my-folder/file.psd"`, not `"/my-folder/file.psd"`.

**Use cases:**

- Integration with the CC ecosystem and ACP
- Direct access to ACP-stored CC files for the user
- Collaboration workflows
