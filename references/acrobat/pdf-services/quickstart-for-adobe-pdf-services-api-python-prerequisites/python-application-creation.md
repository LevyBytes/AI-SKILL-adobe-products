# Export a PDF to Word with Python

Use the complete application in Adobe's [Python quickstart](https://github.com/AdobeDocs/pdfservices-api-documentation/blob/53d3c2030c0371e95a2edca19b888c4656140eb5/src/pages/overview/pdf-services-api/quickstarts/python/index.md#step-three-creating-the-application). Save it as `export_pdf_to_docx.py` in the standalone project described by the [project setup](python-project-setup.md). Keep the imports, `ExportPDFToDOCX` class and entry point together. The [example setup](../examples/python/export-brochure-docx/export-brochure-docx-setup.md) also provides SDK call-pattern and class routes.

Place `Bodea Brochure.pdf` in that working directory. Create `output/ExportPDFToDOCX/` before running the complete application, because its file-writing code does not create that directory. Its output is `output/ExportPDFToDOCX/Bodea Brochure.docx`.

## Credentials

Set these values from your `pdfservices-api-credentials.json` in the terminal that will run the application.

- Windows Command Prompt: `set "PDF_SERVICES_CLIENT_ID=<YOUR CLIENT ID>"` and `set "PDF_SERVICES_CLIENT_SECRET=<YOUR CLIENT SECRET>"`.
- PowerShell: `$env:PDF_SERVICES_CLIENT_ID = '<YOUR CLIENT ID>'` and `$env:PDF_SERVICES_CLIENT_SECRET = '<YOUR CLIENT SECRET>'`.
- macOS/Linux: `export PDF_SERVICES_CLIENT_ID='<YOUR CLIENT ID>'` and `export PDF_SERVICES_CLIENT_SECRET='<YOUR CLIENT SECRET>'`.

## Application flow

1. Read the PDF as bytes, build `ServicePrincipalCredentials` from `client_id` and `client_secret`, and create `PDFServices`.
2. Call `upload` with `input_stream` and `mime_type=PDFServicesMediaType.PDF` to obtain the input asset.
3. Create `ExportPDFParams` for `ExportPDFTargetFormat.DOCX`, then `ExportPDFJob` with `input_asset` and `export_pdf_params`.
4. Pass the job to `submit` and its returned location to `get_job_result` with `ExportPDFResult`.
5. Get the result through `get_result().get_asset()`, call `get_content`, and write `get_input_stream()` bytes to the output Word file.

Run `python export_pdf_to_docx.py` with the interpreter used for project setup. Check the logged service, usage or SDK exceptions and the generated Word file. Keep the program's working directory consistent with its relative input and output paths.
