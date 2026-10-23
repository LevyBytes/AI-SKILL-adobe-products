# Quickstart for Adobe PDF Services API (Node.js) - Step Three: Creating the application

1. The starting point is pulling in the dependencies the code relies on:

Example setup and source:

- [export-brochure-docx setup and source](../examples/node/export-brochure-docx/export-brochure-docx-setup.md)

2. Set the environment variables `PDF_SERVICES_CLIENT_ID` and `PDF_SERVICES_CLIENT_SECRET` by running the following commands and replacing placeholders `YOUR CLIENT ID` and `YOUR CLIENT SECRET` with the credentials present in `pdfservices-api-credentials.json` file:

- **Windows:**

  - `set "PDF_SERVICES_CLIENT_ID=<YOUR CLIENT ID>"`
  - `set "PDF_SERVICES_CLIENT_SECRET=<YOUR CLIENT SECRET>"`

- **MacOS/Linux:**
  - `export PDF_SERVICES_CLIENT_ID='<YOUR CLIENT ID>'`
  - `export PDF_SERVICES_CLIENT_SECRET='<YOUR CLIENT SECRET>'`

3. With that done, we can build the credentials object and put it to use:


4. The asset upload comes next:


5. After that, we assemble the parameters and the job itself:


What this block establishes is the operation in play (an Export) and the parameter feeding the Export PDF job.
The lone parameter here is the destination format, namely DOCX.

6. The block that follows hands off the job and retrieves its result:


7. This next block writes the result out to the location you name:


Running this carries out the Export and then drops the resulting Word file onto disk.

[Figure: Example running at the command line](https://raw.githubusercontent.com/AdobeDocs/pdfservices-api-documentation/main/src/pages/overview/pdf-services-api/quickstarts/nodejs/shot9.png)

Taken as a whole, the finished script is this (`export.js`):
