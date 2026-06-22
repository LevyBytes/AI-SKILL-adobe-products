# Extract Api (part 1)

> Adobe Acrobat reference. Original prose; identifiers preserved verbatim.

Running an SDK extract operation yields a zip archive that holds the following:

- A structuredData.json file carrying both the pulled-out content and
  the PDF's element structure. The default output is described in the [JSON
  schema](https://raw.githubusercontent.com/AdobeDocs/pdfservices-api-documentation/main/static/extract-json-output-schema2.json); for
  what the output looks like with the styling option turned on, see the [Styling JSON
  schema](https://raw.githubusercontent.com/AdobeDocs/pdfservices-api-documentation/main/static/extract-json-output-schema-styling-info.json)
  instead.
- One or more renditions folders holding a rendition for every element type you asked for as input. That folder is named either "tables" or "figures" to match the element type you chose, and the renditions inside it carry filenames tied back to the element entries in the JSON file.

[Figure: Extract sample directory structure](https://raw.githubusercontent.com/AdobeDocs/pdfservices-api-documentation/main/src/pages/overview/images/extractsamplefiles.png)

Below is a rundown of the main elements you'll find in the extracted JSON (with further notes in the [JSON
schema](https://raw.githubusercontent.com/AdobeDocs/pdfservices-api-documentation/main/static/extract-json-output-schema2.json)):

- Elements : A position-ordered list, drawn from the document's structure tree, of semantic elements such as headings, paragraphs, tables, and figures. Headers and footers are left out of the output. On top of that, a heading that recurs from page to page is recorded only the first time it appears.
- Bounds : The box that wraps around the content items making up the element. It's omitted for any element that holds no content items, an empty table cell being one example. These bounds follow PDF specification coordinates.
  PDF pages are generally specified in inches (like A4 page is 8.3 inches x 11.7 inches). If values are required in coordinates, we need a DPI value i.e. dots per inches. As per PDF specification, 72 DPI is used when creating a PDF. So, width of an A4 page is specified to be ~= 598 units (8.3 inches x 72) when creating the PDF.
  All values reported in Extract use this 72 dpi based coordinates. Again as per PDF spec, absolute values of bounds are in a coordinate system where origin is (0,0), up and right directions are positive. Going by this coordinate system, for all rects reported in Extract, bottom < top and left < right.
  In Extract JSON schema, all rects are of type #/definitions/rect and rect is defined as:

  **description: Rectangle/Box in PDF coordinate system (bottom-left is origin). Values are in PDF user space units. Order of values - left, bottom, right, top.**

- Font : Describes the font tied to the element's first character. Surfaced for text elements only.
- TextSize : Gives the point size of the final character. Surfaced for text elements only.
- Attributes: Carries extra properties such as line height and text alignment.
- Path : Pinpoints where elements sit in the structure tree, naming both the element type and its instance number. Together with bounds, the Path establishes the document's reading order. The element
  types follow the [ISO
  standard](https://www.iso.org/standard/75839.html), and a convenience summary appears below:
  - Aside : Material that sits outside the document's normal content
    flow
  - Figure : Fixed, non-reflowable items such as graphs, images, and
    flowcharts
  - Footnote : FootNote
  - H, H1, H2, etc : Heading Level
  - L : List
  - Li : List Item
  - Lbl : List Item label
  - Lbody : List item body
  - P : Paragraph
  - ParagraphSpan : Marks a portion of a paragraph. Shows up when a
    paragraph gets split, typically by a page break or column
    break.
  - Reference : Link
  - Sect : A self-contained logical division within the document
  - StyleSpan : Flags a styling change in the text compared with
    its parent container.
  - Sub : One line within a paragraph that spans several lines (addresses, for example).
    Such paras are created in html using
    inside tags
  - Table : Table
  - TD : Table cell
  - TH : Table header cell
  - TR : Table row
  - Title : The document's title — the standout heading that can
    characterize the entire document.
  - TOC : Table of contents
  - TOCI : Table of contents item
  - Watermark : Watermark
- Text : The element's text, given in UTF-8 and surfaced for text elements only. Where inline elements are listed apart from their parent block element, this field carries references pointing to those inline elements.
- Figures : Flagged as a Figure in the Path attribute and stored as a PNG inside the figures folder, under the filename recorded in the filePaths attribute.
- Tables : Flagged as a Table in the Path attribute and stored in the tables folder as a .CSV, .XLSX, and .PNG, under the filename recorded in the filePaths attribute.
- FilePaths : Lists the paths pointing to the extra output files produced (images
  and spreadsheets).
- Pages : Per-page property list for the PDF, covering page number, width, height, and rotation.
- Reading Order : How content reads across columns, over page breaks, and including asides is captured by the sequence of entries in the Elements array. Under normal mode, an element lifted out of its container can break this rule (for instance, a reference link sitting mid-paragraph). Styling mode, by contrast, keeps the order intact, laying out every Element and its Kids in natural reading sequence. The .json file's Bounds and path element are what fix the reading order.

## Extract PDF — API limitations

- **File size:** The maximum file size you can submit is 100MB.
- **Number of Pages:** For PDFs that aren't scanned, the ceiling is 400 pages; scanned PDFs cap out at 150 pages or fewer. Files holding many tables may hit a lower ceiling. When a file is large or has an intricate layout, break it into smaller pieces before you process it.
- **Rate limits:** Stay under 25 requests per minute.
- **Page Size:** Standard page sizes are accepted, but no dimension may go above 17.5” or fall below 6”.
- **Hidden Objects:** PDFs carrying content that doesn't render on the page — javascript, OCG (optional content groups), and the like — aren't supported, and files holding such hidden data can fail during processing. In those situations, [removing hidden content](https://helpx.adobe.com/acrobat/using/removing-sensitive-content-pdfs.html) first and resubmitting may succeed.
- **Language:** English content is what the API is presently tuned for. Other Latin-script languages should still come out well, though non-English punctuation may cause trouble.
- **OCR and Scan quality:** How cleanly text comes out of scanned files tracks the legibility of the source. Skewed pages, shadowing, fonts that are obscured or overlapping, and resolution under 200 DPI can each degrade the extracted text.
- **Form fields:** Files with XFA or other fillable form components aren't supported.
- **Unprotected files:** The API handles files that are unprotected or whose security settings permit content copying. A file that's locked down and blocks copying won't be processed.
- **Annotations:** PDFs bearing annotations like highlights and sticky notes will still be processed, though annotations sitting over text may degrade the output. Any text inside annotations is omitted from the result.
- **PDF Producers:** Extract is built to pull content from files made up of text, table data, and figures. A file generated by an application that outputs other content — illustrations, CAD drawings, or other vector art — may not yield good results.

## Extract PDF — Error codes

| Scenario | Error code | Error message |
| --- | --- | --- |
| Invalid API parameters | \- | Invalid parameters |
| File size violation | `DISQUALIFIED_FILE_SIZE` | File exceeds size limit. |
| Page limit violation | `DISQUALIFIED_PAGE_LIMIT` | File exceeds page limit. |
| Scan page limit violation | `DISQUALIFIED_SCAN_PAGE_LIMIT` | Scanned file exceeds page limit. |
| Unsupported XFA file | `DISQUALIFIED_XFA` | File contains XFA form(s). Not supported for content extraction. |
| Encryption permission | `DISQUALIFIED_PERMISSIONS` | File permissions do not allow for content extraction. |
| Complex file | `DISQUALIFIED_COMPLEX_FILE` | File contents are too complex for content extraction. |
| Unsupported language | `DISQUALIFIED_LANGUAGE` | File content language is unsupported. |
| Bad PDF | `BAD_PDF` | Unable to extract content. File is corrupted, malformed or an empty PDF. |
| Invalid file type | `BAD_PDF_FILE_TYPE` | The input file is not a PDF file. |
| Damaged file | `BAD_PDF_DAMAGED` | The input file is damaged. |
| File contains complex table | `BAD_PDF_COMPLEX_TABLE` | The input file contains a table that is too complex to process. |
| File contains complex content | `BAD_PDF_COMPLEX_INPUT` | The input file contains content that is too complex to process. |
| File contains unsupported font | `BAD_PDF_UNSUPPORTED_FONT` | The input file contains font data that is corrupted or not supported. |
| Large PDF | `BAD_PDF_LARGE_FILE` | The input file size exceeds the maximum allowed. |
| Protected PDF | `PROTECTED_PDF` | Unable to extract content. File is password protected. |
| Empty or corrupted input | `BAD_INPUT` | Input is corrupted or empty. |
| Invalid input parameters | `BAD_INPUT_PARAMS` | Invalid input parameters. |
| Timeout | TIMEOUT | Processing timeout. Please try splitting the file into multiple files with fewer pages. |
| Unknown error / failure | ERROR | Unable to extract content - Internal error. |

## Extract PDF — REST API

Consult our public API Reference covering [Extract PDF](https://raw.githubusercontent.com/AdobeDocs/pdfservices-api-documentation/main/src/pages/apis/index.md#tag/Extract-PDF).

## Extract PDF — Extract Text from a PDF

Pulling text element data out of a PDF and handing back a JSON file is what the sample below demonstrates.

For guidance on working with our APIs, consult the [API usage guide](api-usage.md).

### Java

```javascript
// Get the samples from https://www.adobe.com/go/pdftoolsapi_java_samples
// Run the sample:
// mvn -f pom.xml exec:java -Dexec.mainClass=com.adobe.pdfservices.operation.samples.extractpdf.ExtractTextInfoFromPDF

public class ExtractTextInfoFromPDF {

    private static final Logger LOGGER = LoggerFactory.getLogger(ExtractTextInfoFromPDF.class);

    public static void main(String[] args) {

        try (InputStream inputStream = Files.newInputStream(new File("src/main/resources/extractPdfInput.pdf").toPath())) {
            // Initial setup, create credentials instance
            Credentials credentials = new ServicePrincipalCredentials(
                System.getenv("PDF_SERVICES_CLIENT_ID"),
                System.getenv("PDF_SERVICES_CLIENT_SECRET"));

            // Creates a PDF Services instance
            PDFServices pdfServices = new PDFServices(credentials);

            // Creates an asset(s) from source file(s) and upload
            Asset asset = pdfServices.upload(inputStream, PDFServicesMediaType.PDF.getMediaType());

            // Create parameters for the job
            ExtractPDFParams extractPDFParams = ExtractPDFParams.extractPDFParamsBuilder()
                .addElementsToExtract(Arrays.asList(ExtractElementType.TEXT)).build();

            // Creates a new job instance
            ExtractPDFJob extractPDFJob = new ExtractPDFJob(asset)
                .setParams(extractPDFParams);

            // Submit the job and gets the job result
            String location = pdfServices.submit(extractPDFJob);
            PDFServicesResponse<ExtractPDFResult> pdfServicesResponse = pdfServices.getJobResult(location, ExtractPDFResult.class);

            // Get content from the resulting asset(s)
            Asset resultAsset = pdfServicesResponse.getResult().getResource();
            StreamAsset streamAsset = pdfServices.getContent(resultAsset);

            // Creates an output stream and copy stream asset's content to it
            Files.createDirectories(Paths.get("output/"));
            OutputStream outputStream = Files.newOutputStream(new File("output/ExtractTextInfoFromPDF.zip").toPath());
            LOGGER.info("Saving asset at output/ExtractTextInfoFromPDF.zip");
            IOUtils.copy(streamAsset.getInputStream(), outputStream);
            outputStream.close();
        } catch (ServiceApiException | IOException | SDKException | ServiceUsageException e) {
            LOGGER.error("Exception encountered while executing operation", e);
        }
    }
}

```

### .NET

```javascript
// Get the samples from https://www.adobe.com/go/pdftoolsapi_net_samples
// Run the sample:
// cd ExtractTextInfoFromPDF/
// dotnet run ExtractTextInfoFromPDF.csproj

namespace ExtractTextInfoFromPDF
{
    class Program
    {
        private static readonly ILog log = LogManager.GetLogger(typeof(Program));
                static void Main()
        {
            // Configure the logging.
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
                using Stream inputStream = File.OpenRead(@"extractPDFInput.pdf");
                IAsset asset = pdfServices.Upload(inputStream, PDFServicesMediaType.PDF.GetMIMETypeValue());

                // Create parameters for the job
                ExtractPDFParams extractPDFParams = ExtractPDFParams.ExtractPDFParamsBuilder()
                    .AddElementToExtract(ExtractElementType.TEXT)
                    .Build();

                // Creates a new job instance
                ExtractPDFJob extractPDFJob = new ExtractPDFJob(asset)
                    .SetParams(extractPDFParams);

                // Submits the job and gets the job result
                String location = pdfServices.Submit(extractPDFJob);
                PDFServicesResponse<ExtractPDFResult> pdfServicesResponse =
                    pdfServices.GetJobResult<ExtractPDFResult>(location, typeof(ExtractPDFResult));

                // Get content from the resulting asset(s)
                IAsset resultAsset = pdfServicesResponse.Result.Resource;
                StreamAsset streamAsset = pdfServices.GetContent(resultAsset);

                // Creating output streams and copying stream asset's content to it
                String outputFilePath = "/output/ExtractTextInfoFromPDF.zip";
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
// node src/extractpdf/extract-text-info-from-pdf.js

const {
  ServicePrincipalCredentials,
  PDFServices,
  MimeType,
  ExtractPDFParams,
  ExtractElementType,
  ExtractPDFJob,
  ExtractPDFResult,
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
    readStream = fs.createReadStream("./extractPDFInput.pdf");
    const inputAsset = await pdfServices.upload({
      readStream,
      mimeType: MimeType.PDF,
    });

    // Create parameters for the job
    const params = new ExtractPDFParams({
      elementsToExtract: [ExtractElementType.TEXT],
    });

    // Creates a new job instance
    const job = new ExtractPDFJob({ inputAsset, params });

    // Submit the job and get the job result
    const pollingURL = await pdfServices.submit({ job });
    const pdfServicesResponse = await pdfServices.getJobResult({
      pollingURL,
      resultType: ExtractPDFResult,
    });

    // Get content from the resulting asset(s)
    const resultAsset = pdfServicesResponse.result.resource;
    const streamAsset = await pdfServices.getContent({ asset: resultAsset });

    // Creates a write stream and copy stream asset's content to it
    const outputFilePath = "./ExtractTextInfoFromPDF.zip";
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

logging.basicConfig(level=logging.INFO)

class ExtractTextInfoFromPDF:
    def __init__(self):
        try:
            file = open('extractPdfInput.pdf', 'rb')
            input_stream = file.read()
            file.close()

## Creates an asset(s) from source file(s) and upload

input_asset = pdf_services.upload(input_stream=input_stream, mime_type=PDFServicesMediaType.PDF)

## Create parameters for the job

Create parameters for the job
extract_pdf_params = ExtractPDFParams(
                elements_to_extract=[ExtractElementType.TEXT],
            )

## Creates a new job instance

Creates a new job instance
extract_pdf_job = ExtractPDFJob(input_asset=input_asset, extract_pdf_params=extract_pdf_params)

## Submit the job and gets the job result

Submit the job and gets the job result
location = pdf_services.submit(extract_pdf_job)
            pdf_services_response = pdf_services.get_job_result(location, ExtractPDFResult)

## Get content from the resulting asset(s)

Get content from the resulting asset(s)
result_asset: CloudAsset = pdf_services_response.get_result().get_resource()
            stream_asset: StreamAsset = pdf_services.get_content(result_asset)

## Creates an output stream and copy stream asset's content to it

Creates an output stream and copy stream asset's content to it
output_file_path = 'extractTextInfoFromPDF.zip'
            with open(output_file_path, "wb") as file:
                file.write(stream_asset.get_input_stream())

        except (ServiceApiException, ServiceUsageException, SdkException) as e:
            logging.exception(f'Exception encountered while executing operation: {e}')

if __name__ == "__main__":
    ExtractTextInfoFromPDF()
```

### REST API

```javascript
// Please refer our REST API docs for more information
// https://developer.adobe.com/document-services/docs/apis/#tag/Extract-PDF

curl --location --request POST 'https://pdf-services.adobe.io/operation/extractpdf' \
--header 'x-api-key: {{Placeholder for client_id}}' \
--header 'Content-Type: application/json' \
--header 'Authorization: Bearer {{Placeholder for token}}' \
--data-raw '{
    "assetID": "urn:aaid:AS:UE1:23c30ee0-2e4d-46d6-87f2-087832fca718",
    "elementsToExtract": [
        "text"
    ]
}'
```
