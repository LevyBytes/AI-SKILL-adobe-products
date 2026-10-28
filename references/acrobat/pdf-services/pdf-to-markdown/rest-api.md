# REST API

Run the conversion from a server environment that keeps client credentials private. Use a PDF Services credential and an access token; do not send SDK credentials to end-user devices.

## Uploaded-asset workflow

1. Obtain an access token using the PDF Services client ID and client secret. Follow [Authentication and upload setup](https://developer.adobe.com/document-services/docs/overview/pdf-extract-api/gettingstarted).
2. Request an upload URI with `POST /assets`, using `Authorization: Bearer <token>`, `x-api-key: <clientID>` and `Content-Type: application/json`. Set the JSON field `mediaType` to `application/pdf`. Upload the PDF bytes with `PUT` to the returned `uploadUri`; retain the `assetID`.
3. Submit `POST /operation/pdftomarkdown` to the selected PDF Services region. Send the same authorization and API-key headers plus `Content-Type: application/json`. The JSON body requires `assetID`; add `getFigures: true` when figures are needed.
4. A successful submission returns HTTP `201` and a `location` response header. Poll that returned URI with `GET` and the authorization/API-key headers. The status route is `/operation/pdftomarkdown/{jobID}/status`.
5. HTTP `200` from polling is not by itself completion. Continue for `status: "in progress"`; handle `status: "failed"` and its error fields. On `status: "done"`, use the returned asset's `downloadUri` to retrieve the Markdown.

The configured API bases are `https://pdf-services-ue1.adobe.io` and `https://pdf-services-ew1.adobe.io`; the getting-started guide also uses the default URI `https://pdf-services.adobe.io`.

## Request parameters

For Adobe-managed storage, use top-level `assetID` and optional boolean `getFigures`. For external storage, use `input`, optional `output` and `params.getFigures`. Do not mix the two request shapes.

The operation also supports `notifiers` for callback delivery. Check the [complete request, polling and external-storage contracts](https://developer.adobe.com/document-services/docs/apis/#operation/pdfoperations.pdftomarkdown) before configuring those options. Check [input and rate limits](document-requirements.md) before submission.

For SDK examples and setup context, use the [PDF to Markdown examples](https://developer.adobe.com/document-services/docs/overview/pdf-extract-api/howtos/pdf-to-markdown-api).
