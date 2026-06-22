# Pdf Watermark Api (part 1)

> Adobe Acrobat reference. Original prose; identifiers preserved verbatim.

On a page, a watermark is typically faint or partly see-through — text, a logo, or a repeating pattern dropped behind or in front of the content to support branding, prove authenticity, and add a measure of security.
The PDF Watermark API runs in the cloud and stamps a watermark onto chosen pages of a PDF by drawing from a separate watermark PDF. Whatever sits on the first page of that watermark file becomes the mark layered onto the target document. When you leave the page range out, every page of the source ends up watermarked.

[Figure: PDF Watermark](https://raw.githubusercontent.com/AdobeDocs/pdfservices-api-documentation/main/src/pages/overview/pdf-services-api/watermark-overview.png)

## Input Documents : Required

The accepted format is PDF (application/pdf), and the input file must be version 1.6 or newer.

### Input Document

The PDF that is going to receive the watermark.

### Watermark Document

A PDF whose opening page supplies the mark for the input file.
In the result, the original content is preserved and the first-page watermark is layered over it.

Note: When the watermark file is a scanned PDF, dropping that mark into the foreground can hide the input PDF's content behind it.
For scanned-PDF watermarks, push them to the background by switching appearOnForeground to false.

## Watermark Parameters

### Page ranges (_pageRanges_)

Use this to pick which pages receive the watermark. Numbering of pages runs from 1 up to N. Omitting a range causes the mark to land on every page of the source document.
Supply the ranges as an array of objects, and that array may hold at most 20 entries. The properties carried by each object are:

- **Start Page** (_start_) : Where the range begins, as a page number. Defaults to 1.
- **End Page** (_end_) : Where the range ends, as a page number. Defaults to the document's final page.

### Appearance (_appearance_)

- **Foreground** (_appearOnForeground_) : Controls whether the mark sits in front of or behind the page content. Left at its default of true, the watermark is drawn in the foreground.
- **Opacity** (_opacity_) : Sets how opaque the mark is, given as a whole-number percentage between 0 and 100. The default setting is 100.

## REST API

Full details live in our public API Reference under [PDF Watermark API](https://raw.githubusercontent.com/AdobeDocs/pdfservices-api-documentation/main/src/pages/apis/index.md#tag/PDF-Watermark).

## Apply Watermark on Input PDF

This example carries out a watermark operation, laying the mark in the foreground across every page of the PDF you provide.

For guidance on calling these APIs, consult the [API usage guide](https://raw.githubusercontent.com/AdobeDocs/pdfservices-api-documentation/main/src/pages/overview/pdf-services-api/howtos/api-usage.md).

### Java

```javascript
// Get the samples from https://github.com/adobe/pdfservices-java-sdk-samples
// Run the sample:
// mvn -f pom.xml exec:java -Dexec.mainClass=com.adobe.pdfservices.operation.samples.pdfwatermark.PDFWatermark

package com.adobe.pdfservices.operation.samples.pdfwatermark;

public class PDFWatermark {

    // Initialize the logger
    private static final Logger LOGGER = LoggerFactory.getLogger(PDFWatermark.class);

    public static void main(String[] args) {

        try (
            InputStream sourceFileInputStream = Files.newInputStream(new File("src/main/resources/pdfWatermarkInput.pdf").toPath());
            InputStream watermarkFileInputStream = Files.newInputStream(new File("src/main/resources/watermark.pdf").toPath())) {

            // Initial setup, create credentials instance
            Credentials credentials = new ServicePrincipalCredentials(System.getenv("PDF_SERVICES_CLIENT_ID"), System.getenv("PDF_SERVICES_CLIENT_SECRET"));

            // Creates a PDF Services instance
            PDFServices pdfServices = new PDFServices(credentials);

            // Creates an asset(s) from source file(s) and upload
            Asset inputDocumentAsset = pdfServices.upload(sourceFileInputStream, PDFServicesMediaType.PDF.getMediaType());
            Asset watermarkDocumentAsset = pdfServices.upload(watermarkFileInputStream, PDFServicesMediaType.PDF.getMediaType());

            // Creates a new job instance
            PDFServices pdfServices = new PDFServices(credentials);

            // Creates a new job instance
            PDFWatermarkJob pdfWatermarkJob = new PDFWatermarkJob(inputDocumentAsset, watermarkDocumentAsset);

            // Submit the job and gets the job result
            String location = pdfServices.submit(pdfWatermarkJob);
            PDFServicesResponse<PDFWatermarkResult> pdfServicesResponse = pdfServices.getJobResult(location, PDFWatermarkResult.class);

            // Get content from the resulting asset(s)
            Asset resultAsset = pdfServicesResponse.getResult().getAsset();
            StreamAsset streamAsset = pdfServices.getContent(resultAsset);

            // Creates an output stream and copy stream asset's content to it
            Files.createDirectories(Paths.get("output/"));
            OutputStream outputStream = Files.newOutputStream(new File("output/pdfWatermarkWithOptionsOutput.pdf").toPath());
            LOGGER.info("Saving asset at output/pdfWatermarkWithOptionsOutput.pdf");
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
// Get the samples from https://github.com/adobe/PDFServices.NET.SDK.Samples
// Run the sample:
// cd PDFWatermark/
// dotnet run PDFWatermark.csproj

namespace PDFWatermark
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
                Stream sourceFileInputStream = File.OpenRead(@"pdfWatermarkInput.pdf");
                IAsset inputDocumentAsset = pdfServices.Upload(sourceFileInputStream, PDFServicesMediaType.PDF.GetMIMETypeValue());

                // Creates a watermark asset from source file(s) and upload
                Stream watermarkFileInputStream = File.OpenRead(@"watermark.pdf");
                IAsset watermarkDocumentAsset = pdfServices.Upload(watermarkFileInputStream, PDFServicesMediaType.PDF.GetMIMETypeValue());

                // Submits the job and gets the job result
                PDFWatermarkJob pdfWatermarkJob = new PDFWatermarkJob(inputDocumentAsset, watermarkDocumentAsset);
                String location = pdfServices.Submit(pdfWatermarkJob);

                // Get content from the resulting asset(s)
                PDFServicesResponse<PDFWatermarkResult> pdfServicesResponse =
                    pdfServices.GetJobResult<PDFWatermarkResult>(location, typeof(PDFWatermarkResult));

                // Creating output streams and copying stream asset's content to it
                IAsset resultAsset = pdfServicesResponse.Result.Asset;
                StreamAsset streamAsset = pdfServices.GetContent(resultAsset);

                // Creating output streams and copying stream asset's content to it
                String outputFilePath = "/output/pdfWatermarkWithOptionsOutput.pdf";
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
// Get the samples from https://github.com/adobe/pdfservices-node-sdk-samples
// Run the sample:
// node src/pdfwatermark/pdf-watermark.js

const {
  ServicePrincipalCredentials,
  PDFServices,
  MimeType,
  PDFWatermarkJob,
  PDFWatermarkResult,
  SDKError,
  ServiceUsageError,
  ServiceApiError,
} = require("@adobe/pdfservices-node-sdk");
const fs = require("fs");

(async () => {
  let sourceFileReadStream;
  let watermarkFileReadStream;
  try {
    // Initial setup, create credentials instance
    const credentials = new ServicePrincipalCredentials({
      clientId: process.env.PDF_SERVICES_CLIENT_ID,
      clientSecret: process.env.PDF_SERVICES_CLIENT_SECRET,
    });

    // Creates a PDF Services instance
    const pdfServices = new PDFServices({ credentials });

    // Creates an asset(s) from source file(s) and upload
    sourceFileReadStream = fs.createReadStream("resources/watermarkPDFInput.pdf");
    watermarkFileReadStream = fs.createReadStream("resources/watermark.pdf");

    const [inputAsset, watermarkAsset] = await pdfServices.uploadAssets({
      streamAssets: [
        {
          readStream: sourceFileReadStream,
          mimeType: MimeType.PDF,
        },
        {
          readStream: waterMarkReadStream,
          mimeType: MimeType.PDF,
        },
      ],
    });

    // Creates a new job instance
    const job = new PDFWatermarkJob({
      inputAsset: inputAsset,
      watermarkAsset: watermarkAsset,
    });

    // Submit the job and get the job result
    const pollingURL = await pdfServices.submit({ job });
    const pdfServicesResponse = await pdfServices.getJobResult({
      pollingURL,
      resultType: PDFWatermarkResult,
    });

    // Get content from the resulting asset(s)
    const resultAsset = pdfServicesResponse.result.asset;
    const streamAsset = await pdfServices.getContent({ asset: resultAsset });

    // Creates a write stream and copy stream asset's content to it
    const outputFilePath = "./pdfWatermarkOutput.pdf";
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
    sourceFileReadStream?.destroy();
    watermarkFileReadStream?.destroy();
  }
})();
```

### Python

```javascript

## Initialize the logger

logging.basicConfig(level=logging.INFO)

class PDFWatermark:
    def __init__(self):
        try:
            pdf_file = open("src/resources/watermarkPDFInput.pdf", 'rb')
            source_file_input_stream = pdf_file.read()
            pdf_file.close()

            pdf_file = open("src/resources/watermark.pdf", 'rb')
            watermark_file_input_stream = pdf_file.read()
            pdf_file.close()

## Initial setup, create credentials instance

credentials = ServicePrincipalCredentials(
                client_id=os.getenv('PDF_SERVICES_CLIENT_ID'),
                client_secret=os.getenv('PDF_SERVICES_CLIENT_SECRET'))

## Creates an asset(s) from source file(s) and upload

input_asset = pdf_services.upload(input_stream=source_file_input_stream, mime_type=PDFServicesMediaType.PDF)
            watermark_asset = pdf_services.upload(input_stream=watermark_file_input_stream, mime_type=PDFServicesMediaType.PDF)

## Creates a new job instance

pdf_watermark_job = PDFWatermarkJob(input_asset=input_asset, watermark_asset=watermark_asset)

## Submit the job and gets the job result

location = pdf_services.submit(pdf_watermark_job)
            pdf_services_response = pdf_services.get_job_result(location, PDFWatermarkResult)

## Get content from the resulting asset(s)

pdf_watermark_result: CloudAsset = pdf_services_response.get_result().get_asset()
            stream_asset: StreamAsset = pdf_services.get_content(pdf_watermark_result)

## Creates an output stream and copy stream asset's content to it

output_file_path = 'output/pdfWatermark.pdf'
            with open(output_file_path, "wb") as file:
                file.write(stream_asset.get_input_stream())

        except (ServiceApiException, ServiceUsageException, SdkException) as e:
            logging.exception(f'Exception encountered while executing operation: {e}')

    if __name__ == "__main__":
        PDFWatermark()
```

### REST API

```javascript
curl --location --request POST 'https://pdf-services.adobe.io/operation/addwatermark' \
--header 'x-api-key: {{Placeholder for client_id}}' \
--header 'Content-Type: application/json' \
--header 'Authorization: Bearer {{Placeholder for token}}' \
--data-raw '{
    "inputDocumentAssetID": "urn:aaid:AS:UE1:54cbf87f-d7f5-4918-8e4b-9f68",
    "watermarkDocumentAssetID": "urn:aaid:AS:UE1:54cbf87f-d7f5-4918-8e4b-9f1878678e68"
}'
```

## Creates an output stream and copy stream asset's content to it — Apply Watermark on specified pages

Foreground watermarking across a selected set of pages in a supplied PDF is what the following sample demonstrates.

For guidance on calling these APIs, consult the [API usage guide](https://raw.githubusercontent.com/AdobeDocs/pdfservices-api-documentation/main/src/pages/overview/pdf-services-api/howtos/api-usage.md).

### Java

```javascript
// Get the samples from https://github.com/adobe/pdfservices-java-sdk-samples
// Run the sample:
// mvn -f pom.xml exec:java -Dexec.mainClass=com.adobe.pdfservices.operation.samples.pdfwatermark.PDFWatermarkWithOptions

package com.adobe.pdfservices.operation.samples.pdfwatermark;

public class PDFWatermarkWithOptions {

    // Initialize the logger
    private static final Logger LOGGER = LoggerFactory.getLogger(PDFWatermarkWithOptions.class);

    public static void main(String[] args) {

        try (
            InputStream sourceFileInputStream = Files.newInputStream(new File("src/main/resources/pdfWatermarkInput.pdf").toPath());
            InputStream watermarkFileInputStream = Files.newInputStream(new File("src/main/resources/watermark.pdf").toPath())) {

            // Initial setup, create credentials instance
            Credentials credentials = new ServicePrincipalCredentials(System.getenv("PDF_SERVICES_CLIENT_ID"), System.getenv("PDF_SERVICES_CLIENT_SECRET"));

            // Creates a PDF Services instance
            PDFServices pdfServices = new PDFServices(credentials);

            // Creates an asset(s) from source file(s) and upload
            Asset inputDocumentAsset = pdfServices.upload(sourceFileInputStream, PDFServicesMediaType.PDF.getMediaType());
            Asset watermarkDocumentAsset = pdfServices.upload(watermarkFileInputStream, PDFServicesMediaType.PDF.getMediaType());

            // Creates a new job instance
            PDFServices pdfServices = new PDFServices(credentials);

            // Watermark pages of the document (as specified by PageRanges).
            PageRanges pageRangeForPDFWatermark = new PageRanges();

            pageRangeForPDFWatermark.addRange(2, 5);
            pageRangeForPDFWatermark.addRange(8, 10);

            // Creates PDF Watermark appearance option
            WatermarkAppearance watermarkAppearance = new WatermarkAppearance();
            watermarkAppearance.setOpacity(50);

            // Create parameters for the job
            PDFWatermarkParams pdfWatermarkParams = PDFWatermarkParams.pdfWatermarkParamsBuilder()
                .withPageRanges(pageRangeForPDFWatermark)
                .withWatermarkAppearance(watermarkAppearance)
                .build();

            // Creates a new job instance
            PDFWatermarkJob pdfWatermarkJob = new PDFWatermarkJob(inputDocumentAsset, watermarkDocumentAsset)
                .setParams(pdfWatermarkParams);

            // Submit the job and gets the job result
            String location = pdfServices.submit(pdfWatermarkJob);
            PDFServicesResponse<PDFWatermarkResult> pdfServicesResponse = pdfServices.getJobResult(location, PDFWatermarkResult.class);

            // Get content from the resulting asset(s)
            Asset resultAsset = pdfServicesResponse.getResult().getAsset();
            StreamAsset streamAsset = pdfServices.getContent(resultAsset);

            // Creates an output stream and copy stream asset's content to it
            Files.createDirectories(Paths.get("output/"));
            OutputStream outputStream = Files.newOutputStream(new File("output/pdfWatermarkWithOptionsOutput.pdf").toPath());
            LOGGER.info("Saving asset at output/pdfWatermarkWithOptionsOutput.pdf");
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
// Get the samples from https://github.com/adobe/PDFServices.NET.SDK.Samples
// Run the sample:
// cd PDFWatermarkWithOptions/
// dotnet run PDFWatermarkWithOptions.csproj

namespace PDFWatermarkWithOptions
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
                Stream sourceFileInputStream = File.OpenRead(@"pdfWatermarkInput.pdf");
                IAsset inputDocumentAsset = pdfServices.Upload(sourceFileInputStream, PDFServicesMediaType.PDF.GetMIMETypeValue());

                // Creates a watermark asset from source file(s) and upload
                Stream watermarkFileInputStream = File.OpenRead(@"watermark.pdf");
                IAsset watermarkDocumentAsset = pdfServices.Upload(watermarkFileInputStream, PDFServicesMediaType.PDF.GetMIMETypeValue());

                // Watermark pages of the document
                PageRanges pageRangeForPDFWatermark = new PageRanges();

                pageRangeForPDFWatermark.AddRange(2, 5);
                pageRangeForPDFWatermark.AddRange(8, 10);

                // Creates PDF Watermark appearance option
                WatermarkAppearance watermarkAppearance = new WatermarkAppearance();
                watermarkAppearance.SetOpacity(50);

                // Create parameters for the job
                PDFWatermarkParams pdfWatermarkParams = PDFWatermarkParams.PDFWatermarkParamsBuilder()
                                                            .WithPageRanges(pageRangesForPDFWatermark)
                                                            .WithWatermarkAppearance(watermarkAppearance).Build();

                // Submits the job and gets the job result
                PDFWatermarkJob pdfWatermarkJob = new PDFWatermarkJob(inputDocumentAsset, watermarkDocumentAsset).SetParams(pdfWatermarkParams);
                String location = pdfServices.Submit(pdfWatermarkJob);

                // Get content from the resulting asset(s)
                PDFServicesResponse<PDFWatermarkResult> pdfServicesResponse =
                    pdfServices.GetJobResult<PDFWatermarkResult>(location, typeof(PDFWatermarkResult));

                // Creating output streams and copying stream asset's content to it
                IAsset resultAsset = pdfServicesResponse.Result.Asset;
                StreamAsset streamAsset = pdfServices.GetContent(resultAsset);

                // Creating output streams and copying stream asset's content to it
                String outputFilePath = "/output/pdfWatermarkWithOptionsOutput.pdf";
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
// Get the samples from https://github.com/adobe/pdfservices-node-sdk-samples
// Run the sample:
// node src/pdfwatermark/pdf-watermark-with-options.js

const {
    ServicePrincipalCredentials,
    PDFServices,
    MimeType,
    PDFWatermarkJob,
    PDFWatermarkResult,
    SDKError,
    ServiceUsageError,
    ServiceApiError,
} = require("@adobe/pdfservices-node-sdk");
const fs = require("fs");

(async () => {
    let sourceFileReadStream;
    let watermarkFileReadStream;
    try {
        // Initial setup, create credentials instance
        const credentials = new ServicePrincipalCredentials({
            clientId: process.env.PDF_SERVICES_CLIENT_ID,
            clientSecret: process.env.PDF_SERVICES_CLIENT_SECRET
        });

        // Creates a PDF Services instance
        const pdfServices = new PDFServices({credentials});

        // Creates an asset(s) from source file(s) and upload
        sourceFileReadStream = fs.createReadStream("resources/watermarkPDFInput.pdf");
        watermarkFileReadStream = fs.createReadStream("resources/watermark.pdf");

        const [inputAsset, watermarkAsset] = await pdfServices.uploadAssets({
            streamAssets: [{
                readStream: sourceFileReadStream,
                mimeType: MimeType.PDF
            }, {
                readStream: waterMarkReadStream,
                mimeType: MimeType.PDF
            }]
        });

        const pageRangesForWatermark = new PageRanges();

        pageRangesForWatermark.addRange(2, 5);
        pageRangesForWatermark.addRange(8, 10);

        const watermarkAppearance = new WatermarkAppearance({
            appearOnForeground: true,
            opacity: 50,
        });
```
