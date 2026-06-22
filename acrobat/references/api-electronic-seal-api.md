# Electronic Seal Api (part 1)

> Adobe Acrobat reference. Original prose; identifiers preserved verbatim.

### Signature Format (_signatureFormat_)

Picks which of the supported digital signature formats to apply:

- PADES : A newer, hardened format with tighter, more concrete, and more secure rules. Reference material lives at [ISO 32000-2](https://www.iso.org/standard/75839.html) and [ETSI EN 319 142-1](https://www.etsi.org/deliver/etsi_en/319100_319199/31914201/03.01.01_60/en_31914201v030101p.pdf).
- PKCS7 : A looser format than PADES, because it tolerates a wider set of PDF edits before the digital signature breaks. When nothing is chosen, this one is used. Reference material lives at [ISO 32000-1](https://www.iso.org/standard/63534.html).

### Document Level Permission (_documentLevelPermission_)

Sets the DocMDP (i.e. Document Modification Detection and Prevention) permissions, which carry over onto the sealed document that is produced.

- `NO_CHANGES_ALLOWED` : Locks the document entirely; editing it in any way breaks the signature.
- `FORM_FILLING` : Lets the recipient fill forms, spawn page templates, and add approval signatures. When the caller leaves this unset, it is the value that applies.
- `FORM_FILLING_AND_ANNOTATIONS` : Everything `FORM_FILLING` permits, plus creating, removing, and editing annotations.

When Trusted Timestamping is in use, the Long Term Validation (LTV) data for Timestamp Certificates lands in the PDF only where Document Level Permission equals `FORM_FILLING` or `FORM_FILLING_AND_ANNOTATIONS`.

### TSP Credential Information (_cscCredentialOptions_) : **Required**

Through these TSP parameters, the certificate credential held by the sealer (see [digital certificate credentials](api-gettingstarted-12.md)) arrives paired with its accompanying authentication and authorization data.

- **TSP Name** (_providerName_) : **Required** : Names the Trust Service Provider behind the certificate. For now, support is limited to TSPs that work through the OAuth 2.0 client credential authorization flow. Each supported Trust Service Provider's provider-name mapping appears in the table that follows.
  [Figure: TSP Name Mapping](https://raw.githubusercontent.com/AdobeDocs/pdfservices-api-documentation/main/src/pages/overview/images/provider-mapping-ss.png)

- **TSP Credential Id** (_credentialId_) : **Required** : Names the Digital ID held at the TSP that the seal should draw on.
- **TSP Authorization Context** (_authorizationContext_) : **Required** : Wraps up the authorization data needed to talk to the TSPs.

  - **Access Token** (_accessToken_) : **Required** : The access token that grants entry to the CSC provider's hosted APIs.
  - **Token Type** (_tokenType_): The kind of access token in play; absent a value, "Bearer" is assumed.

- **TSP Credential Authorization Parameter** (_credentialAuthParameters_) : **Required** : Carries the credential authorization details that unlock access to the digital certificate.

  - **PIN** (_pin_) : **Required** : The PIN tied to the credential ID issued by the TSP.

### TSA Information (_tsaOptions_) :

Through these TSA parameters, the [timestamping endpoint plus its credentials](api-gettingstarted-12.md) get wrapped together.

- **TSA URL** (_url_) : **Required** : The TSA URL that the request hits to fetch a timestamp token.
- **TSA Credential Authorization Parameter** (_credentialAuthParameters_) : Holds the credential details that authenticate against the TSA URL.

  - **TSA Username** (_username_) : Provide the username that authenticates the TSA URL.
  - **TSA Password** (_password_) : Provide the password that authenticates the TSA URL.

### Seal Field Parameters (_sealFieldOptions_) : **Required**

Use the seal field parameters either to spin up a fresh signature field or to reuse one that already exists.

- **Field Name** (_fieldName_) : **Required** : The signature field's name, which cannot be an empty string. An existing field carrying this name gets reused; otherwise a field with this name is created.
- **Visible** (_visible_): Controls whether the signature field shows or stays hidden. Its default, `true`, yields a visible seal.
- **Page Number** (_pageNumber_) : **Required** : The 1-based page index where the signature field gets placed. It only matters when a visible signature field is needed and is not yet in the pdf document. Supply it alongside an existing signature field and the page number must match the page already holding that field, or an error is raised. For an invisible signature field this parameter is skipped.
- **Location** (_location_) : **Required** : The bounding-box coordinates of the seal's appearance, expressed in default PDF user space units. This is only needed when the signature field is absent from the pdf document. Hand it in together with an existing signature field and it is disregarded. An invisible signature field likewise ignores this parameter.

- **Left** (_left_) : **Required** : The left x-coordinate
  - **Bottom** (_bottom_) : **Required** : The bottom y-coordinate
  - **Right** (_right_) : **Required** : The right x-coordinate
  - **Top** (_top_) : **Required** : The top y-coordinate

For a walk-through of adding the signature field on your own, consult [how to place a signature field in a PDF](https://www.adobe.com/sign/hub/how-to/add-a-signature-block-to-pdf).

### Seal Appearance Parameters (_sealAppearanceOptions_)

Sets the appearance parameters for the seal field. These come from a fixed list of display items: NAME, DATE, `DISTINGUISHED_NAME`, LABELS and `SEAL_IMAGE`.

- **Display Options** (_displayOptions_): Chooses what the seal puts on screen. Left unset, NAME and LABELS apply.

  - **NAME**: Puts the certificate owner's name on display.
    [Figure: Display Options](https://raw.githubusercontent.com/AdobeDocs/pdfservices-api-documentation/main/src/pages/overview/images/name-ss.png)
  - **DATE**: Puts the sealing date and time on display. Do not confuse this with a signed timestamp issued by a timestamp authority.
    [Figure: Display Options](https://raw.githubusercontent.com/AdobeDocs/pdfservices-api-documentation/main/src/pages/overview/images/date-ss.png)
  - `DISTINGUISHED_NAME`: Puts the distinguished name drawn from the digital certificate on display.
    [Figure: Display Options](https://raw.githubusercontent.com/AdobeDocs/pdfservices-api-documentation/main/src/pages/overview/images/dn-ss.png)
  - **LABELS**: Puts text labels on display.
    [Figure: Display Options](https://raw.githubusercontent.com/AdobeDocs/pdfservices-api-documentation/main/src/pages/overview/images/labels-ss.png)
  - `SEAL_IMAGE`: Puts the seal image on display.
    [Figure: Display Options](https://raw.githubusercontent.com/AdobeDocs/pdfservices-api-documentation/main/src/pages/overview/images/seal2-ss.png)
    Should the appearance parameters include `SEAL_IMAGE` while no seal image accompanies the request, Acrobat falls back to its standard trefoil image.
    [Figure: Display Options](https://raw.githubusercontent.com/AdobeDocs/pdfservices-api-documentation/main/src/pages/overview/images/trefoil-ss.png)

**Example JSON**

```json
{
  "signatureFormat": "PADES",
  "documentLevelPermission": "FORM_FILLING",
  "cscCredentialOptions": {
    "authorizationContext": {
      "accessToken": "<ACCESS_TOKEN>",
      "tokenType": "Bearer"
    },
    "credentialAuthParameters": {
      "pin": "<PIN>"
    },
    "providerName": "<PROVIDER_NAME>",
    "credentialId": "<CREDENTIAL_ID>"
  },
  "tsaOptions": {
    "url": "<TIMESTAMP_URL>",
    "credentialAuthParameters": {
      "username": "<USERNAME>",
      "password": "<PASSWORD>"
    }
  },
  "sealFieldOptions": {
    "pageNumber": 1,
    "fieldName": "Signature1",
    "visible": true,
    "location": {
      "left": 150,
      "top": 250,
      "bottom": 350,
      "right": 200
    }
  },
  "sealAppearanceOptions": {
    "displayOptions": ["NAME", "DATE", "LABELS", "DISTINGUISHED_NAME", "SEAL_IMAGE"]
  }
}
```

For now, Trusted Timestamping and Document Level Permissions ship only via the REST APIs and the Java SDK. The remaining SDKs are slated to gain these capabilities in later releases.

## PDF Electronic Seal API — API limitations

- **Input PDF size:** The input PDF may be at most 100 MB.
- **Seal Image size:** A seal image file may be at most 5 MB.
- **Seal Image formats:** Accepted seal image types are JPEG(image/jpeg), PNG(image/png) and PDF(application/pdf).
- **Password-protected Files:** Electronic sealing cannot run against encrypted or password-protected PDFs.
- **Signed/Sealed Files:** A PDF that already carries a signature, certification, or seal is off-limits for electronic sealing.
- **Input PDF version:** Any input PDF older than version 1.3 is rejected.
- **Usage Rights File:** Input PDFs that already carry usage rights are not accepted.

## PDF Electronic Seal API — REST API

Our public API Reference covers [PDF Electronic Seal API](https://raw.githubusercontent.com/AdobeDocs/pdfservices-api-documentation/main/src/pages/apis/index.md#tag/PDF-Electronic-Seal); see it there.

## PDF Electronic Seal API — Apply Electronic Seal with default appearance on PDF

Running an electronic seal with the default appearance over a supplied PDF is what the sample here demonstrates.

For guidance on putting our APIs to work, turn to the [API usage guide](https://raw.githubusercontent.com/AdobeDocs/pdfservices-api-documentation/main/src/pages/overview/pdf-services-api/howtos/api-usage.md).

### Java

```javascript
// Get the samples from https://www.adobe.com/go/pdftoolsapi_java_samples
// Run the sample:
// mvn -f pom.xml exec:java -Dexec.mainClass=com.adobe.pdfservices.operation.samples.electronicseal.ElectronicSeal

package com.adobe.pdfservices.operation.samples.electronicseal;

public class ElectronicSeal {

    // Initialize the logger.
    private static final Logger LOGGER = LoggerFactory.getLogger(ElectronicSeal.class);

    public static void main(String[] args) {
        try (InputStream inputStream = Files.newInputStream(new File("src/main/resources/sampleInvoice.pdf").toPath());
             InputStream inputStreamSealImage = Files.newInputStream(new File("src/main/resources/sampleSealImage.png").toPath())) {
            // Initial setup, create credentials instance
            Credentials credentials = new ServicePrincipalCredentials(
                System.getenv("PDF_SERVICES_CLIENT_ID"),
                System.getenv("PDF_SERVICES_CLIENT_SECRET"));

            // Creates a PDF Services instance
            PDFServices pdfServices = new PDFServices(credentials);

            // Creates an asset(s) from source file(s) and upload
            Asset asset = pdfServices.upload(inputStream, PDFServicesMediaType.PDF.getMediaType());
            Asset sealImageAsset = pdfServices.upload(inputStreamSealImage, PDFServicesMediaType.PNG.getMediaType());

            // Set the document level permission to be applied for output document
            DocumentLevelPermission documentLevelPermission = DocumentLevelPermission.FORM_FILLING;

            // Sets the Seal Field Name to be created in input PDF document.
            String sealFieldName = "Signature1";

            // Sets the page number in input document for applying seal.
            Integer sealPageNumber = 1;

            // Sets if seal should be visible or invisible.
            Boolean sealVisible = true;

            // Creates FieldLocation instance and set the coordinates for applying signature
            FieldLocation fieldLocation = new FieldLocation(150, 250, 350, 200);

            // Create FieldOptions instance with required details.
            FieldOptions fieldOptions = new FieldOptions.Builder(sealFieldName)
                .setFieldLocation(fieldLocation)
                .setPageNumber(sealPageNumber)
                .setVisible(sealVisible)
                .build();

            // Sets the name of TSP Provider being used.
            String providerName = "<PROVIDER_NAME>";

            // Sets the access token to be used to access TSP provider hosted APIs.
            String accessToken = "<ACCESS_TOKEN>";

            // Sets the credential ID.
            String credentialID = "<CREDENTIAL_ID>";

            // Sets the PIN generated while creating credentials.
            String pin = "<PIN>";

            // Creates CSCAuthContext instance using access token and token type.
            CSCAuthContext cscAuthContext = new CSCAuthContext(accessToken, "Bearer");

            // Create CertificateCredentials instance with required certificate details.
            CertificateCredentials certificateCredentials = CertificateCredentials.cscCredentialBuilder()
                .withProviderName(providerName)
                .withCredentialID(credentialID)
                .withPin(pin)
                .withCSCAuthContext(cscAuthContext)
                .build();

            // Create parameters for the job
            PDFElectronicSealParams pdfElectronicSealParams = PDFElectronicSealParams
                .pdfElectronicSealParamsBuilder(certificateCredentials, fieldOptions)
                .withDocumentLevelPermission(documentLevelPermission)
                .build();

            // Creates a new job instance
            PDFElectronicSealJob pdfElectronicSealJob = new PDFElectronicSealJob(asset, pdfElectronicSealParams);

            // Sets the optional input seal image for PDFElectronicSealOperation instance
            pdfElectronicSealJob.setSealImageAsset(sealImageAsset);

            // Submit the job and gets the job result
            String location = pdfServices.submit(pdfElectronicSealJob);
            PDFServicesResponse<PDFElectronicSealResult> pdfServicesResponse = pdfServices.getJobResult(location, PDFElectronicSealResult.class);

            // Get content from the resulting asset(s)
            Asset resultAsset = pdfServicesResponse.getResult().getAsset();
            StreamAsset streamAsset = pdfServices.getContent(resultAsset);

            // Creates an output stream and copy stream asset's content to it
            Files.createDirectories(Paths.get("output/"));
            OutputStream outputStream = Files.newOutputStream(new File("output/sealedOutput.pdf").toPath());
            LOGGER.info("Saving asset at output/sealedOutput.pdf");
            IOUtils.copy(streamAsset.getInputStream(), outputStream);
            outputStream.close();
        } catch (ServiceApiException | IOException | SDKException | ServiceUsageException ex) {
            LOGGER.error("Exception encountered while executing operation", ex);
        }
    }
}

```

### .NET

```javascript
// Get the samples from https://www.adobe.com/go/pdftoolsapi_net_samples
// Run the sample:
// cd ElectronicSeal/
// dotnet run ElectronicSeal.csproj

namespace ElectronicSeal
{
    class Program
    {
        // Initialize the logger.
        private static readonly ILog log = LogManager.GetLogger(typeof(Program));

        static void Main()
        {
            //Configure the logging
            ConfigureLogging();

            try
            {
                // Initial setup, create credentials instance
                ICredentials credentials = new ServicePrincipalCredentials(
                    Environment.GetEnvironmentVariable("PDF_SERVICES_CLIENT_ID"),
                    Environment.GetEnvironmentVariable("PDF_SERVICES_CLIENT_SECRET"));

                // Creates a PDF Services instance
                PDFServices pdfServices = new PDFServices(credentials);

                // Creates an asset(s) from source file(s) and upload
                using Stream inputStream = File.OpenRead(@"SampleInvoice.pdf");
                using Stream inputStreamSealImage = File.OpenRead(@"sampleSealImage.png");
                IAsset asset = pdfServices.Upload(inputStream, PDFServicesMediaType.PDF.GetMIMETypeValue());
                IAsset sealImageAsset =
                    pdfServices.Upload(inputStreamSealImage, PDFServicesMediaType.PNG.GetMIMETypeValue());

                // Set the document level permission to be applied for output document
                DocumentLevelPermission documentLevelPermission = DocumentLevelPermission.FORM_FILLING;

                // Sets the Seal Field Name to be created in input PDF document.
                String sealFieldName = "Signature1";

                // Sets the page number in input document for applying seal.
                int sealPageNumber = 1;

                // Sets if seal should be visible or invisible.
                bool sealVisible = true;

                // Creates FieldLocation instance and set the coordinates for applying signature
                FieldLocation fieldLocation = new FieldLocation(150, 250, 350, 200);

                // Create FieldOptions instance with required details.
                FieldOptions fieldOptions = new FieldOptions.Builder(sealFieldName)
                    .SetVisible(sealVisible)
                    .SetFieldLocation(fieldLocation)
                    .SetPageNumber(sealPageNumber)
                    .Build();

                // Sets the name of TSP Provider being used.
                String providerName = "<PROVIDER_NAME>";

                // Sets the access token to be used to access TSP provider hosted APIs.
                String accessToken = "<ACCESS_TOKEN>";

                // Sets the credential ID.
                String credentialID = "<CREDENTIAL_ID>";

                // Sets the PIN generated while creating credentials.
                String pin = "<PIN>";

                // Creates CSCAuthContext instance using access token and token type.
                CSCAuthContext cscAuthContext = new CSCAuthContext(accessToken, "Bearer");
```
