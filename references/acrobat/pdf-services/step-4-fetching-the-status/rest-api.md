# Polling request examples

Run these templates in Bash with the Adobe client ID, access token and job ID. Prefer the exact `location` received on job submission. Each endpoint below belongs to its named operation.

## Extract PDF

```bash
curl --location -g --request GET 'https://pdf-services.adobe.io/operation/extractpdf/{{Placeholder for job id}}/status' \
--header 'Authorization: Bearer {{Placeholder for token}}' \
--header 'x-api-key: {{Placeholder for client id}}'
```

## Compress PDF

```bash
curl --location -g --request GET 'https://pdf-services.adobe.io/operation/compresspdf/{{Placeholder for job id}}/status' \
--header 'Authorization: Bearer {{Placeholder for token}}' \
--header 'x-api-key: {{Placeholder for client id}}'
```

For PDF to Markdown, the status route is `/operation/pdftomarkdown/{jobID}/status`.

## Download a completed result

Wait for `status` to be `done`. Set `DOWNLOAD_URI` to the desired returned URI: `content.downloadUri` for Extract JSON, `resource.downloadUri` for its resource archive, or `asset.downloadUri` for Markdown/compression output. Set `OUTPUT_FILE` to the local destination path. These fields describe Adobe-hosted output.

```bash
curl --fail --location "$DOWNLOAD_URI" --output "$OUTPUT_FILE"
```

An HTTP `200` response still needs its `status` checked. Continue polling for `in progress`; inspect errors for `failed`. For job-completion callbacks, use [webhook notifications](../webhook-notification.md).
