# Rotate Pages, Sdk Utilities, Service Region Configuration For Apis

> Adobe Acrobat reference. Original prose; identifiers preserved verbatim.

## Overview

Covers: Rotate Pages; SDK Utilities; Service Region Configuration for PDF Services APIs — Default Configuration.

## Rotate Pages

Turn a single page within a document you already have.

### REST API

For this, see the [Rotate Pages.](https://raw.githubusercontent.com/AdobeDocs/pdfservices-api-documentation/main/src/pages/apis/index.md#tag/Page-Manipulation) section of our public API Reference.

### Rotate Pages in PDF

Rotating only the pages you choose inside a PDF is what the rotate pages operation does — say, flipping a page from portrait over to landscape.

For details on calling our APIs, consult the [API usage guide](https://raw.githubusercontent.com/AdobeDocs/pdfservices-api-documentation/main/src/pages/overview/pdf-services-api/howtos/api-usage.md).

### Java

```javascript
// Get the samples from https://www.adobe.com/go/pdftoolsapi_java_samples
// Run the sample:
// mvn -f pom.xml exec:java -Dexec.mainClass=com.adobe.pdfservices.operation.samples.rotatepages.RotatePDFPages

  public class RotatePDFPages {

    // Initialize the logger.
    private static final Logger LOGGER = LoggerFactory.getLogger(RotatePDFPages.class);

    public static void main(String[] args) {
        try (InputStream inputStream = Files.newInputStream(new File("src/main/resources/rotatePagesInput.pdf").toPath())) {
            // Initial setup, create credentials instance
            Credentials credentials = new ServicePrincipalCredentials(
                    System.getenv("PDF_SERVICES_CLIENT_ID"),
                    System.getenv("PDF_SERVICES_CLIENT_SECRET"));

            // Creates a PDF Services instance
            PDFServices pdfServices = new PDFServices(credentials);

            // Creates an asset(s) from source file(s) and upload
            Asset asset = pdfServices.upload(inputStream, PDFServicesMediaType.PDF.getMediaType());

            // First set of page ranges for rotating the specified pages of the input PDF file.
            PageRanges firstPageRange = getFirstPageRangeForRotation();

            // Second set of page ranges for rotating the specified pages of the input PDF file.
            PageRanges secondPageRange = getSecondPageRangeForRotation();

            // Create parameters for the job
            RotatePagesParams rotatePagesParams = RotatePagesParams.rotatePagesParamsBuilder()
                    .withAngleToRotatePagesBy(Angle._90, firstPageRange)
                    .withAngleToRotatePagesBy(Angle._180, secondPageRange)
                    .build();

            // Creates a new job instance
            RotatePagesJob rotatePagesJob = new RotatePagesJob(asset, rotatePagesParams);

            // Submit the job and gets the job result
            String location = pdfServices.submit(rotatePagesJob);
            PDFServicesResponse<RotatePagesResult> pdfServicesResponse = pdfServices.getJobResult(location, RotatePagesResult.class);

            // Get content from the resulting asset(s)
            Asset resultAsset = pdfServicesResponse.getResult().getAsset();
            StreamAsset streamAsset = pdfServices.getContent(resultAsset);

            // Creates an output stream and copy stream asset's content to it
            Files.createDirectories(Paths.get("output/"));
            OutputStream outputStream = Files.newOutputStream(new File("output/rotatePagesOutput.pdf").toPath());
            LOGGER.info("Saving asset at output/rotatePagesOutput.pdf");
            IOUtils.copy(streamAsset.getInputStream(), outputStream);
            outputStream.close();
        } catch (IOException | ServiceApiException | SDKException | ServiceUsageException e) {
            LOGGER.error("Exception encountered while executing operation", e);
        }
    }

    private static PageRanges getFirstPageRangeForRotation() {
        // Specify pages for rotation
        PageRanges firstPageRange = new PageRanges();
        // Add page 1
        firstPageRange.addSinglePage(1);

        // Add pages 3 to 4
        firstPageRange.addRange(3, 4);
        return firstPageRange;
    }

    private static PageRanges getSecondPageRangeForRotation() {
        // Specify pages for rotation
        PageRanges secondPageRange = new PageRanges();
        // Add page 2
        secondPageRange.addSinglePage(2);

        return secondPageRange;
    }
  }
```

### .NET

```javascript
// Get the samples from https://www.adobe.com/go/pdftoolsapi_net_samples
// Run the sample:
// cd RotatePDFPages/
// dotnet run RotatePDFPages.csproj

namespace RotatePDFPages
{
    class Program
    {
        private static readonly ILog log = LogManager.GetLogger(typeof(Program));

        static void Main()
        {
            // Configure the logging
            ConfigureLogging();
            try
            {
                // Initial setup, create credentials instance
                ICredentials credentials = new ServicePrincipalCredentials(
                    Environment.GetEnvironmentVariable("PDF_SERVICES_CLIENT_ID"),
                    Environment.GetEnvironmentVariable("PDF_SERVICES_CLIENT_SECRET"));

                // Creates a PDF Services instance
                PDFServices pdfServices = new PDFServices(credentials);

                // Creates an asset from source file and upload
                using Stream inputStream = File.OpenRead(@"rotatePagesInput.pdf");
                IAsset asset = pdfServices.Upload(inputStream, PDFServicesMediaType.PDF.GetMIMETypeValue());

                // Sets angle by 90 degrees (in clockwise direction) for rotating the specified pages of
                // the input PDF file.
                PageRanges firstPageRange = GetFirstPageRangeForRotation();

                // Sets angle by 180 degrees (in clockwise direction) for rotating the specified pages of
                // the input PDF file.
                PageRanges secondPageRange = GetSecondPageRangeForRotation();

                // Create parameters for the job
                RotatePagesParams rotatePagesParams = RotatePagesParams.RotatePagesParamsBuilder()
                    .withAngleToRotatePagesBy(Angle._90, firstPageRange)
                    .withAngleToRotatePagesBy(Angle._180, secondPageRange)
                    .Build();

                // Creates a new job instance
                RotatePagesJob rotatePagesJob = new RotatePagesJob(asset, rotatePagesParams);

                // Submits the job and gets the job result
                String location = pdfServices.Submit(rotatePagesJob);
                PDFServicesResponse<RotatePagesResult> pdfServicesResponse =
                    pdfServices.GetJobResult<RotatePagesResult>(location, typeof(RotatePagesResult));

                // Get content from the resulting asset(s)
                IAsset resultAsset = pdfServicesResponse.Result.Asset;
                StreamAsset streamAsset = pdfServices.GetContent(resultAsset);

                // Creating output streams and copying stream asset's content to it
                String outputFilePath = "/output/rotatePagesOutput.pdf";
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

        private static PageRanges GetFirstPageRangeForRotation()
        {
            // Specify pages for rotation.
            PageRanges firstPageRange = new PageRanges();
            // Add page 1.
            firstPageRange.AddSinglePage(1);

            // Add pages 3 to 4.
            firstPageRange.AddRange(3, 4);
            return firstPageRange;
        }

        private static PageRanges GetSecondPageRangeForRotation()
        {
            // Specify pages for rotation.
            PageRanges secondPageRange = new PageRanges();
            // Add page 2.
            secondPageRange.AddSinglePage(2);

            return secondPageRange;
        }

        // Generates a string containing a directory structure and file name for the output file.
        private static String CreateOutputFilePath()
        {
            String timeStamp = DateTime.Now.ToString("yyyy'-'MM'-'dd'T'HH'-'mm'-'ss");
            return ("/output/rotate" + timeStamp + ".pdf");
        }
    }
}
```

### Node JS

```javascript
// Get the samples from http://www.adobe.com/go/pdftoolsapi_node_sample
// Run the sample:
// node src/rotatepages/rotate-pdf-pages.js

const {
  ServicePrincipalCredentials,
  PDFServices,
  MimeType,
  PageRanges,
  RotatePagesParams,
  Angle,
  RotatePagesJob,
  RotatePagesResult,
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
    readStream = fs.createReadStream("./rotatePagesInput.pdf");
    const inputAsset = await pdfServices.upload({
      readStream,
      mimeType: MimeType.PDF,
    });

    // First set of page ranges for rotating the specified pages of the input PDF file
    const firstPageRange = getFirstPageRangeForRotation();

    // Second set of page ranges for rotating the specified pages of the input PDF file
    const secondPageRange = getSecondPageRangeForRotation();

    // Create parameters for the job
    const params = new RotatePagesParams()
      .setAngleToRotatePagesBy(Angle._90, firstPageRange)
      .setAngleToRotatePagesBy(Angle._180, secondPageRange);

    // Creates a new job instance
    const job = new RotatePagesJob({ inputAsset, params });

    // Submit the job and get the job result
    const pollingURL = await pdfServices.submit({ job });
    const pdfServicesResponse = await pdfServices.getJobResult({
      pollingURL,
      resultType: RotatePagesResult,
    });

    // Get content from the resulting asset(s)
    const resultAsset = pdfServicesResponse.result.asset;
    const streamAsset = await pdfServices.getContent({ asset: resultAsset });

    // Creates a write stream and copy stream asset's content to it
    const outputFilePath = "./rotatePagesOutput.pdf";
    console.log(`Saving asset at ${outputFilePath}`);

    const writeStream = fs.createWriteStream(outputFilePath);
    streamAsset.readStream.pipe(writeStream);
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

function getFirstPageRangeForRotation() {
  // Specify pages for rotation.
  const firstPageRange = new PageRanges();
  // Add page 1.
  firstPageRange.addSinglePage(1);
  // Add pages 3 to 4.
  firstPageRange.addRange(3, 4);
  return firstPageRange;
}

function getSecondPageRangeForRotation() {
  // Specify pages for rotation.
  const secondPageRange = new PageRanges();
  // Add page 2.
  secondPageRange.addSinglePage(2);
  return secondPageRange;
}
```

### Python

```python

### Initialize the logger

logging.basicConfig(level=logging.INFO)

class RotatePDFPages:
    def __init__(self):
        try:
            file = open('rotatePagesInput.pdf', 'rb')
            input_stream = file.read()
            file.close()

### First set of page ranges for rotating the specified pages of the input PDF file.

first_page_range: PageRanges = self.get_first_page_range_for_rotation()

### Second set of page ranges for rotating the specified pages of the input PDF file.

second_page_range: PageRanges = self.get_second_page_range_for_rotation()

### Create parameters for the job

rotate_pages_params = RotatePagesParams()
            rotate_pages_params.add_angle_to_rotate_for_page_ranges(angle=Angle.ANGLE_90, page_ranges=first_page_range)
            rotate_pages_params.add_angle_to_rotate_for_page_ranges(angle=Angle.ANGLE_180, page_ranges=second_page_range)

### Creates a new job instance

reorder_pages_job = RotatePagesJob(input_asset=input_asset, rotate_pages_params=rotate_pages_params)

### Submit the job and gets the job result

location = pdf_services.submit(reorder_pages_job)
            pdf_services_response = pdf_services.get_job_result(location, RotatePagesResult)

### Creates an output stream and copy stream asset's content to it

output_file_path = 'rotatePagesOutput.pdf'
            with open(output_file_path, "wb") as file:
                file.write(stream_asset.get_input_stream())

        except (ServiceApiException, ServiceUsageException, SdkException) as e:
            logging.exception(f'Exception encountered while executing operation: {e}')

    @staticmethod
    def get_first_page_range_for_rotation() -> PageRanges:

### Specify pages for rotation

first_page_range = PageRanges()

### Add pages 3 to 4

first_page_range.add_range(3, 4)
        return first_page_range

    @staticmethod
    def get_second_page_range_for_rotation() -> PageRanges:

### Specify pages for rotation

second_page_range = PageRanges()

### Add page 2

second_page_range.add_single_page(2)
        return second_page_range

if __name__ == "__main__":
    RotatePDFPages()

```

### REST API

```javascript
// Please refer our REST API docs for more information
// https://developer.adobe.com/document-services/docs/apis/#tag/Page-Manipulation

curl --location --request POST 'https://pdf-services.adobe.io/operation/pagemanipulation' \
--header 'x-api-key: {{Placeholder for client_id}}' \
--header 'Content-Type: application/json' \
--header 'Authorization: Bearer {{Placeholder for token}}' \
--data-raw '{
    "assetID": "urn:aaid:AS:UE1:23c30ee0-2e4d-46d6-87f2-087832fca718f",
    "pageActions": [
        {
            "rotate": {
                "angle": 90,
                "pageRanges": [
                    {
                        "start": 1
                    }
                ]
            }
        },
        {
            "rotate": {
                "angle": 180,
                "pageRanges": [
                    {
                        "start": 2,
                        "end": 2
                    }
                ]
            }
        }
    ]
}'
```

## SDK Utilities

Several helper utilities ship with the Adobe PDF Services SDKs. They let you keep your workflows lean by handling chores such as renewing download URIs and removing assets you no longer need.

### Important Note on Expiry

- Asset Expiry : Anything you push into Adobe's internal storage is held only on a transient basis, for a 24-hour window.

- Pre-signed URI Expiry : Whichever pre-signed URI you receive for an upload or a download stays valid for just one hour before it lapses.

Our public API Reference covers assets [here](https://raw.githubusercontent.com/AdobeDocs/pdfservices-api-documentation/main/src/pages/apis/index.md#tag/Assets).

### Refresh Download URI

Should an asset's URI have lapsed, this call mints a fresh download URI for it — handy whenever you still need to pull the asset down after the original link has timed out.

### Java

```javascript
CreatePDFResult result = pdfServicesResponse.getResult();
Asset asset = result.getAsset();

// refresh the download URI in case it expires or is null for the uploaded asset
Asset refreshedAsset = pdfServices.refreshDownloadURI(asset);
```

### Node.js

```javascript
const result = pdfServicesResponse.result;
const asset = result.asset;

// refresh the download URI in case it expires or is null for the uploaded asset
const refreshedAsset = await pdfServices.refreshDownloadURI({ asset });
```

### Python

```python
result = pdf_services_response.getResult()
asset = result.getAsset()

### refresh the download URI in case it expires or is null for the uploaded asset

refreshed_asset = pdf_services.refreshDownloadURI(asset);
```

### .NET

```csharp
CreatePDFResult result = pdfServicesResponse.Result;
IAsset asset = result.Asset;

// refresh the download URI in case it expires or is null for the uploaded asset
pdfServices.RefreshDownloadURI(asset);
```

### refresh the download URI in case it expires or is null for the uploaded asset — Delete Asset

Use this call to wipe an asset out of Adobe's internal storage. Because those assets only sit there transiently for 24 hours anyway, reach for it when you would rather not leave your file on Adobe's storage at all and want it gone right away.

### Java

```javascript
CreatePDFResult result = pdfServicesResponse.getResult();
Asset asset = result.getAsset();

// delete asset
pdfServices.deleteAsset(asset);
```

### Node.js

```javascript
const result = pdfServicesResponse.result;
const asset = result.asset;

// delete asset
await pdfServices.deleteAsset({ asset });
```

### Python

```python
create_pdf_result = pdf_services_response.getResult()
output_asset = create_pdf_result.getAsset()

### delete asset

pdf_services.deleteAsset(output_asset);
```

### .NET

```csharp
CreatePDFResult result = pdfServicesResponse.Result;
IAsset asset = result.Asset;

// delete asset
pdfServices.deleteAsset(asset);
```

## Service Region Configuration for PDF Services APIs — Default Configuration

By default, every document handed to the Adobe PDF Services APIs is processed in the `United States` region.
After you buy the PDF Services API, you can point its APIs at one of the alternate regions listed below for processing instead.

### Service Region Configuration for PDF Services APIs — Service Region Configuration

At present, the regions these PDF Services APIs can run in are the following :

| Region Code | Name | Hostname |
| --- | --- | --- |
| `ue1` | United States (default) | https://pdf-services-ue1.adobe.io |
| `ew1` | Europe | https://pdf-services-ew1.adobe.io |

To call a region-specific PDF Services API endpoint, swap the hostname to match this shape : `https://pdf-services-{regionCode}.adobe.io`.

### Assets API

### REST API

```javascript
curl --location --request POST 'https://pdf-services-ew1.adobe.io/assets' \
--header 'X-API-Key: {{Placeholder for client_id}}' \
--header 'Authorization: Bearer {{Placeholder for token}}' \
--header 'Content-Type: application/json' \
--data-raw '{
    "mediaType": "{{Placeholder for mediaType}}"
}'
```

### Create Job API

### REST API

```javascript

curl --location --request POST 'https://pdf-services-ew1.adobe.io/operation/{Placeholder for operation name}' \
--header 'x-api-key: {{Placeholder for client_id}}' \
--header 'Content-Type: application/json' \
--header 'Authorization: Bearer {{Placeholder for token}}' \
--data-raw '{
    "assetID": "{{Placeholder for asset ID}}"
}'

```

### Poll Job API

### REST API

```javascript

curl --location --request GET 'https://pdf-services-ew1.adobe.io/operation/{Placeholder for operation name}' \
--header 'x-api-key: {{Placeholder for client_id}}' \
--header 'Content-Type: application/json' \
--header 'Authorization: Bearer {{Placeholder for token}}'
'
```

A worked, step-by-step walkthrough of the Adobe PDF services APIs lives over [here](https://raw.githubusercontent.com/AdobeDocs/pdfservices-api-documentation/main/src/pages/overview/pdf-services-api/howtos/api-usage.md).
