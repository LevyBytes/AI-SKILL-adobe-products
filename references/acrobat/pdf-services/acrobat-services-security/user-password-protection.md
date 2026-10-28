A document-open password must be handled before an operation that rejects encrypted input. With the document owner's authorization, use [Remove Protection](https://developer.adobe.com/document-services/docs/apis/#operation/pdfoperations.removeprotection) and process the resulting unprotected PDF.

For the REST operation, select `password` from the document's protection:

- If an owner password protects permissions, supply that owner password, including when the document also has a user password.
- Otherwise, supply the user password that opens the document.

After [uploading the PDF](../step-2-uploading-an-asset.md), send `POST https://pdf-services.adobe.io/operation/removeprotection` with `Authorization: Bearer <access_token>`, `x-api-key: <client_id>` and `Content-Type: application/json`. The internal-storage request requires `assetID` and `password` as strings. Use the returned job location to obtain the completed result before submitting that result to another operation.

For SDK integration, use the [Remove Protection guide](https://developer.adobe.com/document-services/docs/overview/pdf-services-api/howtos/remove-protection) for the installed language/version; its password wording should be checked against the REST operation contract. Opening a file successfully with its user password does not establish that the same password can remove owner restrictions.
