# Poll a PDF Services job and retrieve its result

Send `GET` to the `location` returned by the operation's successful submission. Include `Authorization: Bearer <access_token>` and `x-api-key: <client_id>`. The returned location selects the correct operation; do not substitute another operation's route.

| Operation | Status route |
| --- | --- |
| Extract PDF | `/operation/extractpdf/{jobID}/status` |
| PDF to Markdown | `/operation/pdftomarkdown/{jobID}/status` |
| Compress PDF | `/operation/compresspdf/{jobID}/status` |

An HTTP `200` response contains `status`. Continue polling for `in progress`; inspect the returned error for `failed`; retrieve output only after `done`. For Adobe-hosted output, Extract PDF returns `content.downloadUri` for JSON and `resource.downloadUri` for the resource archive. Markdown and compression return their document through `asset.downloadUri`. Use the response fields for the requested output and operation; external-storage requests have different completion shapes.

Use a storage `GET` to the complete returned download URI and save the response bytes. The [request examples](step-4-fetching-the-status/rest-api.md) cover polling and download. [Webhook notifications](webhook-notification.md) provide an alternative to polling.

Check the [Extract status contract](https://developer.adobe.com/document-services/docs/apis/#operation/pdfoperations.extractpdf.jobstatus) and [Markdown workflow](pdf-to-markdown/rest-api.md) for operation-specific output details.
