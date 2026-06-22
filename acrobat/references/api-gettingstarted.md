# Document Generation Api — Gettingstarted (part 1)

> Adobe Acrobat reference. Original prose; identifiers preserved verbatim.

Getting Started

The steps you need to set up and fire off a request to the Document Generation API are laid out in this document.

With the Document Generation API you can fold JSON data into Word-based document
templates and turn out high-fidelity PDF and Word documents straight from any
application.

For a deeper look at Document Generation, see the [Overview](api-document-generation-api-3.md)

## Live Demo

Getting Started — Live Demo

How simple it is to spin up tailored documents from Word-based templates and supplied JSON data is shown by the [Document Generation API Demo](https://acrobatservices.adobe.com/dc-docgen-playground/index.html#/).

## How It Works

Getting Started — How It Works (1)

Step-by-step directions for getting up and running with Document Generation are spelled out in this section.

### 1. Author your Word-based document templates

To author a document template you embed the template tags into your Word document, as the illustration below shows:

[Figure: Document template with heading and template tags](https://raw.githubusercontent.com/AdobeDocs/pdfservices-api-documentation/main/src/pages/overview/images/design-document-templates.gif)

** Using MS Word Add-In **

Authoring a Word-based document template fastest is done with the [Adobe Document Generation Word Add-In](https://appsource.microsoft.com/en-us/product/office/WA200002654). Inserting the template tags into a Word document takes far less time and effort thanks to the Add-in.

Learn more about our [Word Add-in](api-document-generation-api-5.md).

** Manually **

A document template can instead be built by hand, placing the template tags into a Word document yourself.
To get a head start, grab one of these prebuilt [sample document templates](https://www.adobe.com/go/dcdocgen_templates).

Learn more about [Template Tags](api-document-generation-api-5.md).

### 2. Prepare your JSON data

Assemble the JSON data you intend to fold into the Word-based template.

```javascript
{
    "Client" : {
      "Name" : "Some Corp Inc",
      "Address" : "Somewhere Street"
    }
}
```

### 3. Generate PDF and Word documents using Document Generation API

With both the Word-based document template and the JSON data in hand, what remains is to call the Document Generation API so it produces the resulting PDF or Word documents.

The Document Generation API can be reached through two routes:

**3.1. REST API**

Documents can be generated through our cloud-based [REST API](https://raw.githubusercontent.com/AdobeDocs/pdfservices-api-documentation/main/src/pages/apis/index.md#tag/Document-Generation).

To get going with the REST API, consult [How To Get Started](https://raw.githubusercontent.com/AdobeDocs/pdfservices-api-documentation/main/src/pages/overview/pdf-services-api/howtos/api-usage.md), which covers generating the credentials you need and calling the APIs.

**3.2. REST API with External Storage**

Direct access to client files held in external storage is now possible with the Adobe Document Generation API. By passing Signed URLs from their storage solution, clients can readily reach and work with their files via the Document Generation API.

For the full details, head to [External Storage for Adobe PDF Services APIs](api-howtos-5.md).

**3.3. PDF Services SDK**

As another option, our offering is available through the [PDF Services SDK](api-gettingstarted-12.md).

For a starting point with the PDF Services SDK, see [Quickstarts](https://raw.githubusercontent.com/AdobeDocs/pdfservices-api-documentation/main/src/pages/overview/document-generation-api/quickstarts/index.md).

Add the hostnames listed below to your allow-list before you use the Adobe PDF Services SDK:

- ims-na1.adobelogin.com (Required for all the clients)

For clients using SDK version 4.x and above:

- Using United States (Default) region for processing documents:

  - dcplatformstorageservice-prod-us-east-1.s3-accelerate.amazonaws.com (Not required, if using external storage for both input and output)
  - pdf-services-ue1.adobe.io
  - pdf-services.adobe.io (Default URI)

- Using Europe region for processing documents:

  - dcplatformstorageservice-prod-eu-west-1.s3.amazonaws.com (Not required, if using external storage for both input and output)
  - pdf-services-ew1.adobe.io

For clients using SDK version 3.x and above:

- Using United States region for processing documents:

  - dcplatformstorageservice-prod-us-east-1.s3-accelerate.amazonaws.com
  - pdf-services-ue1.adobe.io
  - pdf-services.adobe.io (Default URI)

- Using Europe region for processing documents:

  - dcplatformstorageservice-prod-eu-west-1.s3.amazonaws.com
  - pdf-services-ew1.adobe.io

For clients using SDK version up to 2.x:

- cpf-ue1.adobe.io

### Generate PDF or Word document

In the sample that follows, the output document comes out in the **PDF** format. To produce Word documents instead, set **DOCX** as the **OutputFormat** in the same way.

For guidance on working with our APIs, consult the [API usage guide](https://raw.githubusercontent.com/AdobeDocs/pdfservices-api-documentation/main/src/pages/overview/pdf-services-api/howtos/api-usage.md).

### Java

```javascript
// Get the samples from https://www.adobe.com/go/pdftoolsapi_java_samples
// Run the sample:
// mvn -f pom.xml exec:java -Dexec.mainClass=com.adobe.pdfservices.operation.samples.documentmerge.MergeDocumentToPDF

   package com.adobe.pdfservices.operation.samples.documentmerge;

   public class MergeDocumentToPDF {

      // Initialize the logger.
      private static final Logger LOGGER = LoggerFactory.getLogger(MergeDocumentToPDF.class);

      public static void main(String[] args) {

          try (InputStream inputStream = Files.newInputStream(new File("src/main/resources/documentMergeTemplate.docx").toPath())) {
            // Initial setup, create credentials instance
            Credentials credentials = new ServicePrincipalCredentials(
                    System.getenv("PDF_SERVICES_CLIENT_ID"),
                    System.getenv("PDF_SERVICES_CLIENT_SECRET"));

            // Creates a PDF Services instance
            PDFServices pdfServices = new PDFServices(credentials);

            // Setup input data for the document merge process.
            JSONObject jsonDataForMerge = new JSONObject("{\"customerName\": \"Kane Miller\",\"customerVisits\": 100}");

            // Creates an asset(s) from source file(s) and upload
            Asset asset = pdfServices.upload(inputStream, PDFServicesMediaType.DOCX.getMediaType());

            // Create parameters for the job
            DocumentMergeParams documentMergeParams = DocumentMergeParams.documentMergeParamsBuilder()
                    .withJsonDataForMerge(jsonDataForMerge)
                    .withOutputFormat(OutputFormat.PDF)
                    .build();

            // Creates a new job instance
            DocumentMergeJob documentMergeJob = new DocumentMergeJob(asset, documentMergeParams);

            // Submit the job and gets the job result
            String location = pdfServices.submit(documentMergeJob);
            PDFServicesResponse<DocumentMergeResult> pdfServicesResponse = pdfServices.getJobResult(location, DocumentMergeResult.class);

            // Get content from the resulting asset(s)
            Asset resultAsset = pdfServicesResponse.getResult().getAsset();
            StreamAsset streamAsset = pdfServices.getContent(resultAsset);

Getting Started — How It Works (2)
// Creates an output stream and copy stream asset's content to it
            OutputStream outputStream = Files.newOutputStream(new File("output/documentMergeOutput.pdf").toPath());
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
// cd MergeDocumentToPDF/
// dotnet run MergeDocumentToPDF.csproj

namespace MergeDocumentToPDF
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
                using Stream inputStream = File.OpenRead(@"documentMergeTemplate.docx");
                IAsset asset = pdfServices.Upload(inputStream, PDFServicesMediaType.DOCX.GetMIMETypeValue());

                // Setup input data for the document merge process
                JObject jsonDataForMerge = JObject.Parse("{\"customerName\": \"Kane Miller\",\"customerVisits\": 100}");

                // Create parameters for the job
                DocumentMergeParams documentMergeParams = DocumentMergeParams.DocumentMergeParamsBuilder()
                    .WithJsonDataForMerge(jsonDataForMerge)
                    .WithOutputFormat(OutputFormat.PDF)
                    .Build();

                // Creates a new job instance
                DocumentMergeJob documentMergeJob = new DocumentMergeJob(asset, documentMergeParams);

                // Submits the job and gets the job result
                String location = pdfServices.Submit(documentMergeJob);
                PDFServicesResponse<DocumentMergeResult> pdfServicesResponse =
                    pdfServices.GetJobResult<DocumentMergeResult>(location, typeof(DocumentMergeResult));

                // Get content from the resulting asset(s)
                IAsset resultAsset = pdfServicesResponse.Result.Asset;
                StreamAsset streamAsset = pdfServices.GetContent(resultAsset);

                // Creating output streams and copying stream asset's content to it
                String outputFilePath = "/output/documentMergeOutput.pdf";
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
// node src/documentmerge/merge-document-to-pdf.js

const {
  ServicePrincipalCredentials,
  PDFServices,
  MimeType,
  DocumentMergeParams,
  OutputFormat,
  DocumentMergeJob,
  DocumentMergeResult,
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

    // Setup input data for the document merge process
    const jsonDataForMerge = {
      customerName: "Kane Miller",
      customerVisits: 100,
    };

    // Creates an asset(s) from source file(s) and upload
    readStream = fs.createReadStream("./documentMergeTemplate.docx");
    const inputAsset = await pdfServices.upload({
      readStream,
      mimeType: MimeType.DOCX,
    });

    // Create parameters for the job
    const params = new DocumentMergeParams({
      jsonDataForMerge,
      outputFormat: OutputFormat.PDF,
    });

    // Creates a new job instance
    const job = new DocumentMergeJob({ inputAsset, params });

    // Submit the job and get the job result
    const pollingURL = await pdfServices.submit({ job });
    const pdfServicesResponse = await pdfServices.getJobResult({
      pollingURL,
      resultType: DocumentMergeResult,
    });

    // Get content from the resulting asset(s)
    const resultAsset = pdfServicesResponse.result.asset;
    const streamAsset = await pdfServices.getContent({ asset: resultAsset });

    // Creates a write stream and copy stream asset's content to it
    const outputFilePath = "./documentMergeOutput.pdf";
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
```

### Python

```python

## Initialize the logger

Initialize the logger
logging.basicConfig(level=logging.INFO)

class MergeDocumentToPDF:
    def __init__(self):
        try:
            file = open('./salesOrderTemplate.docx', 'rb')
            input_stream = file.read()
            file.close()

## Initial setup, create credentials instance

Initial setup, create credentials instance
credentials = ServicePrincipalCredentials(
                client_id=os.getenv('PDF_SERVICES_CLIENT_ID'),
                client_secret=os.getenv('PDF_SERVICES_CLIENT_SECRET')
            )

## Creates a PDF Services instance

Creates a PDF Services instance
pdf_services = PDFServices(credentials=credentials)

## Creates an asset(s) from source file(s) and upload

Creates an asset(s) from source file(s) and upload
input_asset = pdf_services.upload(input_stream=input_stream,
                                              mime_type=PDFServicesMediaType.DOCX)

## Setup input data for the document merge process

Setup input data for the document merge process
with open('./salesOrder.json', 'r') as file:
                content_string = file.read()
            json_data_for_merge = json.loads(content_string)

## Create parameters for the job

Create parameters for the job
document_merge_params = DocumentMergeParams(json_data_for_merge=json_data_for_merge,
                                                        output_format=OutputFormat.PDF)

## Creates a new job instance

Creates a new job instance
document_merge_job = DocumentMergeJob(input_asset=input_asset,
                                                  document_merge_params=document_merge_params)

## Submit the job and gets the job result

Submit the job and gets the job result
location = pdf_services.submit(document_merge_job)
            pdf_services_response = pdf_services.get_job_result(location, DocumentMergePDFResult)

## Get content from the resulting asset(s)

Get content from the resulting asset(s)
result_asset: CloudAsset = pdf_services_response.get_result().get_asset()
            stream_asset: StreamAsset = pdf_services.get_content(result_asset)
```

## See also

- [Quickstarts](api-pdf-extract-api.md)
