# Download the sealed PDF

Inspect the body of the job-status response even when its HTTP status is `200`:

- `in progress`: continue polling the job's returned location.
- `failed`: inspect the error; there is no completed output to download.
- `done`: for Adobe-hosted output, read the signed URI from `asset.downloadUri` and use a storage `GET` to save the PDF bytes.

Use the complete signed URI unchanged. This storage request uses the URI's authorization, not an Adobe client secret or an invented storage signature. External-storage requests use the output arrangement defined by that request's contract.

Follow the [download request example](step-8-downloading-the-asset/rest-api.md) and [electronic-seal status contract](https://developer.adobe.com/document-services/docs/apis/#operation/pdfoperations.electronicseal.jobstatus).
