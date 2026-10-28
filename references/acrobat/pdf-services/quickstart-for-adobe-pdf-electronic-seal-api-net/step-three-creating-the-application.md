# Apply an electronic seal with .NET

Use Adobe's complete [electronic-seal application with appearance options](https://github.com/adobe/PDFServices.NET.SDK.Samples/blob/4360e3f042cd3395e399c572490e411b0e3e314d/ElectronicSealWithAppearanceOptions/Program.cs). Keep its C# imports, `Main`, logging and exception handling together. The [example setup](../examples/dotnet/electronic-seal-with-appearance-options/electronic-seal-with-appearance-options-setup.md) routes to the shared SDK call pattern and operation classes.

Complete the [project setup](step-two-setting-up-the-project.md). Place the complete application in `Program.cs`, alongside `ElectronicSeal.csproj`, `SampleInvoice.pdf`, `sampleSealImage.png` and `log4net.config`. This application configures a visible seal and custom appearance items.

## Credentials

Set these PDF Services values from `pdfservices-api-credentials.json` in the terminal that will run the application.

- Windows Command Prompt: `set "PDF_SERVICES_CLIENT_ID=<YOUR CLIENT ID>"` and `set "PDF_SERVICES_CLIENT_SECRET=<YOUR CLIENT SECRET>"`.
- PowerShell: `$env:PDF_SERVICES_CLIENT_ID = '<YOUR CLIENT ID>'` and `$env:PDF_SERVICES_CLIENT_SECRET = '<YOUR CLIENT SECRET>'`.
- macOS/Linux: `export PDF_SERVICES_CLIENT_ID='<YOUR CLIENT ID>'` and `export PDF_SERVICES_CLIENT_SECRET='<YOUR CLIENT SECRET>'`.

The application also requires your certificate provider's name, credential ID, PIN and access token. Replace those placeholders in the complete program. Its `CSCAuthContext` uses that provider token with `Bearer`; the PDF Services client credentials serve a separate authentication step.

## Application flow

1. Create `ServicePrincipalCredentials` and `PDFServices`, then upload the PDF and PNG seal image as separate assets with their matching MIME types.
2. Configure `AppearanceOptions` with `NAME`, `LABELS`, `DATE`, `SEAL_IMAGE` and `DISTINGUISHED_NAME`, and select `DocumentLevelPermission.FORM_FILLING`.
3. Build `FieldOptions` for visible field `Signature1` on page `1`. The source's `FieldLocation` arguments are `150, 250, 350, 200`; adapt the field placement to the input document.
4. Build `CertificateCredentials` from the provider details and `CSCAuthContext`, then build `PDFElectronicSealParams` with the credentials, field options, document permission and appearance options.
5. Create `PDFElectronicSealJob` for the PDF asset and attach the seal image with `SetSealImageAsset`.
6. Submit the job, obtain `GetJobResult<PDFElectronicSealResult>`, read `Result.Asset`, and download its content stream.

Run `dotnet run --project ElectronicSeal.csproj` from the project directory. The complete program creates `output/` and writes `sealedOutput` followed by a timestamp and `.pdf`. Check the service/provider errors and the resulting document before treating the sealing operation as successful.
