# Create Pdf (part 3)

> Adobe Acrobat reference. Original prose; identifiers preserved verbatim.

## Define the page layout, in this case an 20 x 25 inch page (effectively portrait orientation) — Create a PDF File From HTML specified via URL

Starting from an HTML document referenced by a URL, the following sample produces a PDF.

For guidance on calling these APIs, consult the linked [API usage guide](https://raw.githubusercontent.com/AdobeDocs/pdfservices-api-documentation/main/src/pages/overview/pdf-services-api/howtos/api-usage.md).

### Java

```javascript
// Get the samples from https://www.adobe.com/go/pdftoolsapi_java_samples
// Run the sample:
// mvn -f pom.xml exec:java -Dexec.mainClass=com.adobe.pdfservices.operation.samples.htmltopdf.HTMLToPDFFromURL

  public class HTMLToPDFFromURL {

    // Initialize the logger.
    private static final Logger LOGGER = LoggerFactory.getLogger(HTMLToPDFFromURL.class);

    public static void main(String[] args) {

      try {
        // Initial setup, create credentials instance
        Credentials credentials = new ServicePrincipalCredentials(
                System.getenv("PDF_SERVICES_CLIENT_ID"),
                System.getenv("PDF_SERVICES_CLIENT_SECRET"));

        // Creates a PDF Services instance
        PDFServices pdfServices = new PDFServices(credentials);

        String htmlURL = "<HTML URL>";

        // Create parameters for the job
        HTMLToPDFParams htmlToPDFParams = getHTMLToPDFParams();

        // Creates a new job instance
        HTMLToPDFJob htmLtoPDFJob = new HTMLToPDFJob(htmlURL)
                .setParams(htmlToPDFParams);

        // Submit the job and gets the job result
        String location = pdfServices.submit(htmLtoPDFJob);
        PDFServicesResponse<HTMLToPDFResult> pdfServicesResponse = pdfServices.getJobResult(location, HTMLToPDFResult.class);

        // Get content from the resulting asset(s)
        Asset resultAsset = pdfServicesResponse.getResult().getAsset();
        StreamAsset streamAsset = pdfServices.getContent(resultAsset);

        // Creates an output stream and copy stream asset's content to it
        File.createDirectories(Paths.get("output/"));
        OutputStream outputStream = Files.newOutputStream(new File("output/htmlToPDFFromURLOutput.pdf").toPath());
        LOGGER.info("Saving asset at output/htmlToPDFFromURLOutput.pdf");
        IOUtils.copy(streamAsset.getInputStream(), outputStream);
      } catch (ServiceApiException | IOException | SDKException | ServiceUsageException ex) {
        LOGGER.error("Exception encountered while executing operation", ex);
      }
    }

    private static HTMLToPDFParams getHTMLToPDFParams() {
      // Define the page layout, in this case an 8 x 11.5 inch page (effectively portrait orientation)
      PageLayout pageLayout = new PageLayout();
      pageLayout.setPageSize(20, 25);

      return new HTMLToPDFParams.Builder()
              .includeHeaderFooter(true).withPageLayout(pageLayout)
              .build();
    }
}
```

### .NET

```javascript
// Get the samples from https://www.adobe.com/go/pdftoolsapi_net_samples
// Run the sample:
// cd HTMLToPDFFromURL/
// dotnet run HTMLToPDFFromURL.csproj

namespace HTMLToPDFFromURL
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

                String htmlURL = "https://www.adobe.io";

                // Create parameters for the job
                HTMLToPDFParams htmlToPDFParams = GetHTMLToPDFParams();

                // Creates a new job instance
                HTMLToPDFJob htmlToPDFJob = new HTMLToPDFJob(htmlURL).SetParams(htmlToPDFParams);

                // Submits the job and gets the job result
                String location = pdfServices.Submit(htmlToPDFJob);
                PDFServicesResponse<HTMLToPDFResult> pdfServicesResponse =
                    pdfServices.GetJobResult<HTMLToPDFResult>(location, typeof(HTMLToPDFResult));

                // Get content from the resulting asset(s)
                IAsset resultAsset = pdfServicesResponse.Result.Asset;
                StreamAsset streamAsset = pdfServices.GetContent(resultAsset);

                // Creating output streams and copying stream asset's content to it
                String outputFilePath = "/output/createPdfFromURLOutput.pdf";
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

        private static HTMLToPDFParams GetHTMLToPDFParams()
        {
            // Define the page layout, in this case an 20 x 25 inch page (effectively portrait orientation).
            PageLayout pageLayout = new PageLayout();
            pageLayout.SetPageSize(20, 25);

            // Set the desired HTML-to-PDF conversion options.
            HTMLToPDFParams htmlToPDFParams = HTMLToPDFParams.HTMLToPDFParamsBuilder()
                .IncludeHeaderFooter(true)
                .WithPageLayout(pageLayout)
                .Build();
            return htmlToPDFParams;
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
// node src/htmltopdf/html-to-pdf-from-url.js

const {
  ServicePrincipalCredentials,
  PDFServices,
  PageLayout,
  HTMLToPDFParams,
  HTMLToPDFResult,
  HTMLToPDFJob,
  SDKError,
  ServiceUsageError,
  ServiceApiError,
} = require("@adobe/pdfservices-node-sdk");
const fs = require("fs");

(async () => {
  try {
    // Initial setup, create credentials instance
    const credentials = new ServicePrincipalCredentials({
      clientId: process.env.PDF_SERVICES_CLIENT_ID,
      clientSecret: process.env.PDF_SERVICES_CLIENT_SECRET,
    });

    // Creates a PDF Services instance
    const pdfServices = new PDFServices({ credentials });

    const inputURL = "<HTML_URL>";

    // Create parameters for the job
    const params = getHTMLToPDFParams();

    // Creates a new job instance
    const job = new HTMLToPDFJob({ inputURL, params });

    // Submit the job and get the job result
    const pollingURL = await pdfServices.submit({ job });
    const pdfServicesResponse = await pdfServices.getJobResult({
      pollingURL,
      resultType: HTMLToPDFResult,
    });

    // Get content from the resulting asset(s)
    const resultAsset = pdfServicesResponse.result.asset;
    const streamAsset = await pdfServices.getContent({ asset: resultAsset });

    // Creates an output stream and copy result asset's content to it
    const outputFilePath = "./createPDFFromHTMLURL.pdf";
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
  }
})();

function getHTMLToPDFParams() {
  // Define the page layout, in this case an 8 x 11.5 inch page (effectively portrait orientation)
  const pageLayout = new PageLayout({
    pageHeight: 11.5,
    pageWidth: 8,
  });

  return new HTMLToPDFParams({
    includeHeaderFooter: true,
    pageLayout,
  });
}
```

### Python

```python

## Initialize the logger

logging.basicConfig(level=logging.INFO)

class HTMLtoPDFFromURL:
    def __init__(self):
        try:

## Creates a PDF Services instance

pdf_services = PDFServices(credentials=credentials)

            html_url = "<HTML URL>"

## Creates a new job instance

html_to_pdf_job = HTMLtoPDFJob(input_url=html_url, html_to_pdf_params=html_to_pdf_params)

## Creates an output stream and copy stream asset's content to it

output_file_path = 'output/HTMLToPDFFromURL.pdf'
            with open(output_file_path, "wb") as file:
                file.write(stream_asset.get_input_stream())

        except (ServiceApiException, ServiceUsageException, SdkException) as e:
            logging.exception(f'Exception encountered while executing operation: {e}')

    @staticmethod
    def get_html_to_pdf_params() -> HTMLtoPDFParams:

## Define the page layout

page_layout = PageLayout(page_height=25, page_width=20)
        return HTMLtoPDFParams(page_layout=page_layout, include_header_footer=True)

if __name__ == "__main__":
    HTMLtoPDFFromURL()

```

### REST API

```javascript
// Please refer our REST API docs for more information
// https://developer.adobe.com/document-services/docs/apis/#tag/Html-To-PDF

curl --location --request POST 'https://pdf-services.adobe.io/operation/htmltopdf' \
--header 'x-api-key: {{Placeholder for client_id}}' \
--header 'Content-Type: application/json' \
--header 'Authorization: Bearer {{Placeholder for token}}' \
--data-raw '{
    "inputUrl": "https://developer.adobe.com/document-services/homepage",
    "json": "{}",
    "includeHeaderFooter": true,
    "pageLayout": {
        "pageWidth": 11,
        "pageHeight": 8.5
    }
    "waitTimeToLoad": 100,
}'
```

## Define the page layout — Create a PDF from dynamic HTML

For workflows driven by changing data, `DynamicHTMLToPDF` builds PDFs out of dynamic HTML. Enterprises frequently hand their end users an HTML template containing form fields; this API captures whatever unique values those users type and then persists the result as a PDF. The gathered entries live in a JSON file, and the originating HTML must reference `<script src='./json.js' type='text/javascript'></script>`. See the API docs for how this is used.

In practice, the `DynamicHTMLToPDF` sample takes a zip bundle — holding the input HTML plus its supporting resources together with the input data — and turns it into a PDF. JavaScript inside the HTML consumes that input data to reshape the HTML DOM, which in effect rewrites the originating HTML file. Through this approach you can feed values into the template HTML on the fly before the conversion to PDF happens.

For guidance on calling these APIs, consult the linked [API usage guide](https://raw.githubusercontent.com/AdobeDocs/pdfservices-api-documentation/main/src/pages/overview/pdf-services-api/howtos/api-usage.md).

### Java

```javascript
// Get the samples from https://www.adobe.com/go/pdftoolsapi_java_samples
// Run the sample:
// mvn -f pom.xml exec:java -Dexec.mainClass=com.adobe.pdfservices.operation.samples.htmltopdf.DynamicHTMLToPDF
 public class DynamicHTMLToPDF {

   // Initialize the logger.
   private static final Logger LOGGER = LoggerFactory.getLogger(DynamicHTMLToPDF.class);

   public static void main(String[] args) {

     try (InputStream inputStream = Files.newInputStream(new File("src/main/resources/createPDFFromDynamicHtmlInput.zip").toPath())) {
        // Initial setup, create credentials instance
        Credentials credentials = new ServicePrincipalCredentials(
                System.getenv("PDF_SERVICES_CLIENT_ID"),
                System.getenv("PDF_SERVICES_CLIENT_SECRET"));

        // Creates a PDF Services instance
        PDFServices pdfServices = new PDFServices(credentials);

        // Creates an asset(s) from source file(s) and upload
        Asset asset = pdfServices.upload(inputStream, PDFServicesMediaType.ZIP.getMediaType());

        // Create parameters for the job
        HTMLToPDFParams htmlToPDFParams = getHTMLToPDFParams();

        // Creates a new job instance
        HTMLToPDFJob htmLtoPDFJob = new HTMLToPDFJob(asset)
                .setParams(htmlToPDFParams);

        // Submit the job and gets the job result
        String location = pdfServices.submit(htmLtoPDFJob);
        PDFServicesResponse<HTMLToPDFResult> pdfServicesResponse = pdfServices.getJobResult(location, HTMLToPDFResult.class);

        // Get content from the resulting asset(s)
        Asset resultAsset = pdfServicesResponse.getResult().getAsset();
        StreamAsset streamAsset = pdfServices.getContent(resultAsset);

        // Creates an output stream and copy stream asset's content to it
        File.createDirectories(Paths.get("output/"));
        OutputStream outputStream = Files.newOutputStream(new File("output/dynamicHTMLToPDFOutput.pdf").toPath());
        LOGGER.info("Saving asset at output/dynamicHTMLToPDFOutput.pdf");
        IOUtils.copy(streamAsset.getInputStream(), outputStream);
        outputStream.close();
     } catch (ServiceApiException | IOException | SDKException | ServiceUsageException ex) {
       LOGGER.error("Exception encountered while executing operation", ex);
     }
   }

   private static HTMLToPDFParams getHTMLToPDFParams() {
     // Define the page layout, in this case an 8 x 11.5 inch page (effectively portrait orientation)
     PageLayout pageLayout = new PageLayout();
     pageLayout.setPageSize(8, 11.5);

     // Sets the dataToMerge field that needs to be populated in the HTML before its conversion
     JSONObject dataToMerge = new JSONObject();
     dataToMerge.put("title","Create, Convert PDFs and More!");
     dataToMerge.put("sub_title","Easily integrate PDF actions within your document workflows.");

     return new HTMLToPDFParams.Builder()
             .includeHeaderFooter(true).withPageLayout(pageLayout).withDataToMerge(dataToMerge)
             .build();
   }
}
```

### .NET

```javascript
// Get the samples from https://www.adobe.com/go/pdftoolsapi_net_samples
// Run the sample:
// cd DynamicHTMLToPDF/
// dotnet run DynamicHTMLToPDF.csproj

namespace DynamicHTMLToPDF
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
                using Stream inputStream = File.OpenRead(@"createPDFFromDynamicHtmlInput.zip");
                IAsset asset = pdfServices.Upload(inputStream, PDFServicesMediaType.ZIP.GetMIMETypeValue());

                // Create parameters for the job
                HTMLToPDFParams htmlToPDFParams = GetHTMLToPDFParams();

                // Creates a new job instance
                HTMLToPDFJob htmlToPDFJob = new HTMLToPDFJob(asset).SetParams(htmlToPDFParams);

                // Submits the job and gets the job result
                String location = pdfServices.Submit(htmlToPDFJob);
                PDFServicesResponse<HTMLToPDFResult> pdfServicesResponse =
                    pdfServices.GetJobResult<HTMLToPDFResult>(location, typeof(HTMLToPDFResult));

                // Get content from the resulting asset(s)
                IAsset resultAsset = pdfServicesResponse.Result.Asset;
                StreamAsset streamAsset = pdfServices.GetContent(resultAsset);

                // Creating output streams and copying stream asset's content to it
                String outputFilePath = "/output/createPdfFromDynamicHtmlOutput.pdf";
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

        private static HTMLToPDFParams GetHTMLToPDFParams()
        {
            // Define the page layout, in this case an 8 x 11.5 inch page (effectively portrait orientation).
            PageLayout pageLayout = new PageLayout();
            pageLayout.SetPageSize(8, 11.5);

            //Set the dataToMerge field that needs to be populated in the HTML before its conversion
            JObject dataToMerge = new JObject
            {
                { "title", "Create, Convert PDFs and More!" },
                { "sub_title", "Easily integrate PDF actions within your document workflows." }
            };

// Set the desired HTML-to-PDF conversion options.
            HTMLToPDFParams htmlToPDFParams = HTMLToPDFParams.HTMLToPDFParamsBuilder()
                .IncludeHeaderFooter(true)
                .WithPageLayout(pageLayout)
                .WithDataToMerge(dataToMerge)
                .Build();
            return htmlToPDFParams;
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
// node src/htmltopdf/dynamic-html-to-pdf.js

const {
  ServicePrincipalCredentials,
  PDFServices,
  MimeType,
  PageLayout,
  HTMLToPDFParams,
  HTMLToPDFResult,
  HTMLToPDFJob,
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
    readStream = fs.createReadStream("./createPDFFromDynamicHtmlInput.zip");
    const inputAsset = await pdfServices.upload({
      readStream,
      mimeType: MimeType.ZIP,
    });

    // Create parameters for the job
    const params = getHTMLToPDFParams();

    // Creates a new job instance
    const job = new HTMLToPDFJob({ inputAsset, params });

    // Submit the job and get the job result
    const pollingURL = await pdfServices.submit({ job });
    const pdfServicesResponse = await pdfServices.getJobResult({
      pollingURL,
      resultType: HTMLToPDFResult,
    });

    // Get content from the resulting asset(s)
    const resultAsset = pdfServicesResponse.result.asset;
    const streamAsset = await pdfServices.getContent({ asset: resultAsset });

    // Creates an output stream and copy result asset's content to it
    const outputFilePath = "./createPDFFromDynamicHtmlOutput.pdf";
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

function getHTMLToPDFParams() {
  // Define the page layout, in this case an 8 x 11.5 inch page (effectively portrait orientation)
  const pageLayout = new PageLayout({
    pageHeight: 11.5,
    pageWidth: 8,
  });

  // Set the dataToMerge field that needs to be populated in the HTML before its conversion
  const dataToMerge = {
    title: "Create, Convert PDFs and More!",
    sub_title: "Easily integrate PDF actions within your document workflows.",
  };

  return new HTMLToPDFParams({
    pageLayout,
    dataToMerge,
    includeHeaderFooter: true,
  });
}
```

### Python

```python

## Initialize the logger

logging.basicConfig(level=logging.INFO)

class DynamicHTMLToPDF:
    def __init__(self):
        try:
            file = open('./createPDFFromDynamicHtmlInput.zip', 'rb')
            input_stream = file.read()
            file.close()

## Creates an output stream and copy stream asset's content to it

output_file_path = 'output/DynamicHTMLToPDF.pdf'
            with open(output_file_path, "wb") as file:
                file.write(stream_asset.get_input_stream())

        except (ServiceApiException, ServiceUsageException, SdkException) as e:
            logging.exception(f'Exception encountered while executing operation: {e}')

    @staticmethod
    def get_html_to_pdf_params() -> HTMLtoPDFParams:

## Define the page layout, in this case an 8 x 11.5 inch page (effectively portrait orientation)

page_layout = PageLayout(page_height=11.5, page_width=8)

## Sets the dataToMerge field that needs to be populated in the HTML before its conversion

data_to_merge = {
            "title": "Create, Convert PDFs and More!",
            "sub_title": "Easily integrate PDF actions within your document workflows."
        }
        return HTMLtoPDFParams(page_layout=page_layout, json=json.dumps(data_to_merge))

if __name__ == "__main__":
    DynamicHTMLToPDF()
```

### REST API

```javascript
// Please refer our REST API docs for more information
// https://developer.adobe.com/document-services/docs/apis/#tag/Html-To-PDF

curl --location --request POST 'https://pdf-services.adobe.io/operation/htmltopdf' \
--header 'x-api-key: {{Placeholder for client_id}}' \
--header 'Content-Type: application/json' \
--header 'Authorization: Bearer {{Placeholder for token}}' \
--data-raw '{
    "assetID": "urn:aaid:AS:UE1:23c30ee0-2e4d-46d6-87f2-087832fca718",
    "json": "{}",
    "includeHeaderFooter": true,
    "pageLayout": {
        "pageWidth": 11,
        "pageHeight": 8.5
    }
    "waitTimeToLoad": 100,
}'
```
