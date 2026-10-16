# Quickstart for Adobe PDF Services API (Python) — Step Three: Creating the application

1. The first thing to do is pull in every dependency the script relies on:

Complete example files:

- [export_brochure_docx.py](../examples/python/export-brochure-docx/export_brochure_docx.py)

2. Define the two environment variables `PDF_SERVICES_CLIENT_ID` and `PDF_SERVICES_CLIENT_SECRET` by executing the commands below, swapping the placeholders `YOUR CLIENT ID` and `YOUR CLIENT SECRET` for the actual values found inside the `pdfservices-api-credentials.json` file:

- **Windows:**

  - `set "PDF_SERVICES_CLIENT_ID=<YOUR CLIENT ID>"`
  - `set "PDF_SERVICES_CLIENT_SECRET=<YOUR CLIENT SECRET>"`

- **MacOS/Linux:**
  - `export PDF_SERVICES_CLIENT_ID='<YOUR CLIENT ID>'`
  - `export PDF_SERVICES_CLIENT_SECRET='<YOUR CLIENT SECRET>'`

3. With those set, build the credentials object and put it to work:


4. Next, build an asset out of the source file and send it up.


5. With the asset uploaded, assemble the parameters together with the job:


These lines declare the operation being performed — an Export — and supply the configuration for the Export PDF job. Here the lone setting is the destination format, which is DOCX.

6. The following block hands off the job and retrieves its result:


7. This block then writes the result out to the chosen path:


[Figure: alt](https://raw.githubusercontent.com/AdobeDocs/pdfservices-api-documentation/main/src/pages/overview/pdf-services-api/quickstarts/python/shot8.png)

Below is the full program (`src/exportpdf/export_pdf_to_docx.py`):
