# Export a PDF to Word with Java

Use the complete `ExportPDFToWord.java` application in Adobe's [Java quickstart](https://github.com/AdobeDocs/pdfservices-api-documentation/blob/53d3c2030c0371e95a2edca19b888c4656140eb5/src/pages/overview/pdf-services-api/quickstarts/java/index.md#step-three-creating-the-application). Keep its imports, class, entry point and exception handling together. The [example setup](../examples/java/export-brochure-docx/export-brochure-docx-setup.md) also routes to the shared SDK call pattern and operation classes.

Complete the [Maven project setup](java-project-setup.md), place the application at `src/main/java/ExportPDFToWord.java`, and put `Bodea Brochure.pdf` at `src/main/resources/Bodea Brochure.pdf`. Run commands from the directory containing `pom.xml`.

## Credentials

Set these values from your `pdfservices-api-credentials.json` in the terminal that will run the application.

- Windows Command Prompt: `set "PDF_SERVICES_CLIENT_ID=<YOUR CLIENT ID>"` and `set "PDF_SERVICES_CLIENT_SECRET=<YOUR CLIENT SECRET>"`.
- PowerShell: `$env:PDF_SERVICES_CLIENT_ID = '<YOUR CLIENT ID>'` and `$env:PDF_SERVICES_CLIENT_SECRET = '<YOUR CLIENT SECRET>'`.
- macOS/Linux: `export PDF_SERVICES_CLIENT_ID='<YOUR CLIENT ID>'` and `export PDF_SERVICES_CLIENT_SECRET='<YOUR CLIENT SECRET>'`.

## Application flow

1. Build `ServicePrincipalCredentials` from the two environment variables and pass it to `PDFServices`.
2. Open the input PDF and upload its stream with `PDFServicesMediaType.PDF.getMediaType()` to obtain an `Asset`.
3. Build `ExportPDFParams` with `ExportPDFTargetFormat.DOCX`, then construct `ExportPDFJob` from the input asset and parameters.
4. Submit the job and pass the returned location plus `ExportPDFResult.class` to `getJobResult`.
5. Get the result asset with `getResult().getAsset()`, then obtain its `StreamAsset` through `getContent`.
6. Create the output directory and copy the returned input stream to `output/Bodea Brochure.docx`.

Run `mvn compile exec:java "-Dexec.mainClass=ExportPDFToWord"`. Check the application log and the generated Word file. The application catches service, usage, SDK and I/O errors; process termination alone does not establish a successful conversion.
