# Generate a smart object manifest

Set these values in the payload:

| Placeholder | Description |
| --- | --- |
| `<SIGNED_OUTPUT_PSD_GET_URL>` | Presigned GET URL of the output PSD from Step 1. Use this to read the PSD for manifest generation. |

**Endpoint:** `POST /v2/generate-manifest`

**Request payload:**

```json
{
  "image": {
    "source": {
      "url": "<SIGNED_OUTPUT_PSD_GET_URL>"
    }
  },
  "outputs": [
    {
      "destination": {
        "embedded": "json"
      },
      "mediaType": "application/json"
    }
  ]
}
```

Set `image.source.url` to the URL for the PSD produced in Step 1.
Calling this API starts an async job and returns a status URL. Use `href` for [job status](https://raw.githubusercontent.com/AdobeDocs/ffs-photoshop-API/6a5b7e759e09b595562aa4cb20a2e9b36437bb60/src/pages/guides/get-job-status/index.md) polling. Read the JSON manifest from the completed job result after the job succeeds.
