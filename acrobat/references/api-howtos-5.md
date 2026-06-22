# Pdf External Storage Sol, Pdf Properties

> Adobe Acrobat reference. Original prose; identifiers preserved verbatim.

## Overview

Covers: Overview — External Storage for Adobe PDF Services APIs; Get PDF Properties.

## Overview — External Storage for Adobe PDF Services APIs

Reaching files straight from a client's own external storage is now possible with Adobe PDF Services APIs. By calling the PDF Services API with Signed URLs, the client lets files be pulled automatically from wherever they are stored.

Access to a resource for a limited window is what a **Signed URL** grants. Because user and authentication details are baked into them, Signed URLs let people who hold no credentials still reach the resource in question.

Within the request body, PDF Services APIs accept signed URLs for both input and output files. For the full picture, check the **External Section** under the Request Body of whichever API you are calling.

### Overview — Supported External Storage Solutions

Across the range of cloud storage providers, Signed URLs work the same way for both downloads and uploads. At present the signed URLs that Adobe PDF Services APIs honor are those produced through -

- [SharePoint](https://raw.githubusercontent.com/AdobeDocs/pdfservices-api-documentation/main/src/pages/overview/pdf-services-api/howtos/pdf-external-storage-sol.md#sharepoint)
- [Amazon S3](https://raw.githubusercontent.com/AdobeDocs/pdfservices-api-documentation/main/src/pages/overview/pdf-services-api/howtos/pdf-external-storage-sol.md#amazon-s3)
- [Dropbox](https://raw.githubusercontent.com/AdobeDocs/pdfservices-api-documentation/main/src/pages/overview/pdf-services-api/howtos/pdf-external-storage-sol.md#dropbox)
- [Azure Blob](https://raw.githubusercontent.com/AdobeDocs/pdfservices-api-documentation/main/src/pages/overview/pdf-services-api/howtos/pdf-external-storage-sol.md#azure-blob)

### SharePoint

Using Signed URIs, PDF Services APIs are able to talk to SharePoint, both retrieving and sending files to and from a SharePoint site.

### Supported URL Prefixes

- `https://<tenant-name>.sharepoint.com`

For the full details, see [here](https://learn.microsoft.com/en-us/graph/overview).

### Amazon S3

Through Signed URIs, PDF Services APIs can reach Amazon S3 to pull and push files into S3 buckets, with no AWS security credentials or permissions required.

### Supported URL Prefixes:

- `https://<bucket-name>.s3.amazonaws.com`
- `https://<bucket-name>.s3.<region-code>.amazonaws.com`
- `https://s3.amazonaws.com`
- `https://<bucket-name>.s3-accelerate.amazonaws.com`
- `https://<bucket-name>.s3-<region-code>.amazonaws.com`
- `https://s3.<region-code>.amazonaws.com`

For the full details, see [here](https://docs.aws.amazon.com/AmazonS3/latest/userguide/using-presigned-url.html).

### Dropbox

By way of Signed URIs, PDF Services APIs can link to Dropbox to download and upload files from a Dropbox location, requiring neither credentials nor an access token.

### Supported URL Prefixes:

- `https://<item-id>.dl.dropboxusercontent.com`
- `https://content.dropboxapi.com/`

For the full details, see [here](https://www.dropbox.com/developers/documentation/http/documentation).

### Azure Blob

PDF Services APIs reach Azure Blob through Signed URIs or [SAS Urls](https://learn.microsoft.com/en-us/azure/storage/common/storage-sas-overview), downloading and uploading files from Azure Blob with no credentials or access token needed. Apply the [best practices](https://learn.microsoft.com/en-us/azure/storage/common/storage-sas-overview#best-practices-when-using-sas) whenever you work with SAS URLs.

### Supported URL Prefixes

- `https://<account-name>.blob.core.windows.net`

For the full details, see [here](https://learn.microsoft.com/en-us/azure/ai-services/translator/document-translation/how-to-guides/create-sas-tokens?tabs=Containers#create-sas-tokens-with-azure-storage-explorer).

### Overview — Limitation

- Following a redirect is not permitted on signed URIs.
- Signed URIs are supported over HTTPS only.

## Get PDF Properties

Call this service when you need a PDF's metadata returned for downstream handling. It reports attributes such as the page total, the PDF version, how large the file is, which compliance standards are met, font details, the permission flags, and additional fields — all delivered as JSON so a program can parse them without effort.

Typical reasons to pull these properties include: confirming whether the document has been made fully searchable through OCR; reading the certificate details behind an e-signature; identifying which standards apply (for instance, PDF/A and PDF/UA); gauging how big the file is ahead of a compression pass; and inspecting the flags that govern copying, editing, printing, and encryption — among other checks.

### REST API

Our public API Reference covers [PDF Properties](https://raw.githubusercontent.com/AdobeDocs/pdfservices-api-documentation/main/src/pages/apis/index.md#tag/PDF-Properties) in detail.

### Fetch PDF Properties

What follows retrieves the property set of a supplied PDF.

For guidance on calling these APIs, consult the [API usage guide](https://raw.githubusercontent.com/AdobeDocs/pdfservices-api-documentation/main/src/pages/overview/pdf-services-api/howtos/api-usage.md).

### Java

```javascript
// Get the samples from https://www.adobe.com/go/pdftoolsapi_java_samples
// Run the sample:
// mvn -f pom.xml exec:java -Dexec.mainClass=com.adobe.pdfservices.operation.samples.pdfproperties.GetPDFProperties

  public class GetPDFProperties {

    // Initialize the logger.
    private static final Logger LOGGER = LoggerFactory.getLogger(GetPDFProperties.class);

    public static void main(String[] args) {

      try (InputStream inputStream = Files.newInputStream(new File("src/main/resources/pdfPropertiesInput.pdf").toPath())) {
        // Initial setup, create credentials instance
        Credentials credentials = new ServicePrincipalCredentials(
                System.getenv("PDF_SERVICES_CLIENT_ID"),
                System.getenv("PDF_SERVICES_CLIENT_SECRET"));

        // Creates a PDF Services instance
        PDFServices pdfServices = new PDFServices(credentials);

        // Creates an asset(s) from source file(s) and upload
        Asset asset = pdfServices.upload(inputStream, PDFServicesMediaType.PDF.getMediaType());

        // Create parameters for the job
        PDFPropertiesParams pdfPropertiesParams = PDFPropertiesParams.pdfPropertiesParamsBuilder()
                .includePageLevelProperties()
                .build();

        // Creates a new job instance
        PDFPropertiesJob pdfPropertiesJob = new PDFPropertiesJob(asset)
                .setParams(pdfPropertiesParams);

        // Submit the job and gets the job result
        String location = pdfServices.submit(pdfPropertiesJob);
        PDFServicesResponse<PDFPropertiesResult> pdfServicesResponse = pdfServices.getJobResult(location, PDFPropertiesResult.class);

        PDFProperties pdfProperties = pdfServicesResponse.getResult().getPdfProperties();

        // Fetch the requisite properties of the specified PDF.
        LOGGER.info("Size of the specified PDF file: {}", pdfProperties.getDocument().getFileSize());
        LOGGER.info("Version of the specified PDF file: {}", pdfProperties.getDocument().getPDFVersion());
        LOGGER.info("Page count of the specified PDF file: {}", pdfProperties.getDocument().getPageCount());
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
// cd PDFPropertiesAsJSONObject/
// dotnet run GetPDFProperties.csproj

namespace GetPDFProperties
{
    class Program
    {
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
                using Stream inputStream = File.OpenRead(@"pdfPropertiesInput.pdf");
                IAsset asset = pdfServices.Upload(inputStream, PDFServicesMediaType.PDF.GetMIMETypeValue());

                // Create parameters for the job
                PDFPropertiesParams pdfPropertiesParams = PDFPropertiesParams.PDFPropertiesParamsBuilder()
                    .IncludePageLevelProperties()
                    .Build();

                // Creates a new job instance
                PDFPropertiesJob pdfPropertiesJob = new PDFPropertiesJob(asset);
                pdfPropertiesJob.SetParams(pdfPropertiesParams);

                // Submits the job and gets the job result
                String location = pdfServices.Submit(pdfPropertiesJob);
                PDFServicesResponse<PDFPropertiesResult> pdfServicesResponse =
                    pdfServices.GetJobResult<PDFPropertiesResult>(location, typeof(PDFPropertiesResult));

                PDFProperties pdfProperties = pdfServicesResponse.Result.PDFProperties;

                // Fetch the requisite properties of the specified PDF.
                Console.WriteLine("The resultant PDF Properties are: " + pdfProperties.ToString());
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

### Node JS

```javascript
// Get the samples from http://www.adobe.com/go/pdftoolsapi_node_sample
// Run the sample:
// node src/pdfproperties/get-pdf-properties.js

const {
  ServicePrincipalCredentials,
  PDFServices,
  MimeType,
  PDFPropertiesParams,
  PDFPropertiesJob,
  PDFPropertiesResult,
  SDKError,
  ServiceUsageError,
  ServiceApiError,
} = require("@adobe/pdfservices-node-sdk");
const fs = require("fs");

(async () => {
  let readStream;
  try {
    // Initial setup, create credentials instance
    const credentials = new ServicePrincipalCredentials({
      clientId: process.env.PDF_SERVICES_CLIENT_ID,
      clientSecret: process.env.PDF_SERVICES_CLIENT_SECRET,
    });

    // Creates a PDF Services instance
    const pdfServices = new PDFServices({ credentials });

    // Creates an asset(s) from source file(s) and upload
    readStream = fs.createReadStream("./pdfPropertiesInput.pdf");
    const inputAsset = await pdfServices.upload({
      readStream,
      mimeType: MimeType.PDF,
    });

    // Create parameters for the job
    const params = new PDFPropertiesParams({
      includePageLevelProperties: true,
    });

    // Creates a new job instance
    const job = new PDFPropertiesJob({ inputAsset, params });

    // Submit the job and get the job result
    const pollingURL = await pdfServices.submit({ job });
    const pdfServicesResponse = await pdfServices.getJobResult({
      pollingURL,
      resultType: PDFPropertiesResult,
    });

    const pdfProperties = pdfServicesResponse.result.pdfProperties;

    // Fetch the requisite properties of the specified PDF.
    console.log(`Size of the specified PDF file: ${pdfProperties.document.fileSize}`);
    console.log(`Version of the specified PDF file: ${pdfProperties.document.pdfVersion}`);
    console.log(`Page count of the specified PDF file: ${pdfProperties.document.pageCount}`);
  } catch (err) {
    if (
      err instanceof SDKError ||
      err instanceof ServiceUsageError ||
      err instanceof ServiceApiError
    ) {
      console.log("Exception encountered while executing operation", err);
    } else {
      console.log("Exception encountered while executing operation", err);
    }
  } finally {
    readStream?.destroy();
  }
})();
```

### Python

```python

### Initialize the logger

logging.basicConfig(level=logging.INFO)

class GetPDFProperties:
    def __init__(self):
        try:
            file = open('pdfPropertiesInput.pdf', 'rb')
            input_stream = file.read()
            file.close()

### Creates an asset(s) from source file(s) and upload

input_asset = pdf_services.upload(input_stream=input_stream,
                                              mime_type=PDFServicesMediaType.PDF)

            pdf_properties_params = PDFPropertiesParams(include_page_level_properties=True)

### Creates a new job instance

pdf_properties_job = PDFPropertiesJob(input_asset=input_asset, pdf_properties_params=pdf_properties_params)

### Submit the job and gets the job result

location = pdf_services.submit(pdf_properties_job)
            pdf_services_response = pdf_services.get_job_result(location, PDFPropertiesResult)

            pdf_properties_result = pdf_services_response.get_result()

### Fetch the requisite properties of the specified PDF.

print("Size of the specified PDF file:"
                  + str(pdf_properties_result.get_pdf_properties_dict().get("document").get("file_size")))
            print("Version of the specified PDF file:"
                  + str(pdf_properties_result.get_pdf_properties_dict().get("document").get("pdf_version")))
            print("Page count of the specified PDF file:"
                  + str(pdf_properties_result.get_pdf_properties_dict().get("document").get("page_count")))

        except (ServiceApiException, ServiceUsageException, SdkException) as e:
            logging.exception(f'Exception encountered while executing operation: {e}')

if __name__ == '__main__':
    GetPDFProperties()
```

### REST API

```javascript
// Please refer our REST API docs for more information
// https://developer.adobe.com/document-services/docs/apis/#tag/PDF-Properties

curl --location --request POST 'https://pdf-services.adobe.io/operation/pdfproperties' \
--header 'x-api-key: {{Placeholder for client_id}}' \
--header 'Content-Type: application/json' \
--header 'Authorization: Bearer {{Placeholder for token}}' \
--data-raw '{
    "assetID": "urn:aaid:AS:UE1:23c30ee0-2e4d-46d6-87f2-087832fca718",
    "pageLevel": false
}'
```
