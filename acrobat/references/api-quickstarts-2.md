# Nodejs, Python

> Adobe Acrobat reference. Original prose; identifiers preserved verbatim.

## Overview

Covers: Quickstart for Adobe PDF Services API (Node.js) — Prerequisites; Quickstart for Adobe PDF Services API (Python) — Prerequisites.

## Quickstart for Adobe PDF Services API (Node.js) — Prerequisites

Here's what has to be in place before you can follow this guide:

- [Node.js](https://nodejs.org) - You'll need Node.js version 18.0 or a later release.
- An Adobe ID. Lacking one isn't a problem — the credential setup guides you through making it.
- Some means of editing code. This guide doesn't tie you to any particular editor.

### Quickstart for Adobe PDF Services API (Node.js) — Step One: Getting credentials

1. Kick things off by pointing your browser at [https://acrobatservices.adobe.com/dc-integration-creation-app-cdn/main.html?api=pdf-services-api](https://acrobatservices.adobe.com/dc-integration-creation-app-cdn/main.html?api=pdf-services-api). Should you not yet be signed in to Adobe.com, you'll have to log in or register a fresh user. A personal email account is the suggested choice here rather than a federated ID.

[Figure: Sign in](https://raw.githubusercontent.com/AdobeDocs/pdfservices-api-documentation/main/src/pages/overview/pdf-services-api/quickstarts/nodejs/shot1.png)

2. Once you've signed up or logged in, the next prompt asks you to title your new credentials. Give it the name "New Project".

3. Switch the "Choose language" setting over to "Node.js".

4. Take note as well of the checkbox labeled "Create personalized code sample." Ticking it bundles a broad collection of samples in with your credentials, which can come in handy for digging deeper down the line.

5. Tick the checkbox indicating that you accept the developer terms, then hit "Create credentials."

[Figure: Project setup](https://raw.githubusercontent.com/AdobeDocs/pdfservices-api-documentation/main/src/pages/overview/pdf-services-api/quickstarts/nodejs/shot2-spc.png)

6. The moment your credentials exist, a download of them starts on its own:

[Figure: alt](https://raw.githubusercontent.com/AdobeDocs/pdfservices-api-documentation/main/src/pages/overview/pdf-services-api/quickstarts/nodejs/shot3-spc.png)

### Quickstart for Adobe PDF Services API (Node.js) — Step Two: Setting up the project

1. Look inside your Downloads folder for the credentials ZIP, PDFServicesSDK-Node.jsSamples.zip. Extracting it reveals a samples folder plus the `pdfservices-api-credentials.json` file.

[Figure: alt](https://raw.githubusercontent.com/AdobeDocs/pdfservices-api-documentation/main/src/pages/overview/pdf-services-api/quickstarts/nodejs/shot5-spc.png)

2. Move the `pdfservices-api-credentials.json` into a directory you've just made. Bear in mind that these credential files matter and belong somewhere safe.

3. From the command line, switch into the directory you set up, then spin up a fresh Node.js project using `npm init -y`

[Figure: alt](https://raw.githubusercontent.com/AdobeDocs/pdfservices-api-documentation/main/src/pages/overview/pdf-services-api/quickstarts/nodejs/shot7.png)

4. Pull in the Adobe PDF Services Node.js SDK by running `npm install --save @adobe/pdfservices-node-sdk` at the command line.

5. Add a package that helps us handle ZIP files. Run `npm install --save adm-zip`.

By now we've pulled in the Node.js SDK for the Adobe PDF Services API as a project dependency and brought our credential files over.

The PDF our application works on is `Bodea Brochure.pdf` (grab it from [here](https://documentcloud.adobe.com/view-sdk-demo/PDFs/Bodea%20Brochure.pdf)), and the goal is to turn it into a Microsoft Word document named `Bodea Brochure.docx`.

6. Inside your editor, open the directory where you copied the credentials earlier. Add a new file, `export.js`.

With that, coding can begin.

### Quickstart for Adobe PDF Services API (Node.js) — Step Three: Creating the application

1. The starting point is pulling in the dependencies the code relies on:

```js
const {
  ServicePrincipalCredentials,
  PDFServices,
  MimeType,
  ExportPDFParams,
  ExportPDFTargetFormat,
  ExportPDFJob,
  ExportPDFResult,
} = require("@adobe/pdfservices-node-sdk");
const fs = require("fs");
```

2. Set the environment variables `PDF_SERVICES_CLIENT_ID` and `PDF_SERVICES_CLIENT_SECRET` by running the following commands and replacing placeholders `YOUR CLIENT ID` and `YOUR CLIENT SECRET` with the credentials present in `pdfservices-api-credentials.json` file:

- **Windows:**

  - `set PDF_SERVICES_CLIENT_ID=<YOUR CLIENT ID>`
  - `set PDF_SERVICES_CLIENT_SECRET=<YOUR CLIENT SECRET>`

- **MacOS/Linux:**
  - `export PDF_SERVICES_CLIENT_ID=<YOUR CLIENT ID>`
  - `export PDF_SERVICES_CLIENT_SECRET=<YOUR CLIENT SECRET>`

3. With that done, we can build the credentials object and put it to use:

```js
// Initial setup, create credentials instance
const credentials = new ServicePrincipalCredentials({
  clientId: process.env.PDF_SERVICES_CLIENT_ID,
  clientSecret: process.env.PDF_SERVICES_CLIENT_SECRET,
});

// Creates a PDF Services instance
const pdfServices = new PDFServices({ credentials });
```

4. The asset upload comes next:

```js
const inputAsset = await pdfServices.upload({
  readStream,
  mimeType: MimeType.PDF,
});
```

5. After that, we assemble the parameters and the job itself:

```js
// Create parameters for the job
const params = new ExportPDFParams({
  targetFormat: ExportPDFTargetFormat.DOCX,
});

// Creates a new job instance
const job = new ExportPDFJob({ inputAsset, params });
```

What this block establishes is the operation in play (an Export) and the parameter feeding the Export PDF job.
The lone parameter here is the destination format, namely DOCX.

6. The block that follows hands off the job and retrieves its result:

```js
// Submit the job and get the job result
const pollingURL = await pdfServices.submit({ job });
const pdfServicesResponse = await pdfServices.getJobResult({
  pollingURL,
  resultType: ExportPDFResult,
});

// Get content from the resulting asset(s)
const resultAsset = pdfServicesResponse.result.asset;
const streamAsset = await pdfServices.getContent({ asset: resultAsset });
```

7. This next block writes the result out to the location you name:

```js
// Creates an output stream and copy stream asset's content to it
const outputStream = fs.createWriteStream("./Bodea Brochure.docx");
streamAsset.readStream.pipe(outputStream);
```

Running this carries out the Export and then drops the resulting Word file onto disk.

[Figure: Example running at the command line](https://raw.githubusercontent.com/AdobeDocs/pdfservices-api-documentation/main/src/pages/overview/pdf-services-api/quickstarts/nodejs/shot9.png)

Taken as a whole, the finished script is this (`export.js`):

```js
const {
  ServicePrincipalCredentials,
  PDFServices,
  MimeType,
  ExportPDFParams,
  ExportPDFTargetFormat,
  ExportPDFJob,
  ExportPDFResult,
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
    readStream = fs.createReadStream("./Bodea Brochure.pdf");
    const inputAsset = await pdfServices.upload({
      readStream,
      mimeType: MimeType.PDF,
    });

    // Create parameters for the job
    const params = new ExportPDFParams({
      targetFormat: ExportPDFTargetFormat.DOCX,
    });

    // Creates a new job instance
    const job = new ExportPDFJob({ inputAsset, params });

    // Submit the job and get the job result
    const pollingURL = await pdfServices.submit({ job });
    const pdfServicesResponse = await pdfServices.getJobResult({
      pollingURL,
      resultType: ExportPDFResult,
    });

    // Get content from the resulting asset(s)
    const resultAsset = pdfServicesResponse.result.asset;
    const streamAsset = await pdfServices.getContent({ asset: resultAsset });

    // Creates an output stream and copy stream asset's content to it
    const outputFilePath = "./Bodea Brochure.docx";
    console.log(`Saving asset at ${outputFilePath}`);
    const outputStream = fs.createWriteStream(outputFilePath);
    streamAsset.readStream.pipe(outputStream);
  } catch (err) {
    console.log("Exception encountered while executing operation", err);
  } finally {
    readStream?.destroy();
  }
})();
```

## Quickstart for Adobe PDF Services API (Python) — Prerequisites

Here's what has to be in place before you can follow this guide:

- [Python](https://www.python.org/downloads/) - You'll need Python 3.10 or a later version.
- An Adobe ID. Lacking one isn't a problem — the credential setup guides you through making it.
- Some means of editing code. This guide doesn't tie you to any particular editor.

### Quickstart for Adobe PDF Services API (Python) — Step One: Getting credentials

1. Kick things off by pointing your browser at [https://acrobatservices.adobe.com/dc-integration-creation-app-cdn/main.html?api=pdf-services-api](https://acrobatservices.adobe.com/dc-integration-creation-app-cdn/main.html?api=pdf-services-api). Should you not yet be signed in to Adobe.com, you'll have to log in or register a fresh user. A personal email account is the suggested choice here rather than a federated ID.

[Figure: Sign in](https://raw.githubusercontent.com/AdobeDocs/pdfservices-api-documentation/main/src/pages/overview/pdf-services-api/quickstarts/python/shot1.png)

2. Once you've signed up or logged in, the next prompt asks you to title your new credentials. Give it the name "New Project".

3. Switch the "Choose language" setting over to "Python".

4. Take note as well of the checkbox labeled "Create personalized code sample." Ticking it bundles a broad collection of samples in with your credentials, which can come in handy for digging deeper down the line.

5. Tick the checkbox indicating that you accept the developer terms, then hit "Create credentials."

[Figure: Project setup](https://raw.githubusercontent.com/AdobeDocs/pdfservices-api-documentation/main/src/pages/overview/pdf-services-api/quickstarts/python/shot2-spc.png)

6. The moment your credentials exist, a download of them starts on its own:

[Figure: Credentials](https://raw.githubusercontent.com/AdobeDocs/pdfservices-api-documentation/main/src/pages/overview/pdf-services-api/quickstarts/python/shot3-spc.png)

### Quickstart for Adobe PDF Services API (Python) — Step Two: Setting up the project

1. Inside your Downloads folder, locate the credentials archive named PDFServicesSDK-PythonSamples.zip. Extracting it reveals a samples folder alongside the `pdfservices-api-credentials.json` file.

[Figure: Samples](https://raw.githubusercontent.com/AdobeDocs/pdfservices-api-documentation/main/src/pages/overview/pdf-services-api/quickstarts/python/shot5-spc.png)

2. Move the `pdfservices-api-credentials.json` file into a freshly made directory. Treat these credential files as sensitive material and keep them somewhere secure.

3. Open a terminal, switch into the directory you just made, and pull in the Python SDK by issuing this command: `pip install pdfservices-sdk`.

[Figure: alt](https://raw.githubusercontent.com/AdobeDocs/pdfservices-api-documentation/main/src/pages/overview/pdf-services-api/quickstarts/python/shot7.png)

That completes adding the Adobe PDF Services API Python SDK as a project dependency and bringing the credential files across.

The program we build reads a PDF named `Bodea Brochure.pdf` (you can grab it [here](https://documentcloud.adobe.com/view-sdk-demo/PDFs/Bodea%20Brochure.pdf)) and turns it into a Microsoft Word file called `Bodea Brochure.docx`.

4. Within your editor, open the folder that now holds the copied credentials, then add a fresh file named `export_pdf_to_docx.py`.

With that in place, the coding can start.

### Quickstart for Adobe PDF Services API (Python) — Step Three: Creating the application

1. The first thing to do is pull in every dependency the script relies on:

```python
from datetime import datetime

from adobe.pdfservices.operation.auth.service_principal_credentials import ServicePrincipalCredentials
from adobe.pdfservices.operation.exception.exceptions import ServiceApiException, ServiceUsageException, SdkException
from adobe.pdfservices.operation.io.cloud_asset import CloudAsset
from adobe.pdfservices.operation.io.stream_asset import StreamAsset
from adobe.pdfservices.operation.pdf_services import PDFServices
from adobe.pdfservices.operation.pdf_services_media_type import PDFServicesMediaType
from adobe.pdfservices.operation.pdfjobs.jobs.export_pdf_job import ExportPDFJob
from adobe.pdfservices.operation.pdfjobs.params.export_pdf.export_pdf_params import ExportPDFParams
from adobe.pdfservices.operation.pdfjobs.params.export_pdf.export_pdf_target_format import ExportPDFTargetFormat
from adobe.pdfservices.operation.pdfjobs.result.export_pdf_result import ExportPDFResult
```

2. Define the two environment variables `PDF_SERVICES_CLIENT_ID` and `PDF_SERVICES_CLIENT_SECRET` by executing the commands below, swapping the placeholders `YOUR CLIENT ID` and `YOUR CLIENT SECRET` for the actual values found inside the `pdfservices-api-credentials.json` file:

- **Windows:**

  - `set PDF_SERVICES_CLIENT_ID=<YOUR CLIENT ID>`
  - `set PDF_SERVICES_CLIENT_SECRET=<YOUR CLIENT SECRET>`

- **MacOS/Linux:**
  - `export PDF_SERVICES_CLIENT_ID=<YOUR CLIENT ID>`
  - `export PDF_SERVICES_CLIENT_SECRET=<YOUR CLIENT SECRET>`

3. With those set, build the credentials object and put it to work:

```python

### Initial setup, create credentials instance

credentials = ServicePrincipalCredentials(
    client_id=os.getenv('PDF_SERVICES_CLIENT_ID'),
    client_secret=os.getenv('PDF_SERVICES_CLIENT_SECRET'))

### Creates a PDF Services instance

pdf_services = PDFServices(credentials=credentials)
```

4. Next, build an asset out of the source file and send it up.

```python
file = open('./Bodea Brochure.pdf', 'rb')
input_stream = file.read()
file.close()

### Creates an asset(s) from source file(s) and upload

input_asset = pdf_services.upload(input_stream=input_stream, mime_type=PDFServicesMediaType.PDF)
```

5. With the asset uploaded, assemble the parameters together with the job:

```python

### Create parameters for the job

export_pdf_params = ExportPDFParams(target_format=ExportPDFTargetFormat.DOCX)

### Creates a new job instance

export_pdf_job = ExportPDFJob(input_asset=input_asset, export_pdf_params=export_pdf_params)
```

These lines declare the operation being performed — an Export — and supply the configuration for the Export PDF job. Here the lone setting is the destination format, which is DOCX.

6. The following block hands off the job and retrieves its result:

```python

### Submit the job and gets the job result

location = pdf_services.submit(export_pdf_job)
pdf_services_response = pdf_services.get_job_result(location, ExportPDFResult)

### Get content from the resulting asset(s)

result_asset: CloudAsset = pdf_services_response.get_result().get_asset()
stream_asset: StreamAsset = pdf_services.get_content(result_asset)
```

7. This block then writes the result out to the chosen path:

```python

### Creates an output stream and copy stream asset's content to it

output_file_path = "./Bodea Brochure.docx"
with open(output_file_path, "wb") as file:
    file.write(stream_asset.get_input_stream())
```

[Figure: alt](https://raw.githubusercontent.com/AdobeDocs/pdfservices-api-documentation/main/src/pages/overview/pdf-services-api/quickstarts/python/shot8.png)

Below is the full program (`src/exportpdf/export_pdf_to_docx.py`):

```python
from datetime import datetime

from adobe.pdfservices.operation.auth.service_principal_credentials import ServicePrincipalCredentials
from adobe.pdfservices.operation.exception.exceptions import ServiceApiException, ServiceUsageException, SdkException
from adobe.pdfservices.operation.io.cloud_asset import CloudAsset
from adobe.pdfservices.operation.io.stream_asset import StreamAsset
from adobe.pdfservices.operation.pdf_services import PDFServices
from adobe.pdfservices.operation.pdf_services_media_type import PDFServicesMediaType
from adobe.pdfservices.operation.pdfjobs.jobs.export_pdf_job import ExportPDFJob
from adobe.pdfservices.operation.pdfjobs.params.export_pdf.export_pdf_params import ExportPDFParams
from adobe.pdfservices.operation.pdfjobs.params.export_pdf.export_pdf_target_format import ExportPDFTargetFormat
from adobe.pdfservices.operation.pdfjobs.result.export_pdf_result import ExportPDFResult

### Initialize the logger

logging.basicConfig(level=logging.INFO)

class ExportPDFToDOCX:
    def __init__(self):
        try:
            file = open('./Bodea Brochure.pdf', 'rb')
            input_stream = file.read()
            file.close()

### Creates a new job instance

export_pdf_job = ExportPDFJob(input_asset=input_asset, export_pdf_params=export_pdf_params)

### Submit the job and gets the job result

location = pdf_services.submit(export_pdf_job)
            pdf_services_response = pdf_services.get_job_result(location, ExportPDFResult)

### Creates an output stream and copy stream asset's content to it

output_file_path = 'output/ExportPDFToDOCX/Bodea Brochure.docx'
            with open(output_file_path, "wb") as file:
                file.write(stream_asset.get_input_stream())

        except (ServiceApiException, ServiceUsageException, SdkException) as e:
            logging.exception(f'Exception encountered while executing operation: {e}')

if __name__ == "__main__":
    ExportPDFToDOCX()
```

### Creates an output stream and copy stream asset's content to it — Next Steps

Having completed your first operation, browse the [documentation](https://developer.adobe.com/document-services/docs/overview/pdf-services-api/) for plenty of additional examples, and post any questions on our [forums](https://community.adobe.com/t5/acrobat-services-api/ct-p/ct-Document-Cloud-SDK?page=1&sort=latest_replies&filter=all&lang=all&tabid=discussions&topics=label-accessibilityauto-tagapi). Keep in mind, too, that the sample bundle you grabbed during credential setup ships with numerous demos of its own.
