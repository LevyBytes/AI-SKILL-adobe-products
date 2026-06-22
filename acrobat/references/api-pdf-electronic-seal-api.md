# Howtos, Quickstarts

> Adobe Acrobat reference. Original prose; identifiers preserved verbatim.

## Overview

Covers: Using Our APIs; Overview — What is PDF Electronic Seal API ?; Quickstart for Adobe PDF Electronic Seal API (.NET).

## Using Our APIs

Looking to get going with our APIs? [Click here](api-gettingstarted-12.md) for a walkthrough that takes you through the setup step by step.

## Overview — What is PDF Electronic Seal API ?

Think of an Electronic Seal in a PDF as the digital equivalent of stamping a company's rubber stamp onto paper, only with far stronger security. When PDF Electronic Seal API stamps a seal for an organization, a digital certificate issued under that organization's own name stands behind it. That seal can draw on a certificate held inside a service provider that conforms to the [Cloud Signature Consortium (CSC)](https://cloudsignatureconsortium.org/). For working with digital documents, it provides the highest possible confidence in who the organization is.

Running in the cloud, PDF Electronic Seal API stamps electronic seals onto PDF documents with the digital certificates assigned to organizations, proving that official paperwork such as invoices and statements is authentic and untampered. A CSC-compliant Trust Service Provider (TSP) is the source of these digital certificates.

What stands in for an electronic seal can be an image on its own, a text block (carrying the entity's name, the seal's date and time, and so on), or image and text together. A sample of how an electronic seal looks once stamped onto a PDF document appears below.

[Figure: PDF Electronic Seal](https://raw.githubusercontent.com/AdobeDocs/pdfservices-api-documentation/main/src/pages/overview/images/seal-op-ss.jpg)

### Overview — PDF Electronic Seal API Components

These pieces come together in a PDF Electronic Seal API workflow:

- **PDF Document**: Supplied as the input file, with a ceiling of 100 MB on its size.
- **Sealing Parameters**: These set how the seal is formatted, whether it shows, and how it looks, and they carry the digital certificate credential details too. For details, see [sealing parameters](https://raw.githubusercontent.com/AdobeDocs/pdfservices-api-documentation/main/src/pages/overview/pdf-electronic-seal-api/howtos/electronic-seal-api.md#api-parameters).
- **Seal Image**: As the seal's backdrop, the API will take an **optional** image that supersedes the default seal artwork. No seal image may be larger than 5 MB. Only JPEG, PNG and PDF are accepted as image formats.

### Overview — Live Demo

Curious to watch the PDF Electronic Seal API at work? Stamping an electronic seal across PDF documents with digital certificate credentials and other adjustable parameters is made to look straightforward in the [Live Demo](https://acrobatservices.adobe.com/dc-eseal-playground/index.html).

### Overview — Supported Trust Service Providers

A TSP is a company supplying a broad set of identity and transaction services. Among them are certificate authority offerings: issuing and safeguarding the digital certificates that create and validate electronic seals, plus vouching for the organizations behind any seals that get applied.

Digital certificates held by Qualified Trust Service Providers (QTSPs) — those recognized under the eIDAS regulation and conforming to the CSC's open API standard — are what the PDF Electronic Seal API works with. Each such TSP has to support explicit authorization (PIN-only, static) together with the OAuth 2.0 client credential authorization flow.
At present, these are the TSPs that PDF Electronic Seal API can work with :

- [Intesi Group](https://www.intesigroup.com/en/)
- [Entrust](https://www.entrust.com/pdf-signing-certificates/)
- [GlobalSign](https://www.globalsign.com/en/digital-signatures)
- [TrustPro](https://www.trustpro.eu/)

### Overview — Supported Timestamping Authorities

Acting as a trusted party, a Timestamping Authority (TSA) applies the [RFC3161](https://www.ietf.org/rfc/rfc3161.txt) protocol to produce cryptographic timestamps and bind them to digital data; this attests that the data existed at a given moment, strengthening both its integrity and its legal standing.

While it seals a document, the PDF Electronic Seal API can apply trusted timestamping through one of the TSAs it supports. The supported TSAs are:

- [Adobe Qualified Timestamp](https://helpx.adobe.com/in/acrobat/kb/trust-services.html#:~:text=EUTL%20trusted%20services.-,Adobe%20Qualified%20Timestamp%20Service,-A%20qualified%20time)
- [Intesi Group](https://www.intesigroup.com/en/)
- [DigiCert Timestamp](https://www.digicert.com/)
- [GlobalSign Timestamp](https://www.globalsign.com/en-in)
- [InfoCert Qualified TSA](https://infocert.digital/consumer/timestamps/)
- [Namirial Qualified TSA](https://support.namirial.com/en/docs/docs-tsp-qualified-signature-timestamp/)
- [QuoVadis](https://www.quovadisglobal.com/)
- [Seiko Timestamp Service](https://www.seikotrust.jp/product/time-stamp/)

Need a TSA that isn't listed? Get in touch with us via customer support.

## Quickstart for Adobe PDF Electronic Seal API (.NET)

Let's kick off with PDF Electronic Seal API by working through a straightforward case: stamping an electronic seal onto an invoice PDF document. This guide takes you end to end through building a program that does exactly that.

### Prerequisites

Here is what you'll need to follow this guide through:

- [.NET: version 8.0 or above](https://dotnet.microsoft.com/en-us/download)
- [.Net SDK](https://dotnet.microsoft.com/en-us/download/dotnet/9.0)
- A build tool: Either Visual Studio or .NET Core CLI.
- An Adobe ID — and if you lack one, you'll be guided through making it during credential setup.
- Some means of editing code; this guide ties you to no particular editor.

### Step One: Getting credentials

1. Start by pointing your browser at [Link](https://acrobatservices.adobe.com/dc-integration-creation-app-cdn/main.html?api=pdf-services-api). Should you not yet be signed in to Adobe.com, sign in or register a new user. A personal email account works best here rather than a federated ID.

[Figure: Sign in](https://raw.githubusercontent.com/AdobeDocs/pdfservices-api-documentation/main/src/pages/overview/pdf-electronic-seal-api/quickstarts/dotnet/shot1.png)

2. Once you've registered or signed in, a prompt appears for naming the new credentials. Give them the name "New Project".

3. Switch the "Choose language" option over to ".Net".

4. Notice as well the checkbox labeled "Create personalized code sample." Checking it bundles a sizable batch of samples in with your credentials, which can come in handy as you dig deeper down the line.

5. Check the box that accepts the developer terms, and then hit "Create credentials."

[Figure: Project setup](https://raw.githubusercontent.com/AdobeDocs/pdfservices-api-documentation/main/src/pages/overview/pdf-electronic-seal-api/quickstarts/dotnet/shot2-spc.png)

6. The moment your credentials exist, a download of them starts on its own:

[Figure: alt](https://raw.githubusercontent.com/AdobeDocs/pdfservices-api-documentation/main/src/pages/overview/pdf-electronic-seal-api/quickstarts/dotnet/shot3-spc.png)

### Step Two: Setting up the project

1. Inside your Downloads folder, locate the credentials ZIP, PDFServicesSDK-.NetSamples.zip. Unzipping that archive reveals a samples folder alongside the `pdfservices-api-credentials.json` file.

[Figure: alt](https://raw.githubusercontent.com/AdobeDocs/pdfservices-api-documentation/main/src/pages/overview/pdf-electronic-seal-api/quickstarts/dotnet/shot5-spc.png)

2. Move the `pdfservices-api-credentials.json` file into a freshly made directory.

3. Within that new directory, add a file named `ElectronicSeal.csproj`. Declaring our requirements is one job of this file; it also helps spell out the application we're putting together.

```xml

```

What this file lays out is the set of dependencies required plus the way the application gets built.

Taking an Invoice PDF document, `sampleInvoice.pdf` (shipped with the sample project download), our application invokes the Acrobat Services API with sealing options set to their default appearance to stamp an electronic seal across the PDF and turn out an electronically sealed PDF.

4. Within your editor, open the folder where the credentials were copied earlier and the `csproj` file was created. Add a new file called `Program.cs`.

Now you're ready to begin coding.

### Step Three: Creating the application

1. Let's open by pulling in the dependencies we rely on:

```javascript
using System;
using System.IO;
using System.Reflection;
using Adobe.PDFServicesSDK;
using Adobe.PDFServicesSDK.auth;
using Adobe.PDFServicesSDK.exception;
using Adobe.PDFServicesSDK.io;
using Adobe.PDFServicesSDK.pdfjobs.jobs;
using Adobe.PDFServicesSDK.pdfjobs.parameters.electronicseal;
using Adobe.PDFServicesSDK.pdfjobs.results;
using log4net;
using log4net.Config;
using log4net.Repository;
```

2. With that done, we lay out our main class along with its `Main` method:

```javascript
namespace ElectronicSeal
{
    class Program
    {
        private static readonly ILog log = LogManager.GetLogger(typeof(Program));
        static void Main()
        {

        }
    }
}
```

3. Run the commands below to set the environment variables `PDF_SERVICES_CLIENT_ID` and `PDF_SERVICES_CLIENT_SECRET`, swapping the placeholders `YOUR CLIENT ID` and `YOUR CLIENT SECRET` for the credentials found in the `pdfservices-api-credentials.json` file:

- **Windows:**

  - `set PDF_SERVICES_CLIENT_ID=<YOUR CLIENT ID>`
  - `set PDF_SERVICES_CLIENT_SECRET=<YOUR CLIENT SECRET>`

- **MacOS/Linux:**
  - `export PDF_SERVICES_CLIENT_ID=<YOUR CLIENT ID>`
  - `export PDF_SERVICES_CLIENT_SECRET=<YOUR CLIENT SECRET>`

4. With that set, we go on to build our credentials together with a PDFServices instance:

```javascript
// Initial setup, create credentials instance
ICredentials credentials = new ServicePrincipalCredentials(
    Environment.GetEnvironmentVariable("PDF_SERVICES_CLIENT_ID"),
    Environment.GetEnvironmentVariable("PDF_SERVICES_CLIENT_SECRET"));

// Creates a PDF Services instance
PDFServices pdfServices = new PDFServices(credentials);
```

5. With that ready, the asset gets uploaded:

```javascript
// Creates an asset(s) from source file(s) and upload
IAsset asset = pdfServices.Upload(inputStream, PDFServicesMediaType.PDF.GetMIMETypeValue());
IAsset sealImageAsset =
    pdfServices.Upload(inputStreamSealImage, PDFServicesMediaType.PNG.GetMIMETypeValue());
```

6. After that, the document-level permission gets defined:

```javascript
// Set the document level permission to be applied for output document
DocumentLevelPermission documentLevelPermission = DocumentLevelPermission.FORM_FILLING;
```

7. After that, we specify the seal field options:

```javascript
// Create AppearanceOptions and add the required signature display items to it
AppearanceOptions appearanceOptions = new AppearanceOptions();
appearanceOptions.AddItem(AppearanceItem.NAME);
appearanceOptions.AddItem(AppearanceItem.LABELS);
appearanceOptions.AddItem(AppearanceItem.DATE);
appearanceOptions.AddItem(AppearanceItem.SEAL_IMAGE);
appearanceOptions.AddItem(AppearanceItem.DISTINGUISHED_NAME);

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
```

8. Next up, a CSC Certificate Credentials instance gets created:

```javascript
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
CertificateCredentials certificateCredentials = CertificateCredentials.CSCCredentialBuilder()
    .WithProviderName(providerName)
    .WithCredentialID(credentialID)
    .WithPin(pin)
    .WithCSCAuthContext(cscAuthContext)
    .Build();
```

9. From here, we assemble the job by feeding the seal parameters the certificate credentials and field options, then attach the seal image asset:

```javascript
// Create parameters for the job
PDFElectronicSealParams pdfElectronicSealParams =
    PDFElectronicSealParams.PDFElectronicSealParamsBuilder(certificateCredentials, fieldOptions)
        .WithDocumentLevelPermission(documentLevelPermission)
        .WithAppearanceOptions(appearanceOptions)
        .Build();

// Creates a new job instance
PDFElectronicSealJob pdfElectronicSealJob = new PDFElectronicSealJob(asset, pdfElectronicSealParams);

// Sets the optional input seal image for PDFElectronicSealOperation instance
pdfElectronicSealJob.SetSealImageAsset(sealImageAsset);
```

This block of code spells out the task at hand (an Electronic Seal operation), sets the parameters driving the seal job, and supplies the input seal image asset.

10. Submitting the job and retrieving its result is what the next code block handles:

```javascript
// Submits the job and gets the job result
String location = pdfServices.Submit(pdfElectronicSealJob);
PDFServicesResponse<PDFElectronicSealResult> pdfServicesResponse =
    pdfServices.GetJobResult<PDFElectronicSealResult>(location, typeof(PDFElectronicSealResult));

// Get content from the resulting asset(s)
IAsset resultAsset = pdfServicesResponse.Result.Asset;
StreamAsset streamAsset = pdfServices.GetContent(resultAsset);
```

11. Writing the result out to the location you choose is what the next code block does:

```javascript
// Creating output streams and copying stream asset's content to it
String outputFilePath = "/output/sealedOutput.pdf";
new FileInfo(Directory.GetCurrentDirectory() + outputFilePath).Directory.Create();
Stream outputStream = File.OpenWrite(Directory.GetCurrentDirectory() + outputFilePath);
streamAsset.Stream.CopyTo(outputStream);
outputStream.Close();
```

The finished application in full (`Program.cs`):

```javascript
using System;
using System.IO;
using System.Reflection;
using Adobe.PDFServicesSDK;
using Adobe.PDFServicesSDK.auth;
using Adobe.PDFServicesSDK.exception;
using Adobe.PDFServicesSDK.io;
using Adobe.PDFServicesSDK.pdfjobs.jobs;
using Adobe.PDFServicesSDK.pdfjobs.parameters.electronicseal;
using Adobe.PDFServicesSDK.pdfjobs.results;
using log4net;
using log4net.Config;
using log4net.Repository;

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

                // Create AppearanceOptions and add the required signature display items to it
                AppearanceOptions appearanceOptions = new AppearanceOptions();
                appearanceOptions.AddItem(AppearanceItem.NAME);
                appearanceOptions.AddItem(AppearanceItem.LABELS);
                appearanceOptions.AddItem(AppearanceItem.DATE);
                appearanceOptions.AddItem(AppearanceItem.SEAL_IMAGE);
                appearanceOptions.AddItem(AppearanceItem.DISTINGUISHED_NAME);

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

                // Create CertificateCredentials instance with required certificate details.
                CertificateCredentials certificateCredentials = CertificateCredentials.CSCCredentialBuilder()
                    .WithProviderName(providerName)
                    .WithCredentialID(credentialID)
                    .WithPin(pin)
                    .WithCSCAuthContext(cscAuthContext)
                    .Build();

                // Create parameters for the job
                PDFElectronicSealParams pdfElectronicSealParams =
                    PDFElectronicSealParams.PDFElectronicSealParamsBuilder(certificateCredentials, fieldOptions)
                        .WithDocumentLevelPermission(documentLevelPermission)
                        .WithAppearanceOptions(appearanceOptions)
                        .Build();

                // Creates a new job instance
                PDFElectronicSealJob pdfElectronicSealJob = new PDFElectronicSealJob(asset, pdfElectronicSealParams);
                pdfElectronicSealJob.SetSealImageAsset(sealImageAsset);

                // Submits the job and gets the job result
                String location = pdfServices.Submit(pdfElectronicSealJob);
                PDFServicesResponse<PDFElectronicSealResult> pdfServicesResponse =
                    pdfServices.GetJobResult<PDFElectronicSealResult>(location, typeof(PDFElectronicSealResult));

                // Get content from the resulting asset(s)
                IAsset resultAsset = pdfServicesResponse.Result.Asset;
                StreamAsset streamAsset = pdfServices.GetContent(resultAsset);

                // Creating output streams and copying stream asset's content to it
                String outputFilePath = "/output/sealedOutput.pdf";
                new FileInfo(Directory.GetCurrentDirectory() + outputFilePath).Directory.Create();
                Stream outputStream = File.OpenWrite(Directory.GetCurrentDirectory() + outputFilePath);
                streamAsset.Stream.CopyTo(outputStream);
                outputStream.Close();
            }
            catch (ServiceUsageException ex)
            {
                log.Error("Exception encountered while executing operation", ex);
            }
            catch (ServiceApiException ex)
            {
                log.Error("Exception encountered while executing operation", ex);
            }
            catch (SDKException ex)
            {
                log.Error("Exception encountered while executing operation", ex);
            }
            catch (IOException ex)
            {
                log.Error("Exception encountered while executing operation", ex);
            }
            catch (Exception ex)
            {
                log.Error("Exception encountered while executing operation", ex);
            }
        }

        static void ConfigureLogging()
        {
            ILoggerRepository logRepository = LogManager.GetRepository(Assembly.GetEntryAssembly());
            XmlConfigurator.Configure(logRepository, new FileInfo("log4net.config"));
        }
    }
}
```

### Next Steps

Having pulled off your first operation, [browse the documentation](https://developer.adobe.com/document-services/docs/overview/pdf-services-api/) for plenty of other examples, and drop by our [forums](https://community.adobe.com/t5/document-services-apis/ct-p/ct-Document-Cloud-SDK) whenever something comes up. Keep in mind, too, that the samples downloaded during credential creation pack in many demos of their own.

## See also

- [Quickstarts](api-pdf-extract-api.md)
