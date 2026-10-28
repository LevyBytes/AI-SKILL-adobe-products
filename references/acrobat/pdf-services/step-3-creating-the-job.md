# Submit a PDF extraction or Markdown job

After the [input upload](step-2-uploading-an-asset.md) succeeds, choose the result format and send its operation request with the uploaded `assetID`:

| Result | POST endpoint | Request contract |
| --- | --- | --- |
| Structured JSON and requested extraction resources | `/operation/extractpdf` | [Extract PDF](https://developer.adobe.com/document-services/docs/apis/#operation/pdfoperations.extractpdf) |
| Markdown | `/operation/pdftomarkdown` | [PDF to Markdown](https://developer.adobe.com/document-services/docs/apis/#operation/pdfoperations.pdftomarkdown) |

Use `https://pdf-services.adobe.io` as the API base, with `Authorization: Bearer <access_token>`, `x-api-key: <client_id>` and `Content-Type: application/json`. Supply the operation's required fields and desired extraction options from its contract; the asset ID alone does not describe every operation.

A successful submission returns `201` and a `location` response header. Retain that header and follow [status polling and result retrieval](step-4-fetching-the-status.md). For the full Markdown sequence, use the [conversion workflow](pdf-to-markdown/rest-api.md).
