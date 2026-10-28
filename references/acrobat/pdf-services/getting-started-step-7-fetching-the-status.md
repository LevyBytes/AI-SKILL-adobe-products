# Poll an electronic-seal job

Send `GET` to the `location` returned by the electronic-seal job submission. Include `Authorization: Bearer <access_token>` and `x-api-key: <client_id>`. The operation-specific route is `/operation/electronicseal/{jobID}/status`.

An HTTP `200` response reports the job state; it does not by itself indicate completion:

- `in progress`: continue polling the returned location within the service's request limits.
- `done`: follow [download the sealed PDF](getting-started-step-8-downloading-the-asset.md).
- `failed`: inspect the returned error and resolve it before submitting another job.

Use the [polling request example](getting-started-step-7-fetching-the-status/rest-api.md) or configure [webhook notifications](webhook-notification.md). The [status contract](https://developer.adobe.com/document-services/docs/apis/#operation/pdfoperations.electronicseal.jobstatus) defines the response.
