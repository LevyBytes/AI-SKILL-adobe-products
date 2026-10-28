# Upload an input asset

With an Adobe access token, upload the input in two requests:

1. Send `POST https://pdf-services.adobe.io/assets` with `Authorization: Bearer <access_token>`, `x-api-key: <client_id>` and `Content-Type: application/json`. For a PDF, the body is `{"mediaType": "application/pdf"}`.
2. After a successful `200` response, retain `assetID` and send the file bytes with `PUT` to the returned `uploadUri`. Use the input's media type as `Content-Type`; complete the upload before submitting the job.

Use the complete signed `uploadUri` unchanged. It authorizes the storage upload; the Adobe token and client ID belong on the Adobe `/assets` request.

For an optional electronic-seal image, repeat this upload procedure with the image's media type and retain its separate asset ID. See [electronic-seal input limits](pdf-electronic-seal-api-api-limitations.md).

Follow the [two-request example](getting-started-step-5-uploading-an-asset/rest-api.md) and [asset upload contract](https://developer.adobe.com/document-services/docs/apis/#operation/asset.uploadpresignedurl).
