# PSD to Cloud PSD conversion (using project ID)

Convert a PSD file to Cloud PSD format using project id and path.

**Key Changes:**

- `repo:id` / `repo:path` (input) -> `creativeCloudPath` + `creativeCloudProjectId` (project-scoped input)
- `repo:id` / `repo:path` (output) -> `creativeCloudPath` + `creativeCloudProjectId` (project-scoped output)
- `sensei:repoType: "RAPI"` -> Not needed (inferred from fields used)
- `dc:format` -> `mediaType` (always `document/vnd.adobe.cpsd+dcxucf` or `document/vnd.adobe.cpsd+dcx`)
- JSON becomes simple; multipart/form-data is no longer needed

**V2 API:**

```shell
curl -X POST \
  https://photoshop-api.adobe.io/v2/create-composite \
  -H "Authorization: Bearer $token" \
  -H "x-api-key: $apiKey" \
  -H "Content-Type: application/json" \
  -d '{
  "image": {
    "source": {
      "creativeCloudPath": "project-files/input.psd",
      "creativeCloudProjectId": "urn:aaid:sc:US:a21c8629-413f-55d9-b5b0-....."
    }
  },
  "outputs": [{
    "destination": {
      "creativeCloudPath": "project-files/output.psdc",
      "creativeCloudProjectId": "urn:aaid:sc:US:a21c8629-413f-55d9-b5b0-....."
    },
    "mediaType": "document/vnd.adobe.cpsd+dcx"
  }]
}'
```

For project-specific assets, send `creativeCloudProjectId` alongside `creativeCloudPath` so the request resolves context and permissions correctly.

- `creativeCloudProjectId` must use a valid project-root URN that starts with `urn:aaid:sc:`.
- `creativeCloudPath` gives the asset location under that project root.
