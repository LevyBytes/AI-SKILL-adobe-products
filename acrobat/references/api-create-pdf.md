# Create Pdf (part 1)

> Adobe Acrobat reference. Original prose; identifiers preserved verbatim.

Generate PDFs out of many input types — both static and dynamic HTML; the Microsoft trio of Word, PowerPoint, and Excel; plus text, images, Zip archives, and URLs. Conversions handled include HTML to PDF, DOC to PDF, DOCX to PDF, PPT to PDF, PPTX to PDF, XLS to PDF, XLSX to PDF, TXT to PDF, RTF to PDF, BMP to PDF, JPEG to PDF, GIF to PDF, TIFF to PDF, PNG to PDF

## REST API

For full details, head to our public API Reference:

- [Create PDF from Office formats](https://raw.githubusercontent.com/AdobeDocs/pdfservices-api-documentation/main/src/pages/apis/index.md#tag/Create-PDF)

- [Create PDF from HTML](https://raw.githubusercontent.com/AdobeDocs/pdfservices-api-documentation/main/src/pages/apis/index.md#tag/Html-To-PDF)

## Create a PDF

Reach for the example below when you need to turn Microsoft Office documents — Word, Excel, PowerPoint — and a range of [supported file formats](https://developer.adobe.com/document-services/docs/apis/#tag/Create-PDF) into PDFs. Although a .docx conversion is what gets shown, every format listed here works with the SDK:

- Microsoft Word (DOC, DOCX)
- Microsoft PowerPoint (PPT, PPTX)
- Microsoft Excel (XLS, XLSX)
- Text (TXT, RTF)
- Image (BMP, JPEG, GIF, TIFF, PNG)

When a Word or PowerPoint source carries an embedded TrueType font, that very same embedded TrueType font is preserved in the generated PDF.
See [Benefits of embedding custom fonts](https://support.microsoft.com/en-us/office/benefits-of-embedding-custom-fonts-cb3982aa-ea76-4323-b008-86670f222dbc#OfficeVersion=Windows) for the details.

Two situations cause us to refuse HTML-to-PDF requests that carry urls:

1. A scheme other than HTTPS is used.
2. A non-routable IP address is what the hostname points to — including any case where a redirect ultimately lands on such an address.

For guidance on calling these APIs, consult the [API usage guide](https://raw.githubusercontent.com/AdobeDocs/pdfservices-api-documentation/main/src/pages/overview/pdf-services-api/howtos/api-usage.md).

### Java

```javascript
// Get the samples from https://www.adobe.com/go/pdftoolsapi_java_samples
// Run the sample:
// mvn -f pom.xml exec:java -Dexec.mainClass=com.adobe.pdfservices.operation.samples.createpdf.CreatePDFFromDOCX

public class CreatePDFFromDOCX {

    // Initialize the logger.
    private static final Logger LOGGER = LoggerFactory.getLogger(CreatePDFFromDOCX.class);

    public static void main(String[] args) {

        try (InputStream inputStream = Files.newInputStream(new File("src/main/resources/createPDFInput.docx").toPath())) {
            // Initial setup, create credentials instance
            Credentials credentials = new ServicePrincipalCredentials(
                    System.getenv("PDF_SERVICES_CLIENT_ID"),
                    System.getenv("PDF_SERVICES_CLIENT_SECRET"));

            // Creates a PDF Services instance
            PDFServices pdfServices = new PDFServices(credentials);

            // Creates an asset(s) from source file(s) and upload
            Asset asset = pdfServices.upload(inputStream, PDFServicesMediaType.DOCX.getMediaType());

            // Creates a new job instance
            CreatePDFJob createPDFJob = new CreatePDFJob(asset);

            // Submit the job and gets the job result
            String location = pdfServices.submit(createPDFJob);
            PDFServicesResponse<CreatePDFResult> pdfServicesResponse = pdfServices.getJobResult(location, CreatePDFResult.class);

            // Get content from the resulting asset(s)
            Asset resultAsset = pdfServicesResponse.getResult().getAsset();
            StreamAsset streamAsset = pdfServices.getContent(resultAsset);

            // Creates an output stream and copy stream asset's content to it
            File.createDirectories(Paths.get("output/"));
            OutputStream outputStream = Files.newOutputStream(new File("output/createPDFFromDOCX.pdf").toPath());
            LOGGER.info("Saving asset at output/createPDFFromDOCX.pdf");
            IOUtils.copy(streamAsset.getInputStream(), outputStream);
            outputStream.close();
        } catch (ServiceApiException | IOException | SDKException | ServiceUsageException ex) {
            LOGGER.error("Exception encountered while executing the operation", ex);
        }
    }
}
```

### .NET

```javascript
// Get the samples from https://www.adobe.com/go/pdftoolsapi_net_samples
// Run the sample:
// cd CreatePDFFromDocx/
// dotnet run CreatePDFFromDocx.csproj

namespace CreatePDFFromDocx
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
                using Stream inputStream = File.OpenRead(@"createPdfInput.docx");
                IAsset asset = pdfServices.Upload(inputStream, PDFServicesMediaType.DOCX.GetMIMETypeValue());

                // Creates a new job instance
                CreatePDFJob createPDFJob = new CreatePDFJob(asset);

                // Submits the job and gets the job result
                String location = pdfServices.Submit(createPDFJob);
                PDFServicesResponse<CreatePDFResult> pdfServicesResponse =
                    pdfServices.GetJobResult<CreatePDFResult>(location, typeof(CreatePDFResult));

                // Get content from the resulting asset(s)
                IAsset resultAsset = pdfServicesResponse.Result.Asset;
                StreamAsset streamAsset = pdfServices.GetContent(resultAsset);

                // Creating output streams and copying stream asset's content to it
                String outputFilePath = "/output/createPdfOutput.pdf";
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
// node src/createpdf/create-pdf-from-docx.js

const {
  ServicePrincipalCredentials,
  PDFServices,
  MimeType,
  CreatePDFJob,
  CreatePDFResult,
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
    readStream = fs.createReadStream("./createPDFInput.docx");
    const inputAsset = await pdfServices.upload({
      readStream,
      mimeType: MimeType.DOCX,
    });

    // Creates a new job instance
    const job = new CreatePDFJob({ inputAsset });

    // Submit the job and get the job result
    const pollingURL = await pdfServices.submit({ job });
    const pdfServicesResponse = await pdfServices.getJobResult({
      pollingURL,
      resultType: CreatePDFResult,
    });

    // Get content from the resulting asset(s)
    const resultAsset = pdfServicesResponse.result.asset;
    const streamAsset = await pdfServices.getContent({ asset: resultAsset });

    // Creates an output stream and copy result asset's content to it
    const outputFilePath = "./createPDFFromDOCX.pdf";
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

````python

## Initialize the logger

logging.basicConfig(level=logging.INFO)

class CreatePDFFromDOCX:
    def __init__(self):
        try:
            file = open('./createPDFInput.docx', 'rb')
            input_stream = file.read()
            file.close()

## Creates an asset(s) from source file(s) and upload

input_asset = pdf_services.upload(input_stream=input_stream, mime_type=PDFServicesMediaType.DOCX)

## Creates a new job instance

create_pdf_job = CreatePDFJob(input_asset)

## Submit the job and gets the job result

location = pdf_services.submit(create_pdf_job)
            pdf_services_response = pdf_services.get_job_result(location, CreatePDFResult)

## Creates an output stream and copy stream asset's content to it

```javascript
output_file_path = 'output/CreatePDFFromDOCX.pdf'
            with open(output_file_path, "wb") as file:
                file.write(stream_asset.get_input_stream())

        except (ServiceApiException, ServiceUsageException, SdkException) as e:
            logging.exception(f'Exception encountered while executing operation: {e}')

if __name__ == "__main__":
    CreatePDFFromDOCX()
````

### REST API

```javascript
// Please refer our REST API docs for more information
// https://developer.adobe.com/document-services/docs/apis/#tag/Create-PDF

curl --location --request POST 'https://pdf-services.adobe.io/operation/createpdf' \
--header 'x-api-key: {{Placeholder for client_id}}' \
--header 'Content-Type: application/json' \
--header 'Authorization: Bearer {{Placeholder for token}}' \
--data-raw '{
    "assetID": "urn:aaid:AS:UE1:23c30ee0-2e4d-46d6-87f2-087832fca718"
}'
```

## Creates an output stream and copy stream asset's content to it — Create PDF with DocumentLanguage

Set a target language on the conversion by following the snippet below, which turns Microsoft Office files (Word, Excel and PowerPoint) into PDFs honoring the supported documentLanguage. Here a .docx is converted with the input file's language set to english; these are the file types the SDK accepts:

- Microsoft Word (DOC, DOCX)
- Microsoft PowerPoint (PPT, PPTX)
- Microsoft Excel (XLS, XLSX)
- Text (TXT, RTF)

For the mechanics of calling these APIs, walk through the [API usage guide](./api-usage.md).

### Java

```javascript
// Get the samples from https://www.adobe.com/go/pdftoolsapi_java_samples
// Run the sample:
// mvn -f pom.xml exec:java -Dexec.mainClass=com.adobe.pdfservices.operation.samples.createpdf.CreatePDFFromDOCXWithOptions

public class CreatePDFFromDOCXWithOptions {

      // Initialize the logger.
      private static final Logger LOGGER = LoggerFactory.getLogger(CreatePDFFromDOCXWithOptions.class);

      public static void main(String[] args) {

        try (InputStream inputStream = Files.newInputStream(new File("src/main/resources/createPDFInput.docx").toPath())) {
            // Initial setup, create credentials instance
            Credentials credentials = new ServicePrincipalCredentials(
                    System.getenv("`PDF_SERVICES_CLIENT_ID`"),
                    System.getenv("`PDF_SERVICES_CLIENT_SECRET`"));

            // Creates a PDF Services instance
            PDFServices pdfServices = new PDFServices(credentials);

            // Creates an asset(s) from source file(s) and upload
            Asset asset = pdfServices.upload(inputStream, PDFServicesMediaType.DOCX.getMediaType());

            // Create parameters for the job
            CreatePDFParams createPDFWordParams = CreatePDFParams.wordParamsBuilder().
                    withDocumentLanguage(DocumentLanguage.`EN_US`).
                    build();

            // Creates a new job instance
            CreatePDFJob createPDFJob = new CreatePDFJob(asset)
                    .setParams(createPDFWordParams);

            // Submit the job and gets the job result
            String location = pdfServices.submit(createPDFJob);
            PDFServicesResponse<CreatePDFResult> pdfServicesResponse = pdfServices.getJobResult(location, CreatePDFResult.class);

            // Get content from the resulting asset(s)
            Asset resultAsset = pdfServicesResponse.getResult().getAsset();
            StreamAsset streamAsset = pdfServices.getContent(resultAsset);

            // Creates an output stream and copy stream asset's content to it
            File.createDirectories(Paths.get("output/"));
            OutputStream outputStream = Files.newOutputStream(new File("output/createPDFFromDOCXWithOptionsOutput.pdf").toPath());
            LOGGER.info("Saving asset at output/createPDFFromDOCXWithOptionsOutput.pdf");
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
// cd CreatePDFFromDocxWithOptions/
// dotnet run CreatePDFFromDocxWithOptions.csproj

namespace CreatePDFFromDocxWithOptions
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
                    Environment.GetEnvironmentVariable("`PDF_SERVICES_CLIENT_ID`"),
                    Environment.GetEnvironmentVariable("`PDF_SERVICES_CLIENT_SECRET`"));

                // Creates a PDF Services instance
                PDFServices pdfServices = new PDFServices(credentials);

                // Creates an asset(s) from source file(s) and upload
                using Stream inputStream = File.OpenRead(@"createPdfInput.docx");
                IAsset asset = pdfServices.Upload(inputStream, PDFServicesMediaType.DOCX.GetMIMETypeValue());

                // Create parameters for the job
                CreatePDFParams createPDFParams = CreatePDFParams.WordParamsBuilder()
                    .WithDocumentLanguage(DocumentLanguage.`EN_US`)
                    .Build();

                // Creates a new job instance
                CreatePDFJob createPDFJob = new CreatePDFJob(asset).SetParams(createPDFParams);

                // Submits the job and gets the job result
                String location = pdfServices.Submit(createPDFJob);
                PDFServicesResponse<CreatePDFResult> pdfServicesResponse =
                    pdfServices.GetJobResult<CreatePDFResult>(location, typeof(CreatePDFResult));

                // Get content from the resulting asset(s)
                IAsset resultAsset = pdfServicesResponse.Result.Asset;
                StreamAsset streamAsset = pdfServices.GetContent(resultAsset);

                // Creating output streams and copying stream asset's content to it
                String outputFilePath = "/output/createPDFFromDOCXWithOptionsOutput.pdf";
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
// node src/createpdf/create-pdf-from-docx-with-options.js

const {
    ServicePrincipalCredentials,
    PDFServices,
    MimeType,
    CreatePDFJob,
    CreatePDFParams,
    CreatePDFResult,
    DocumentLanguage,
    SDKError,
    ServiceUsageError,
    ServiceApiError
} = require("@adobe/pdfservices-node-sdk");
const fs = require("fs");

(async () => {
    let readStream;
    try {
        // Initial setup, create credentials instance
        const credentials = new ServicePrincipalCredentials({
            clientId: process.env.`PDF_SERVICES_CLIENT_ID`,
            clientSecret: process.env.`PDF_SERVICES_CLIENT_SECRET`
        });

        // Creates a PDF Services instance
        const pdfServices = new PDFServices({credentials});

        // Creates an asset(s) from source file(s) and upload
        readStream = fs.createReadStream("./createPDFInput.docx");
        const inputAsset = await pdfServices.upload({
            readStream,
            mimeType: MimeType.DOCX
        });

        // Create parameters for the job
        const params = new CreatePDFParams({
            documentLanguage: DocumentLanguage.`EN_US`
        });

        // Creates a new job instance
        const job = new CreatePDFJob({inputAsset, params});

        // Submit the job and get the job result
        const pollingURL = await pdfServices.submit({job});
        const pdfServicesResponse = await pdfServices.getJobResult({
            pollingURL,
            resultType: CreatePDFResult
        });

        // Get content from the resulting asset(s)
        const resultAsset = pdfServicesResponse.result.asset;
        const streamAsset = await pdfServices.getContent({asset: resultAsset});

        // Creates an output stream and copy result asset's content to it
        const outputFilePath = "./createPDFFromDOCXWithOptionsOutput.pdf";
        console.log(`Saving asset at ${outputFilePath}`);
```

```javascript
const outputStream = fs.createWriteStream(outputFilePath);
        streamAsset.readStream.pipe(outputStream);
    } catch (err) {
        if (err instanceof SDKError || err instanceof ServiceUsageError || err instanceof ServiceApiError) {
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

```

## Initialize the logger

```python
logging.basicConfig(level=logging.INFO)

class CreatePDFFromDOCXWithOptions:
    def __init__(self):

        try:
            file = open('./createPDFInput.docx', 'rb')
            input_stream = file.read()
            file.close()
```

## Create parameters for the job

```python
create_pdf_params = CreatePDFFromWordParams(document_language=DocumentLanguage.`EN_US`)
```

## Creates a new job instance

```python
create_pdf_job = CreatePDFJob(input_asset=input_asset, create_pdf_params=create_pdf_params)
```

## Creates an output stream and copy stream asset's content to it

```python
output_file_path = 'output/CreatePDFFromDOCXWithOptions.pdf'
            with open(output_file_path, "wb") as file:
                file.write(stream_asset.get_input_stream())

        except (ServiceApiException, ServiceUsageException, SdkException) as e:
            logging.exception(f'Exception encountered while executing operation: {e}')

if __name__ == "__main__":
    CreatePDFFromDOCXWithOptions()
```

### REST API

```javascript
// Please refer our REST API docs for more information
// https://developer.adobe.com/document-services/docs/apis/#tag/Create-PDF

curl --location --request POST 'https://pdf-services.adobe.io/operation/createpdf' \
--header 'x-api-key: {{Placeholder for client_id}}' \
--header 'Content-Type: application/json' \
--header 'Authorization: Bearer {{Placeholder for token}}' \
--data-raw '{
    "assetID": "urn:aaid:AS:UE1:23c30ee0-2e4d-46d6-87f2-087832fca718",
    "documentLanguage": "en-US"
}'
```
