# Hyperlink, Inlineimages, Quickstarts

> Adobe Acrobat reference. Original prose; identifiers preserved verbatim.

## Overview

Covers: Hyperlink; Overview — What is Document Generation?; Inline Images; Quickstart for Adobe Document Generation API (.NET).

## Hyperlink

Through the anchor `<a>` tag, you can embed a hyperlink into the generated document by way of the json data.

### How It Works

Here is how the supplied input data looks in JSON form:

```json
{
  "Notes Section": "Please refer to our terms and conditions over <a href=\"https://www.adobe.com/legal/terms.html\">here</a>"
}
```

[Figure: Added hyperlink in the document through json data using anchor `<a>` tag](https://raw.githubusercontent.com/AdobeDocs/pdfservices-api-documentation/main/src/pages/overview/images/anchor-tag-sample.png)

[Figure: Formatted output in the document when anchor tag is resolved](https://raw.githubusercontent.com/AdobeDocs/pdfservices-api-documentation/main/src/pages/overview/images/anchor-tag1.png)

## Overview — What is Document Generation?

Producing business-critical paperwork — think invoices, contracts, sales proposals, and work orders — automatically is what Document Generation refers to.

Paperwork of this kind blends fixed content, which stays the same every time, with variable content tailored to whoever the finished document is meant for. Consider, for instance, a bank preparing a loan contract. Every borrower needs their own tailored copy. The template stays constant across them all, yet the particulars filled in differ from one customer to the next.

### Overview — Document Generation Process

[Figure: Document Generation Process : Request consisting of a docx file and a json is sent to Adobe Document Generation API by client application. Adobe Document Generation API returns a document with these template tags replaced by the actual data as per the json.](https://raw.githubusercontent.com/AdobeDocs/pdfservices-api-documentation/main/src/pages/overview/images/docgen-process.jpeg)

### Overview — Components of Document Generation

**Document Template**

Within Document Generation, what we call a document template is a ready-made, tailored file carrying a set of predefined template tags whose purpose is to produce dynamic content. As the Document Generation run proceeds, those template tags pick up values from the supplied input and are swapped out for the matching real data.

**Template Tags**

Template tags express the rules that mark where dynamic content belongs in a file. Drop these tags into a file (a docx, say) and that file becomes a document template.

To learn more, please visit [Template Tags](api-document-generation-api-5.md)

**Input Data**

At its core, Document Generation runs on data. The input you feed it drives which template tags in the document template get swapped out, and that in turn shapes the dynamic content of the finished file. Feed it a different set of input and the same template can yield a different document each time.

**Document Generation API**

Supply the [Document Generation API](https://raw.githubusercontent.com/AdobeDocs/pdfservices-api-documentation/main/src/pages/apis/index.md#tag/Document-Generation) with a document template (tags included) plus the input data, and it returns the finished document. It builds that output by substituting every template tag in the template with dynamic content drawn from the real values that correspond to the data you provided.

To learn more, please visit [QuickStarts](https://raw.githubusercontent.com/AdobeDocs/pdfservices-api-documentation/main/src/pages/overview/document-generation-api/quickstarts/index.md)

## Inline Images

By way of the `<img>` tag, you can embed inline images into the generated document through the json data.

### How It Works

The html img tag lets you point to an image url from inside the input json data.

You may hand over the image either as a base64-encoded string or as a publicly reachable URL.

Here's what that looks like once expressed as input data in JSON:

```json
{
  "ContentBlock": "sample image - <img src=\"https://documentcloud.adobe.com/dc-docgen-app/assets/dc_icon.png\">"
}
```

**OR**

```json
{
  "ContentBlock": "sample image - <img src=\"data:image/png;base64,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\">"
}
```

[Figure: Representation of sample json data](https://raw.githubusercontent.com/AdobeDocs/pdfservices-api-documentation/main/src/pages/overview/images/inline-image-json.png)

In the example above, the **ContentBlock** tag holds an **img** HTML element. That image gets fetched and inserted into the finished document, as the following illustration shows.
[Figure: Adding inline image in the document through json data using image `<img>` tag](https://raw.githubusercontent.com/AdobeDocs/pdfservices-api-documentation/main/src/pages/overview/images/inline-image.png)

**Note:** Only https urls are supported.

## Quickstart for Adobe Document Generation API (.NET)

We'll get going with a straightforward example: taking a Word document and using it as the basis for generating a receipt dynamically as a PDF. Across this guide, you'll be led step by step through everything it takes to build a program that pulls this off.

### Prerequisites

Here is what you'll need to follow this guide all the way through:

- [.NET: version 8.0 or above](https://dotnet.microsoft.com/en-us/download)
- [.Net SDK](https://dotnet.microsoft.com/en-us/download/dotnet/6.0)
- A build tool: Either Visual Studio or .NET Core CLI.
- An Adobe ID. If you do not have one, the credential setup will walk you through creating one.
- A way to edit code. No specific editor is required for this guide.

### Step One: Getting credentials

1. Start by pointing your browser at [https://acrobatservices.adobe.com/dc-integration-creation-app-cdn/main.html?api=document-generation-api](https://acrobatservices.adobe.com/dc-integration-creation-app-cdn/main.html?api=document-generation-api). Should you not yet be signed in to Adobe.com, go ahead and log in or register a new account. A personal email address works best here rather than a federated ID.

[Figure: Sign in](https://raw.githubusercontent.com/AdobeDocs/pdfservices-api-documentation/main/src/pages/overview/document-generation-api/quickstarts/dotnet/shot1.png)

2. Once you've signed up or logged in, the next prompt asks you to give your fresh credentials a name. Enter the name "New Project".

3. Switch the "Choose language" option over to ".Net".

4. Take note as well of the "Create personalized code sample." checkbox. Ticking it bundles a generous collection of samples in with your credentials, which can come in handy as a learning aid down the road.

5. Tick the box confirming you accept the developer terms, then press "Create credentials."

[Figure: Project setup](https://raw.githubusercontent.com/AdobeDocs/pdfservices-api-documentation/main/src/pages/overview/document-generation-api/quickstarts/dotnet/shot2-spc.png)

6. Once generated, your credentials download to your machine on their own:

[Figure: alt](https://raw.githubusercontent.com/AdobeDocs/pdfservices-api-documentation/main/src/pages/overview/document-generation-api/quickstarts/dotnet/shot3-spc.png)

### Step Two: Setting up the project

1. Head to your Downloads folder and locate the credentials ZIP, PDFServicesSDK-.NetSamples.zip. Extracting that archive yields a samples folder together with the `pdfservices-api-credentials.json` file.

[Figure: alt](https://raw.githubusercontent.com/AdobeDocs/pdfservices-api-documentation/main/src/pages/overview/document-generation-api/quickstarts/dotnet/shot5-spc.png)

2. Grab the `pdfservices-api-credentials.json` file and drop it into a brand-new directory.

3. Inside that new directory, add a file named `GeneratePDF.csproj`. Its job is to spell out our requirements and help shape the application we're putting together.

```xml

```

Our program will pick up a Word document, `receiptTemplate.docx` (downloadable from [here](https://raw.githubusercontent.com/AdobeDocs/pdfservices-api-documentation/main/static/receiptTemplate.docx)), merge it with data held in a JSON file, `receipt.json` (downloadable from [here](https://raw.githubusercontent.com/AdobeDocs/pdfservices-api-documentation/main/static/receipt.json)), and hand the result to the Acrobat Services API so a receipt PDF comes back.

4. Within your editor, open up the directory where you placed the credentials and added the `csproj` file earlier. Make a new file there called `Program.cs`.

At this point you're set to start writing code.

### Step Three: Creating the application

1. Begin with the Word template itself. Opening the file in Microsoft Word reveals a number of tokens scattered across it (flagged by the `{{` and `}}` markers).

[Figure: Example of tokens](https://raw.githubusercontent.com/AdobeDocs/pdfservices-api-documentation/main/src/pages/overview/document-generation-api/quickstarts/dotnet/shot10.png)

Once the Document Generation API runs, it swaps those tokens for the JSON data passed to the API. The tokens handle plain substitutions — `{{Customer.Name}}`, for one, gives way to a customer's name supplied through JSON. Dynamic tables are on offer too. The table in the Word template leans on invoice items to render, on the fly, whichever items happened to be ordered. You can likewise apply conditions to reveal or conceal content, and you'll spot two such conditions near the document's close. On top of that, simple arithmetic can run dynamically as well, which is what drives the "Grand Total".

2. Moving on, here's the sample data we'll be working with:

```json
{
  "author": "Gary Lee",
  "Company": {
    "Name": "Projected",
    "Address": "19718 Mandrake Way",
    "PhoneNumber": "+1-100000098"
  },
  "Invoice": {
    "Date": "January 15, 2021",
    "Number": 123,
    "Items": [
      {
        "item": "Gloves",
        "description": "Microwave gloves",
        "UnitPrice": 5,
        "Quantity": 2,
        "Total": 10
      },
      {
        "item": "Bowls",
        "description": "Microwave bowls",
        "UnitPrice": 10,
        "Quantity": 2,
        "Total": 20
      }
    ]
  },
  "Customer": {
    "Name": "Collins Candy",
    "Address": "315 Dunning Way",
    "PhoneNumber": "+1-200000046",
    "Email": "cc@abcdef.co.dw"
  },
  "Tax": 5,
  "Shipping": 5,
  "clause": {
    "overseas": "The shipment might take 5-10 more than informed."
  },
  "paymentMethod": "Cash"
}
```

See how the tokens in the Word file line up with the values held in our JSON. Our example sticks with a fixed dataset kept in a file, though real-world applications are free to source their data from wherever they like. With that, let's dig into the code.

3. First off, we'll pull in the dependencies we need:

```javascript
using System;
using System.IO;
using System.Reflection;
using Adobe.PDFServicesSDK;
using Adobe.PDFServicesSDK.auth;
using Adobe.PDFServicesSDK.exception;
using Adobe.PDFServicesSDK.io;
using Adobe.PDFServicesSDK.pdfjobs.jobs;
using Adobe.PDFServicesSDK.pdfjobs.parameters.documentmerge;
using Adobe.PDFServicesSDK.pdfjobs.results;
using log4net;
using log4net.Config;
using log4net.Repository;
using Newtonsoft.Json.Linq;
```

4. Now let's define our main class and `Main` method:

```javascript
namespace GeneratePDF
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

5. Define the `PDF_SERVICES_CLIENT_ID` and `PDF_SERVICES_CLIENT_SECRET` environment variables by issuing the commands below, swapping the `YOUR CLIENT ID` and `YOUR CLIENT SECRET` placeholders for the credentials found in your `pdfservices-api-credentials.json` file:

- **Windows:**

  - `set PDF_SERVICES_CLIENT_ID=<YOUR CLIENT ID>`
  - `set PDF_SERVICES_CLIENT_SECRET=<YOUR CLIENT SECRET>`

- **MacOS/Linux:**
  - `export PDF_SERVICES_CLIENT_ID=<YOUR CLIENT ID>`
  - `export PDF_SERVICES_CLIENT_SECRET=<YOUR CLIENT SECRET>`

6. After that, we build our credentials and put them to work spinning up a PDF Services instance

```javascript
// Initial setup, create credentials instance
ICredentials credentials = new ServicePrincipalCredentials(
        Environment.GetEnvironmentVariable("PDF_SERVICES_CLIENT_ID"),
        Environment.GetEnvironmentVariable("PDF_SERVICES_CLIENT_SECRET"));

// Creates a PDF Services instance
PDFServices pdfServices = new PDFServices(credentials);
```

7. With that done, we upload the asset and assemble the JSON data for the merge:

```javascript
IAsset asset = pdfServices.Upload(inputStream, PDFServicesMediaType.DOCX.GetMIMETypeValue());

String json = File.ReadAllText(@"receipt.json");
JObject jsonDataForMerge = JObject.Parse(json);
```

8. Next up, we put together the parameters along with the job:

```javascript
// Create parameters for the job
DocumentMergeParams documentMergeParams = DocumentMergeParams.DocumentMergeParamsBuilder()
    .WithJsonDataForMerge(jsonDataForMerge)
    .WithOutputFormat(OutputFormat.PDF)
    .Build();

// Creates a new job instance
DocumentMergeJob documentMergeJob = new DocumentMergeJob(asset, documentMergeParams);
```

What this block lays out is the operation we're running (a document merge, which is the SDK's term for Document Generation), aims it at our local JSON file, and declares the output as a PDF. It also references the Word file serving as the template.

9. This following block of code hands off the job and retrieves its result:

```javascript
// Submits the job and gets the job result
String location = pdfServices.Submit(documentMergeJob);
PDFServicesResponse<DocumentMergeResult> pdfServicesResponse =
    pdfServices.GetJobResult<DocumentMergeResult>(location, typeof(DocumentMergeResult));

// Get content from the resulting asset(s)
IAsset resultAsset = pdfServicesResponse.Result.Asset;
StreamAsset streamAsset = pdfServices.GetContent(resultAsset);
```

10. This next block writes the output out to the location you've specified:

```javascript
// Creating an output stream and copying stream asset's content to it
String outputFilePath = "/output/generatePDFOutput.pdf";
new FileInfo(Directory.GetCurrentDirectory() + outputFilePath).Directory.Create();
Stream outputStream = File.OpenWrite(Directory.GetCurrentDirectory() + outputFilePath);
streamAsset.Stream.CopyTo(outputStream);
outputStream.Close();
```

Running this carries out the Document Generation process and afterward writes the produced PDF file onto the file system.

[Figure: Example running at the command line](https://raw.githubusercontent.com/AdobeDocs/pdfservices-api-documentation/main/src/pages/overview/document-generation-api/quickstarts/dotnet/shot9.png)

Here's the complete application (`Program.cs`):

```javascript
using System.IO;
using System;
using System.Collections.Generic;
using log4net.Repository;
using log4net.Config;
using log4net;
using System.Reflection;
using Adobe.PDFServicesSDK;
using Adobe.PDFServicesSDK.auth;
using Adobe.PDFServicesSDK.pdfops;
using Adobe.PDFServicesSDK.io;
using Adobe.PDFServicesSDK.exception;
using Adobe.PDFServicesSDK.options.documentmerge;
using Newtonsoft.Json.Linq;

namespace GeneratePDF
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
                using Stream inputStream = File.OpenRead(@"receiptTemplate.docx");
                IAsset asset = pdfServices.Upload(inputStream, PDFServicesMediaType.DOCX.GetMIMETypeValue());

                // Setup input data for the document merge process
                String json = File.ReadAllText(@"receipt.json");
                JObject jsonDataForMerge = JObject.Parse(json);

                // Create parameters for the job
                DocumentMergeParams documentMergeParams = DocumentMergeParams.DocumentMergeParamsBuilder()
                    .WithJsonDataForMerge(jsonDataForMerge)
                    .WithOutputFormat(OutputFormat.DOCX)
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
                String outputFilePath = "/output/generatePDFOutput.pdf";
                new FileInfo(Directory.GetCurrentDirectory() + outputFilePath).Directory.Create();
                Stream outputStream = File.OpenWrite(Directory.GetCurrentDirectory() + outputFilePath);
                streamAsset.Stream.CopyTo(outputStream);
                outputStream.Close();

                Console.WriteLine("Saving asset at " + Directory.GetCurrentDirectory() + outputFilePath);
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

Having now pulled off your first operation, [review the documentation](https://developer.adobe.com/document-services/docs/overview/document-generation-api/) for plenty of additional examples, and don't hesitate to drop by our [forums](https://community.adobe.com/t5/document-services-apis/ct-p/ct-Document-Cloud-SDK) whenever questions come up. Keep in mind, too, that the samples you grabbed during credential creation are packed with demos of their own.

## See also

- [Quickstarts](api-pdf-extract-api.md)
