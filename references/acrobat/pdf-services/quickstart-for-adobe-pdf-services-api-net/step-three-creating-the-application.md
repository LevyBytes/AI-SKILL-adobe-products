# Export a PDF to Word with .NET

Use the complete `Program.cs` application in Adobe's [.NET quickstart](https://github.com/AdobeDocs/pdfservices-api-documentation/blob/53d3c2030c0371e95a2edca19b888c4656140eb5/src/pages/overview/pdf-services-api/quickstarts/dotnet/index.md#step-three-creating-the-application). Keep its C# imports, `Main`, logging configuration and exception handling together. The [example setup](../examples/dotnet/export-brochure-docx/export-brochure-docx-setup.md) routes to the shared SDK call pattern and operation classes.

Complete the [project setup](step-two-setting-up-the-project.md), place the complete application in `Program.cs`, and keep `Bodea Brochure.pdf` and `log4net.config` in the project directory. Run commands there, alongside `ExportPDFToWord.csproj`.

## Credentials

Set these values from your `pdfservices-api-credentials.json` in the terminal that will run the application.

- Windows Command Prompt: `set "PDF_SERVICES_CLIENT_ID=<YOUR CLIENT ID>"` and `set "PDF_SERVICES_CLIENT_SECRET=<YOUR CLIENT SECRET>"`.
- PowerShell: `$env:PDF_SERVICES_CLIENT_ID = '<YOUR CLIENT ID>'` and `$env:PDF_SERVICES_CLIENT_SECRET = '<YOUR CLIENT SECRET>'`.
- macOS/Linux: `export PDF_SERVICES_CLIENT_ID='<YOUR CLIENT ID>'` and `export PDF_SERVICES_CLIENT_SECRET='<YOUR CLIENT SECRET>'`.

## Application flow

1. Build `ServicePrincipalCredentials` from the environment values and create `PDFServices`.
2. Open `Bodea Brochure.pdf` and call `Upload` with `PDFServicesMediaType.PDF.GetMIMETypeValue()` to obtain an `IAsset`.
3. Build `ExportPDFParams` for `ExportPDFTargetFormat.DOCX` and create `ExportPDFJob` with the input asset and parameters.
4. Call `Submit`, then retrieve `GetJobResult<ExportPDFResult>` using the returned location and `typeof(ExportPDFResult)`.
5. Read `Result.Asset`, call `GetContent`, and copy the returned `StreamAsset.Stream` to `output/Bodea Brochure.docx`.

Run `dotnet run --project ExportPDFToWord.csproj`. The complete application creates its output directory. Check the log and the generated Word file; handled exceptions can prevent conversion without establishing success from the process exit alone.
