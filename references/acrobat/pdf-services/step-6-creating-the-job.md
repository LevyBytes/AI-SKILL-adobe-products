# Submit an electronic-seal job

After the PDF upload succeeds, submit `POST https://pdf-services.adobe.io/operation/electronicseal` with `Authorization: Bearer <access_token>`, `x-api-key: <client_id>` and `Content-Type: application/json`.

The JSON body sets `inputDocumentAssetID` to the uploaded PDF's `assetID`. Its `sealOptions` object holds the certificate authorization in `cscCredentialOptions` and the signature field in `sealFieldOptions`. An uploaded appearance image uses the separate top-level `sealImageAssetID`. Check [TSP credentials](tsp-credential-information-csc-credential-options-required.md), [seal field placement](seal-field-parameters-seal-field-options-required.md) and the [complete request contract](https://developer.adobe.com/document-services/docs/apis/#operation/pdfoperations.electronicseal) for required and optional fields.

A successful submission returns `201` and a `location` response header. Save that header for [status polling](step-7-fetching-the-status.md); submission alone does not mean the PDF has been sealed.
