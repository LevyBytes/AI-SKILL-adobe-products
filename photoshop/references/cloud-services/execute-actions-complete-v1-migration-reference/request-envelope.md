# 2. Request envelope

**`inputs[]` array to `image` single object.** V1 placed the image in an `inputs` array with a maximum of 1 item; V2 uses a top-level `image` object. execute-actions does not support multiple inputs.

**V1:**

```json
{ "inputs": [{ "href": "<URL>", "storage": "external" }] }
```

**V2:**

```json
{ "image": { "source": { "url": "<URL>" } } }
```

| V1 | V2 | Notes |
| --- | --- | --- |
| `inputs[0].href` | `image.source.url` | Breaking |
| `inputs[0].storage: "external"` | _(omit)_ | External URLs need no type |
| `inputs[0].storage: "adobe"` (path) | `image.source.creativeCloudPath` | No leading slash |
| `inputs[0].storage: "adobe"` (URN) | `image.source.creativeCloudFileId` |  |
| `inputs[0].storage: "acp"` | `image.source.url` | Use presigned URL |
| `outputs[].href` | `outputs[].destination.url` | Breaking |
| `outputs[].storage` | `outputs[].destination.storageType` (Azure/Dropbox only) | Breaking |
| `outputs[].type` | `outputs[].mediaType` | Breaking |
