# Export a PDF to Word with Node.js

Use the complete `export.js` application in Adobe's [Node.js quickstart](https://github.com/AdobeDocs/pdfservices-api-documentation/blob/53d3c2030c0371e95a2edca19b888c4656140eb5/src/pages/overview/pdf-services-api/quickstarts/nodejs/index.md#step-three-creating-the-application). Keep its `require` imports, asynchronous function, error handling and stream cleanup together. The [example setup](../examples/node/export-brochure-docx/export-brochure-docx-setup.md) also routes to the shared SDK call pattern and operation classes.

Complete the [Node project setup](node-project-setup.md), save the complete application as `export.js`, and place `Bodea Brochure.pdf` beside it. Run commands from that project directory.

## Credentials

Set these values from your `pdfservices-api-credentials.json` in the terminal that will run the application.

- Windows Command Prompt: `set "PDF_SERVICES_CLIENT_ID=<YOUR CLIENT ID>"` and `set "PDF_SERVICES_CLIENT_SECRET=<YOUR CLIENT SECRET>"`.
- PowerShell: `$env:PDF_SERVICES_CLIENT_ID = '<YOUR CLIENT ID>'` and `$env:PDF_SERVICES_CLIENT_SECRET = '<YOUR CLIENT SECRET>'`.
- macOS/Linux: `export PDF_SERVICES_CLIENT_ID='<YOUR CLIENT ID>'` and `export PDF_SERVICES_CLIENT_SECRET='<YOUR CLIENT SECRET>'`.

## Application flow

1. Construct `ServicePrincipalCredentials` from `clientId` and `clientSecret`, then create `PDFServices` with those credentials.
2. Use `fs.createReadStream` for the input PDF and upload it with `MimeType.PDF` to obtain `inputAsset`.
3. Create `ExportPDFParams` with `targetFormat: ExportPDFTargetFormat.DOCX`, then build `ExportPDFJob` with `inputAsset` and `params`.
4. Await `submit({job})` and use its returned `pollingURL` in `getJobResult` with `resultType: ExportPDFResult`.
5. Read `result.asset`, call `getContent`, and pipe `streamAsset.readStream` into the output file stream.

Run `node export.js`. The complete script writes `Bodea Brochure.docx` in the working directory. Check the logged errors and wait for the output stream to finish before consuming the file. For an application that continues processing, handle the stream's completion and errors explicitly.
