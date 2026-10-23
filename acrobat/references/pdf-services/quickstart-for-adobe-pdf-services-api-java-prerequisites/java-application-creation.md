# Quickstart for Adobe PDF Services API (Java) - Step Three: Creating the application

1. The starting point is pulling in the dependencies the code relies on:

Example setup and source:

- [export-brochure-docx setup and source](../examples/java/export-brochure-docx/export-brochure-docx-setup.md)

2. Next, lay out our main class:


3. Set the environment variables `PDF_SERVICES_CLIENT_ID` and `PDF_SERVICES_CLIENT_SECRET` by running the following commands and replacing placeholders `YOUR CLIENT ID` and `YOUR CLIENT SECRET` with the credentials present in `pdfservices-api-credentials.json` file:

- **Windows:**

  - `set "PDF_SERVICES_CLIENT_ID=<YOUR CLIENT ID>"`
  - `set "PDF_SERVICES_CLIENT_SECRET=<YOUR CLIENT SECRET>"`

- **MacOS/Linux:**
  - `export PDF_SERVICES_CLIENT_ID='<YOUR CLIENT ID>'`
  - `export PDF_SERVICES_CLIENT_SECRET='<YOUR CLIENT SECRET>'`

4. With that done, we can build the credentials object and put it to use:


5. The asset upload comes next:


6. After that, we assemble the parameters and the job itself:


What this block establishes is the operation in play (an Export) and the parameter feeding the Export PDF job. The lone parameter here is the destination format, namely DOCX.

7. The block that follows hands off the job and retrieves its result:


8. This next block writes the result out to the location you name:


Running this carries out the Export and then drops the resulting Word file onto disk.

[Figure: Example running in the command line](https://raw.githubusercontent.com/AdobeDocs/pdfservices-api-documentation/main/src/pages/overview/pdf-services-api/quickstarts/java/shot9.png)

Assembled in full, the program looks like this (`src/main/java/ExportPDFToWord.java`):


## See also

- [Quickstarts](../quickstarts.md)
