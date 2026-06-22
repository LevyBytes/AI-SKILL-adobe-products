# Remove Protection, Reorder Pages

> Adobe Acrobat reference. Original prose; identifiers preserved verbatim.

## Overview

Covers: Remove Protection; Reorder Pages.

## Remove Protection

Strip password-based security off a PDF. Doing so requires that the file's owner password be supplied to the operation; without it, the protection cannot be lifted.

### REST API

The public API Reference covers this under [Remove Protection](https://raw.githubusercontent.com/AdobeDocs/pdfservices-api-documentation/main/src/pages/apis/index.md#tag/Remove-Protection).

### Remove security from PDFs

The snippet below shows how security is stripped from a PDF.

For background on calling these services, consult the [API usage guide](https://raw.githubusercontent.com/AdobeDocs/pdfservices-api-documentation/main/src/pages/overview/pdf-services-api/howtos/api-usage.md).

### Java

```javascript
// Get the samples from https://www.adobe.com/go/pdftoolsapi_java_samples
// Run the sample:
// mvn -f pom.xml exec:java -Dexec.mainClass=com.adobe.pdfservices.operation.samples.removeprotection.RemoveProtection

  public class RemoveProtection {

    // Initialize the logger.
    private static final Logger LOGGER = LoggerFactory.getLogger(RemoveProtection.class);

    public static void main(String[] args) {
        try (InputStream inputStream = Files.newInputStream(new File("src/main/resources/removeProtectionInput.pdf").toPath())) {
            // Initial setup, create credentials instance
            Credentials credentials = new ServicePrincipalCredentials(
                    System.getenv("PDF_SERVICES_CLIENT_ID"),
                    System.getenv("PDF_SERVICES_CLIENT_SECRET"));

            // Creates a PDF Services instance
            PDFServices pdfServices = new PDFServices(credentials);

            // Creates an asset(s) from source file(s) and upload
            Asset asset = pdfServices.upload(inputStream, PDFServicesMediaType.PDF.getMediaType());

            // Create parameters for the job
            RemoveProtectionParams removeProtectionParams = new RemoveProtectionParams("password");

            // Creates a new job instance
            RemoveProtectionJob removeProtectionJob = new RemoveProtectionJob(asset, removeProtectionParams);

            // Submit the job and gets the job result
            String location = pdfServices.submit(removeProtectionJob);
            PDFServicesResponse<RemoveProtectionResult> pdfServicesResponse = pdfServices.getJobResult(location, RemoveProtectionResult.class);

            // Get content from the resulting asset(s)
            Asset resultAsset = pdfServicesResponse.getResult().getAsset();
            StreamAsset streamAsset = pdfServices.getContent(resultAsset);

            // Creates an output stream and copy stream asset's content to it
            Files.createDirectories(Paths.get("output/"));
            OutputStream outputStream = Files.newOutputStream(new File("output/removeProtectionOutput.pdf").toPath());
            LOGGER.info("Saving asset at output/removeProtectionOutput.pdf");
            IOUtils.copy(streamAsset.getInputStream(), outputStream);
            outputStream.close();
        } catch (IOException | ServiceApiException | SDKException | ServiceUsageException e) {
            LOGGER.error("Exception encountered while executing operation", e);
        }
    }
  }
```

### .NET

```javascript
// Get the samples from https://www.adobe.com/go/pdftoolsapi_net_samples
// Run the sample:
// cd RemoveProtection/
// dotnet run RemoveProtection.csproj

namespace RemoveProtection
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

                // Creates an asset from source file and upload
                using Stream inputStream = File.OpenRead(@"removeProtectionInput.pdf");
                IAsset asset = pdfServices.Upload(inputStream, PDFServicesMediaType.PDF.GetMIMETypeValue());

                // Create parameters for the job
                RemoveProtectionParams removeProtectionParams = new RemoveProtectionParams("password");

                // Creates a new job instance
                RemoveProtectionJob removeProtectionJob = new RemoveProtectionJob(asset, removeProtectionParams);

                // Submits the job and gets the job result
                String location = pdfServices.Submit(removeProtectionJob);
                PDFServicesResponse<RemoveProtectionResult> pdfServicesResponse =
                    pdfServices.GetJobResult<RemoveProtectionResult>(location, typeof(RemoveProtectionResult));

                // Get content from the resulting asset(s)
                IAsset resultAsset = pdfServicesResponse.Result.Asset;
                StreamAsset streamAsset = pdfServices.GetContent(resultAsset);

                // Creating output streams and copying stream asset's content to it
                String outputFilePath = "/output/removeProtectionOutput.pdf";
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

### Node JS

```javascript
// Get the samples from http://www.adobe.com/go/pdftoolsapi_node_sample
// Run the sample:
// node src/removeprotection/remove-protection.js

const {
  ServicePrincipalCredentials,
  PDFServices,
  MimeType,
  RemoveProtectionParams,
  RemoveProtectionJob,
  RemoveProtectionResult,
  SDKError,
  ServiceUsageError,
  ServiceApiError,
} = require("@adobe/pdfservices-node-sdk");
const fs = require("fs");

(async () => {
  let readStream;
  try {
    // Initial setup, create credentials instance.
    const credentials = new ServicePrincipalCredentials({
      clientId: process.env.PDF_SERVICES_CLIENT_ID,
      clientSecret: process.env.PDF_SERVICES_CLIENT_SECRET,
    });

    // Creates a PDF Services instance
    const pdfServices = new PDFServices({ credentials });

    // Creates an asset(s) from source file(s) and upload
    readStream = fs.createReadStream("./removeProtectionInput.pdf");
    const inputAsset = await pdfServices.upload({
      readStream,
      mimeType: MimeType.PDF,
    });

    // Create parameters for the job
    const params = new RemoveProtectionParams({
      password: "password",
    });

    // Creates a new job instance
    const job = new RemoveProtectionJob({ inputAsset, params });

    // Submit the job and get the job result
    const pollingURL = await pdfServices.submit({ job });
    const pdfServicesResponse = await pdfServices.getJobResult({
      pollingURL,
      resultType: RemoveProtectionResult,
    });

    // Get content from the resulting asset(s)
    const resultAsset = pdfServicesResponse.result.asset;
    const streamAsset = await pdfServices.getContent({ asset: resultAsset });

    // Creates an output stream and copy stream asset's content to it
    const outputFilePath = "./removeProtectionOutput.pdf";
    console.log(`Saving asset at ${outputFilePath}`);

    const outputStream = fs.createWriteStream(outputFilePath);
    streamAsset.readStream.pipe(outputStream);
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

class RemoveProtection:
    def __init__(self):
        try:
            file = open('removeProtectionInput.pdf', 'rb')
            input_stream = file.read()
            file.close()

### Create parameters for the job

remove_protection_params = RemoveProtectionParams(password="password")

### Creates a new job instance

remove_protection_job = RemoveProtectionJob(input_asset=input_asset,
                                                        remove_protection_params=remove_protection_params)

### Submit the job and gets the job result

location = pdf_services.submit(remove_protection_job)
            pdf_services_response = pdf_services.get_job_result(location, RemoveProtectionResult)

### Creates an output stream and copy stream asset's content to it

output_file_path = 'removeProtectionOutput.pdf'
            with open(output_file_path, "wb") as file:
                file.write(stream_asset.get_input_stream())

        except (ServiceApiException, ServiceUsageException, SdkException) as e:
            logging.exception(f'Exception encountered while executing operation: {e}')

if __name__ == "__main__":
    RemoveProtection()
```

### REST API

```javascript
// Please refer our REST API docs for more information
// https://developer.adobe.com/document-services/docs/apis/#tag/Remove-Protection

curl --location --request POST 'https://pdf-services.adobe.io/operation/removeprotection' \
--header 'x-api-key: {{Placeholder for client_id}}' \
--header 'Content-Type: application/json' \
--header 'Authorization: Bearer {{Placeholder for token}}' \
--data-raw '{
    "password": "mypassword",
    "assetID": "urn:aaid:AS:UE1:23c30ee0-2e4d-46d6-87f2-087832fca718"
}'
```

## Reorder Pages

Rearrange a PDF's pages into a new sequence.

### REST API

Look under [Reorder Pages](https://raw.githubusercontent.com/AdobeDocs/pdfservices-api-documentation/main/src/pages/apis/index.md#tag/Combine-PDF) in the public API Reference.

### Reorder Pages in PDF

Reordering relocates one or more pages within a PDF, shifting them from their current spot to a new position.

For background on calling these services, consult the [API usage guide](https://raw.githubusercontent.com/AdobeDocs/pdfservices-api-documentation/main/src/pages/overview/pdf-services-api/howtos/api-usage.md).

### Java

```javascript
// Get the samples from https://www.adobe.com/go/pdftoolsapi_java_samples
// Run the sample:
// mvn -f pom.xml exec:java -Dexec.mainClass=com.adobe.pdfservices.operation.samples.reorderpages.ReorderPDFPages

 public class ReorderPDFPages {

   // Initialize the logger.
   private static final Logger LOGGER = LoggerFactory.getLogger(ReorderPDFPages.class);

   public static void main(String[] args) {
       try (InputStream inputStream = Files.newInputStream(new File("src/main/resources/reorderPagesInput.pdf").toPath())) {
            // Initial setup, create credentials instance
            Credentials credentials = new ServicePrincipalCredentials(
                    System.getenv("PDF_SERVICES_CLIENT_ID"),
                    System.getenv("PDF_SERVICES_CLIENT_SECRET"));

            // Creates a PDF Services instance
            PDFServices pdfServices = new PDFServices(credentials);

            // Creates an asset(s) from source file(s) and upload
            Asset asset = pdfServices.upload(inputStream, PDFServicesMediaType.PDF.getMediaType());

            PageRanges pagesToReorder = getPageRangeForReorder();

            // Create parameters for the job
            ReorderPagesParams reorderPagesParams = ReorderPagesParams
                    .reorderPagesParamsBuilder(asset, pagesToReorder) // Add the asset as input to the params, along with its page order
                    .build();

            // Creates a new job instance
            ReorderPagesPDFJob reorderPagesPDFJob = new ReorderPagesPDFJob(reorderPagesParams);

            // Submit the job and gets the job result
            String location = pdfServices.submit(reorderPagesPDFJob);
            PDFServicesResponse<ReorderPagesResult> pdfServicesResponse = pdfServices.getJobResult(location, ReorderPagesResult.class);

            // Get content from the resulting asset(s)
            Asset resultAsset = pdfServicesResponse.getResult().getAsset();
            StreamAsset streamAsset = pdfServices.getContent(resultAsset);

            // Creates an output stream and copy stream asset's content to it
            Files.createDirectories(Paths.get("output/"));
            OutputStream outputStream = Files.newOutputStream(new File("output/reorderPagesOutput.pdf").toPath());
            LOGGER.info("Saving asset at output/reorderPagesOutput.pdf");
            IOUtils.copy(streamAsset.getInputStream(), outputStream);
            outputStream.close();
       } catch (IOException | ServiceApiException | SDKException | ServiceUsageException e) {
           LOGGER.error("Exception encountered while executing operation", e);
       }
   }

   private static PageRanges getPageRangeForReorder() {
       // Specify order of the pages for an output document
        PageRanges pageRanges = new PageRanges();
        // Add pages 3 to 4
        pageRanges.addRange(3, 4);

        // Add page 1
        pageRanges.addSinglePage(1);

        return pageRanges;
   }
 }
```

### .NET

```javascript
// Get the samples from https://www.adobe.com/go/pdftoolsapi_net_samples
// Run the sample:
// cd ReorderPages/
// dotnet run ReorderPDFPages.csproj

namespace ReorderPDFPages
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
                using Stream inputStream = File.OpenRead(@"reorderPagesInput.pdf");
                IAsset asset = pdfServices.Upload(inputStream, PDFServicesMediaType.PDF.GetMIMETypeValue());

                PageRanges pageRanges = GetPageRangeForReorder();

                // Create parameters for the job
                ReorderPagesParams reorderPagesParams = ReorderPagesParams.ReorderPagesParamsBuilder(asset, pageRanges)
                    .Build();

                // Creates a new job instance
                ReorderPagesPDFJob reorderPagesPDFJob = new ReorderPagesPDFJob(reorderPagesParams);

                // Submits the job and gets the job result
                String location = pdfServices.Submit(reorderPagesPDFJob);
                PDFServicesResponse<ReorderPagesResult> pdfServicesResponse =
                    pdfServices.GetJobResult<ReorderPagesResult>(location, typeof(ReorderPagesResult));

                // Get content from the resulting asset(s)
                IAsset resultAsset = pdfServicesResponse.Result.Asset;
                StreamAsset streamAsset = pdfServices.GetContent(resultAsset);

                // Creating output streams and copying stream asset's content to it
                String outputFilePath = "/output/reorderPagesOutput.pdf";
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

        private static PageRanges GetPageRangeForReorder()
        {
            // Specify order of the pages for an output document.
            PageRanges pageRanges = new PageRanges();
            // Add pages 3 to 4.
            pageRanges.AddRange(3, 4);

            // Add page 1.
            pageRanges.AddSinglePage(1);

            return pageRanges;
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
// node src/reorderpages/reorder-pdf-pages.js

const {
  ServicePrincipalCredentials,
  PDFServices,
  MimeType,
  PageRanges,
  ReorderPagesParams,
  ReorderPagesJob,
  ReorderPagesResult,
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
    readStream = fs.createReadStream("./reorderPagesInput.pdf");
    const inputAsset = await pdfServices.upload({
      readStream,
      mimeType: MimeType.PDF,
    });

    // Create parameters for the job
    // Add the asset as input to the params, along with its page order
    const params = new ReorderPagesParams({
      asset: inputAsset,
      pageRanges: getPageRangeForReorder(),
    });

    // Creates a new job instance
    const job = new ReorderPagesJob({ params });

    // Submit the job and get the job result
    const pollingURL = await pdfServices.submit({ job });
    const pdfServicesResponse = await pdfServices.getJobResult({
      pollingURL,
      resultType: ReorderPagesResult,
    });

    // Get content from the resulting asset(s)
    const resultAsset = pdfServicesResponse.result.asset;
    const streamAsset = await pdfServices.getContent({ asset: resultAsset });

    // Creates an output stream and copy result asset's content to it
    const outputFilePath = "./reorderPagesOutput.pdf";
    console.log(`Saving asset at ${outputFilePath}`);

    const outputStream = fs.createWriteStream(outputFilePath);
    streamAsset.readStream.pipe(outputStream);
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

function getPageRangeForReorder() {
  // Specify order of the pages for an output document
  const pageRanges = new PageRanges();
  // Add pages 3 to 4
  pageRanges.addRange(3, 4);
  // Add page 1
  pageRanges.addSinglePage(1);
  return pageRanges;
}
```

### Python

```python

### Initialize the logger

logging.basicConfig(level=logging.INFO)

class ReorderPDFPages:
    def __init__(self):
        try:
            file = open('reorderPagesInput.pdf', 'rb')
            input_stream = file.read()
            file.close()

### Creates an asset(s) from source file(s) and upload

input_asset = pdf_services.upload(input_stream=input_stream, mime_type=PDFServicesMediaType.PDF)

            pages_to_reorder = self.get_page_range_for_reorder()

### Create parameters for the job

reorder_pages_params = ReorderPagesParams(asset=input_asset, page_ranges=pages_to_reorder)

### Creates a new job instance

reorder_pages_job = ReorderPagesJob(reorder_pages_params=reorder_pages_params)

### Submit the job and gets the job result

location = pdf_services.submit(reorder_pages_job)
            pdf_services_response = pdf_services.get_job_result(location, ReorderPagesResult)

### Creates an output stream and copy stream asset's content to it

output_file_path = "reorderPagesOutput.pdf"
            with open(output_file_path, "wb") as file:
                file.write(stream_asset.get_input_stream())

        except (ServiceApiException, ServiceUsageException, SdkException) as e:
            logging.exception(f'Exception encountered while executing operation: {e}')

    @staticmethod
    def get_page_range_for_reorder() -> PageRanges:

### Specify order of the pages for an output document

page_ranges = PageRanges()

### Add page 1

page_ranges.add_single_page(1)
        return page_ranges

if __name__ == "__main__":
    ReorderPDFPages()

```

### REST API

```javascript
// Please refer our REST API docs for more information
// https://developer.adobe.com/document-services/docs/apis/#tag/Combine-PDF

curl --location --request POST 'https://pdf-services.adobe.io/operation/combinepdf' \
--header 'x-api-key: {{Placeholder for client_id}}' \
--header 'Content-Type: application/json' \
--header 'Authorization: Bearer {{Placeholder for token}}' \
--data-raw '{
    "assets": [
        {
            "assetID": "urn:aaid:AS:UE1:23c30ee0-2e4d-46d6-87f2-087832fca718",
            "pageRanges": [
                {
                    "start": 3,
                    "end": 3
                },
                {
                    "start": 1,
                    "end": 1
                },
                {
                    "start": 4,
                    "end": 4
                }
            ]
        }
    ]
}'
```
