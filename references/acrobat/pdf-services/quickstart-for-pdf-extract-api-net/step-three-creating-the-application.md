# Extract text and inspect level-one headings with .NET

Use the complete `Program.cs` application in Adobe's [.NET Extract quickstart](https://github.com/AdobeDocs/pdfservices-api-documentation/blob/53d3c2030c0371e95a2edca19b888c4656140eb5/src/pages/overview/pdf-extract-api/quickstarts/extract-pdf/dotnet/index.md#step-three-creating-the-application). Keep its C# imports, logging, `Main` and exception handling together. The [example setup](../examples/dotnet/extract-first-level-headings/extract-first-level-headings-setup.md) routes to the shared SDK call pattern and classes.

Complete the [project setup](step-two-setting-up-the-project.md), keep `Adobe Extract API Sample.pdf` and `log4net.config` in the project directory, and place the application in `Program.cs` beside `ExtractTextInfoFromPDF.csproj`.

## Credentials

Set these values from your `pdfservices-api-credentials.json` in the terminal that will run the application.

- Windows Command Prompt: `set "PDF_SERVICES_CLIENT_ID=<YOUR CLIENT ID>"` and `set "PDF_SERVICES_CLIENT_SECRET=<YOUR CLIENT SECRET>"`.
- PowerShell: `$env:PDF_SERVICES_CLIENT_ID = '<YOUR CLIENT ID>'` and `$env:PDF_SERVICES_CLIENT_SECRET = '<YOUR CLIENT SECRET>'`.
- macOS/Linux: `export PDF_SERVICES_CLIENT_ID='<YOUR CLIENT ID>'` and `export PDF_SERVICES_CLIENT_SECRET='<YOUR CLIENT SECRET>'`.

## Application flow

1. Construct `ServicePrincipalCredentials` and `PDFServices`, then upload the source PDF as an `IAsset` with the PDF MIME type.
2. Build `ExtractPDFParams` with `ExtractElementType.TEXT` and attach it to `ExtractPDFJob` through `SetParams`.
3. Submit the job and retrieve `GetJobResult<ExtractPDFResult>` using the returned location and `typeof(ExtractPDFResult)`.
4. Download `Result.Resource` through `GetContent`; it is the asset used for the resource ZIP in the complete application and [SDK job example](https://opensource.adobe.com/PDFServices.NET.SDK.Samples/apidocs/latest/api/Adobe.PDFServicesSDK.pdfjobs.jobs.ExtractPDFJob.html). Keep `Content` and `ContentJSON` separate from this ZIP workflow.
5. Save the stream as `output/ExtractTextInfoFromPDF.zip`, then open that same path with `ZipFile.OpenRead`.
6. Read the `structuredData.json` ZIP entry, parse its `elements` array and print each element's `Text` when its `Path` ends with `/H1`.

Run `dotnet run --project ExtractTextInfoFromPDF.csproj` from the project directory. Confirm that the ZIP exists and inspect its JSON and console output. A document with no matching headings can produce no H1 lines even after successful text extraction.
