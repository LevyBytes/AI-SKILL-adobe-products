# Quickstarts

> Adobe Acrobat reference. Original prose; identifiers preserved verbatim.

## Overview

Covers: Overview; Quickstart for PDF Extract API (.NET); Quickstarts.

## Overview

**What is Extract?**

Bundled with the PDF Services API, the PDF Extract API suite is a cloud-hosted web service built on Adobe's Sensei AI that pulls content and structural information out of PDF documents automatically, whether they are native or scanned. You can choose between two output formats:

- **Structured JSON output** ([Extract PDF](api-extract-api.md)): Returns the content together with its structural detail as JSON
- **Markdown output** ([PDF to Markdown](api-howtos-3.md)): Renders the PDF's content into tidy, LLM-friendly Markdown

Whichever format you pick, text, intricate tables, and figures are all pulled from the PDF:

- Text comes out in contextual blocks — paragraphs, headings, lists, footnotes, and the like — carrying font, styling, and other formatting details with it.
- Tables are parsed and extracted so each cell arrives with its contents and formatting, and the service works out on its own which cells stretch across several rows or columns.
- With Extract JSON, the table data ships inside the resulting JSON and may optionally also be written to CSV and XLSX files. Tables additionally come out as PNG images, letting you eyeball the table data to confirm it.

- Anything flagged as a figure or image is pulled out as PNG files (Extract PDF) or base64 files (PDF to Markdown).

### Choose Your Output Format

Under one product banner, the PDF Extract API exposes two separate endpoints:

### JSON (Extract PDF)

Best for:

- Structured downstream processing
- Layout and structure analysis
- Detailed element type information
- Custom data extraction workflows
- Integration with data analysis systems

What the JSON form gives you is a record of how the document is organized — the order in which the extracted pieces are meant to be read and where each piece sits on its page. If you want it, table data can come back as separate CSV and XLSX files, while any images are pulled out as PNG files.

[Learn more about Extract PDF →](api-extract-api.md)

### Markdown (PDF to Markdown)

Best for:

- LLM ingestion and prompt creation
- Training/Fine-tuning LLMs with PDF content
- Documentation workflows
- Content republishing and migration
- Modern documentation systems
- Searchable knowledge repositories

With the Markdown form, the document's layout and reading sequence stay intact while the body is rendered into a broadly supported text format. Any tables become Markdown table markup, and figures may be inlined as base64 images.

[Learn more about PDF to Markdown →](api-howtos-3.md)

Any application can fold the PDF Extract API in through the [PDFServices SDK](api-gettingstarted-10.md) — covering Node.js, Python, .NET and Java. [Start with a Free Tier which includes 500 free Document Transactions per month.](https://acrobatservices.adobe.com/dc-integration-creation-app-cdn/main.html?api=pdf-extract-api)

### Extract Process

[Figure: PDF Extract Process : PDF containing title, image, header, paragraph, list and table and provide output as json, png and csv files to client applications](https://raw.githubusercontent.com/AdobeDocs/pdfservices-api-documentation/main/src/pages/overview/images/extract-process-21.png)

## Quickstart for PDF Extract API (.NET)

A short scenario is the easiest way into Adobe PDF Extract API: feed it an input PDF and run the Extract API over that file. With extraction finished, we then read back the results and call out whatever top-level headings the document contains. Every step needed to build a program that does exactly this is covered here.

### Prerequisites

Here is what has to be in place before you follow along:

- [.NET: version 8.0 or above](https://dotnet.microsoft.com/en-us/download)
- [.Net SDK](https://dotnet.microsoft.com/en-us/download/dotnet/8.0)
- A build tool: Either Visual Studio or .NET Core CLI.
- An Adobe ID. If you do not have one, the credential setup will walk you through creating one.
- A way to edit code. No specific editor is required for this guide.

### Step One: Getting credentials

1. Start by pointing your browser at [https://acrobatservices.adobe.com/dc-integration-creation-app-cdn/main.html?api=pdf-extract-api](https://acrobatservices.adobe.com/dc-integration-creation-app-cdn/main.html?api=pdf-extract-api). Should you not yet be signed in to Adobe.com, register a fresh account or log in — a personal email address works better here than a federated ID.

[Figure: Sign in](https://raw.githubusercontent.com/AdobeDocs/pdfservices-api-documentation/main/src/pages/overview/pdf-extract-api/quickstarts/extract-pdf/dotnet/shot1.png)

2. Once you have logged in or registered, a prompt asks you to title the new credentials. Enter "New Project" as the name.

3. Switch the "Choose language" setting over to ".Net".

4. Notice as well the checkbox labelled "Create personalized code sample." Ticking it bundles a broad collection of samples in with your credentials, which can come in handy when you study this further down the line.

5. Tick the box agreeing to the developer terms, then press "Create credentials."

[Figure: Project setup](https://raw.githubusercontent.com/AdobeDocs/pdfservices-api-documentation/main/src/pages/overview/pdf-extract-api/quickstarts/extract-pdf/dotnet/shot2-spc.png)

6. The moment your credentials exist, they download on their own:

[Figure: alt](https://raw.githubusercontent.com/AdobeDocs/pdfservices-api-documentation/main/src/pages/overview/pdf-extract-api/quickstarts/extract-pdf/dotnet/shot3-spc.png)

### Step Two: Setting up the project

1. Look inside your Downloads folder for the credentials ZIP, PDFServicesSDK-.NetSamples.zip. Unpacking that archive reveals a samples folder alongside the `pdfservices-api-credentials.json` file.

[Figure: alt](https://raw.githubusercontent.com/AdobeDocs/pdfservices-api-documentation/main/src/pages/overview/pdf-extract-api/quickstarts/extract-pdf/dotnet/shot5-spc.png)

2. Move the `pdfservices-api-credentials.json` file into a directory you create fresh for it.

3. Within that fresh directory, add a file named `ExtractTextInfoFromPDF.csproj`. Its job is to spell out our requirements and to help describe the application being built.

```xml

```

Inside it we'll declare the dependencies required and lay out how the build proceeds.

The program is going to ingest a PDF — `Adobe Extract API Sample.pdf`, shipped as part of the .NET sample project — and pull out what it contains. Those results land in a ZIP file, `ExtractTextInfoFromPDF.zip`. From that ZIP we then read the output and echo the text of every `H1` header the PDF holds.

4. Back in your editor, open the folder where you just copied the credentials and made the `csproj` file. Add a new file called `Program.cs`.

Now you're ready to begin coding.

### Step Three: Creating the application

1. The first thing to pull in is the set of dependencies we rely on:

```javascript
using System;
using System.IO;
using System.IO.Compression;
using System.Reflection;
using System.Text.Json;
using Adobe.PDFServicesSDK;
using Adobe.PDFServicesSDK.auth;
using Adobe.PDFServicesSDK.exception;
using Adobe.PDFServicesSDK.io;
using Adobe.PDFServicesSDK.pdfjobs.jobs;
using Adobe.PDFServicesSDK.pdfjobs.parameters.extractpdf;
using Adobe.PDFServicesSDK.pdfjobs.results;
using log4net;
using log4net.Config;
using log4net.Repository;
```

2. Now let's define our main class and `Main` method:

```javascript
namespace ExtractTextInfoFromPDF
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

3. Define the `PDF_SERVICES_CLIENT_ID` and `PDF_SERVICES_CLIENT_SECRET` environment variables: run the commands below, swapping the `YOUR CLIENT ID` and `YOUR CLIENT SECRET` placeholders for the credentials that live in your `pdfservices-api-credentials.json` file:

- **Windows:**

  - `set PDF_SERVICES_CLIENT_ID=<YOUR CLIENT ID>`
  - `set PDF_SERVICES_CLIENT_SECRET=<YOUR CLIENT SECRET>`

- **MacOS/Linux:**
  - `export PDF_SERVICES_CLIENT_ID=<YOUR CLIENT ID>`
  - `export PDF_SERVICES_CLIENT_SECRET=<YOUR CLIENT SECRET>`

4. With that done, we build the credentials and hand them to a new PDF Services instance:

```javascript
// Initial setup, create credentials instance
ICredentials credentials = new ServicePrincipalCredentials(
        Environment.GetEnvironmentVariable("PDF_SERVICES_CLIENT_ID"),
        Environment.GetEnvironmentVariable("PDF_SERVICES_CLIENT_SECRET"));

// Creates a PDF Services instance
PDFServices pdfServices = new PDFServices(credentials);
```

5. Next, push the asset up:

```javascript
// Creates an asset from source file and upload
IAsset asset = pdfServices.Upload(inputStream, PDFServicesMediaType.PDF.GetMIMETypeValue());
```

here we name the PDF that gets extracted. (That source, `Adobe Extract API Sample.pdf`, ships with the .NET sample project.) A production application would normally supply these values dynamically.

6. With that uploaded, build the job:

```javascript
// Create parameters for the job
ExtractPDFParams extractPDFParams = ExtractPDFParams.ExtractPDFParamsBuilder()
        .AddElementToExtract(ExtractElementType.TEXT)
        .Build();

// Creates a new job instance
ExtractPDFJob extractPDFJob = new ExtractPDFJob(asset)
        .SetParams(extractPDFParams);
```

This block declares the operation we're running (an Extract) and sets up the parameters for that Extract job. Several options exist for PDF Extract API, but here we stick to the simplest extraction of all — just the document's text content.

7. This following block hands the job off and collects what comes back:

```javascript
// Submits the job and gets the job result
String location = pdfServices.Submit(extractPDFJob);
PDFServicesResponse<ExtractPDFResult> pdfServicesResponse =
        pdfServices.GetJobResult<ExtractPDFResult>(location, typeof(ExtractPDFResult));

// Get content from the resulting asset(s)
IAsset resultAsset = pdfServicesResponse.Result.Content;
StreamAsset streamAsset = pdfServices.GetContent(resultAsset);
```

Running this carries out the extraction and retrieves the result zip's content as a stream asset.

8. This following block writes the result out to the path we name:

```javascript
// Creating output streams and copying stream asset's content to it
String outputFilePath = "/output/ExtractTextInfoFromPDF.zip";
new FileInfo(Directory.GetCurrentDirectory() + outputFilePath).Directory.Create();
Stream outputStream = File.OpenWrite(Directory.GetCurrentDirectory() + outputFilePath);
streamAsset.Stream.CopyTo(outputStream);
outputStream.Close();
```

9. At this point we crack open the ZIP, locate the JSON output inside, and decode it:

```javascript
ZipArchive archive = ZipFile.OpenRead(Directory.GetCurrentDirectory() + "/ExtractTextInfoFromPDF.zip");
ZipArchiveEntry jsonEntry = archive.GetEntry("structuredData.json");
StreamReader osr = new StreamReader(jsonEntry.Open());
String contents = osr.ReadToEnd();

JsonElement data = JsonSerializer.Deserialize<JsonElement>(contents);
```

10. Lastly, we walk the results and print each element found to be an `H1`:

```javascript
JsonElement elements = data.GetProperty("elements");
foreach(JsonElement element in elements.EnumerateArray()) {
    JsonElement pathElement = element.GetProperty("Path");
    String path = pathElement.GetString();
    if(path.EndsWith("/H1")) {
        JsonElement textElement = element.GetProperty("Text");
        Console.Write(textElement.GetString() +"\n");
    }
}
```

[Figure: Example running in the command line](https://raw.githubusercontent.com/AdobeDocs/pdfservices-api-documentation/main/src/pages/overview/pdf-extract-api/quickstarts/extract-pdf/dotnet/shot9.png)

Here's the complete application (`Program.cs`):

````javascript
using System;
using System.IO;
using System.IO.Compression;
using System.Reflection;
using System.Text.Json;
using Adobe.PDFServicesSDK;
using Adobe.PDFServicesSDK.auth;
using Adobe.PDFServicesSDK.exception;
using Adobe.PDFServicesSDK.io;
using Adobe.PDFServicesSDK.pdfjobs.jobs;
using Adobe.PDFServicesSDK.pdfjobs.parameters.extractpdf;
using Adobe.PDFServicesSDK.pdfjobs.results;
using log4net;
using log4net.Config;
using log4net.Repository;

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
                using Stream inputStream = File.OpenRead(@"Adobe Extract API Sample.pdf");
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

                Console.Write("Successfully extracted information from PDF. Printing H1 Headers:\n\n");

```javascript
ZipArchive archive = ZipFile.OpenRead(Directory.GetCurrentDirectory() + outputFilePath);
                ZipArchiveEntry jsonEntry = archive.GetEntry("structuredData.json");
                StreamReader osr = new StreamReader(jsonEntry.Open());
                String contents = osr.ReadToEnd();

                JsonElement data = JsonSerializer.Deserialize<JsonElement>(contents);
                JsonElement elements = data.GetProperty("elements");
                foreach(JsonElement element in elements.EnumerateArray()) {
                    JsonElement pathElement = element.GetProperty("Path");
                    String path = pathElement.GetString();
                    if(path.EndsWith("/H1")) {
                        JsonElement textElement = element.GetProperty("Text");
                        Console.Write(textElement.GetString() +"\n");
                    }
                }
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
````

## Quickstarts

Looking for a fast way to try Extract PDF API and PDF To Markdown API? Pick the operation you want to begin with:

- [Extract PDF](https://raw.githubusercontent.com/AdobeDocs/pdfservices-api-documentation/main/src/pages/overview/pdf-extract-api/quickstarts/extract-pdf/index.md)
