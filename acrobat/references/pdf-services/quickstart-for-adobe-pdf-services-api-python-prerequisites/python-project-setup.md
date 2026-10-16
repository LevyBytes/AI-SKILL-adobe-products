# Quickstart for Adobe PDF Services API (Python) — Step Two: Setting up the project

1. Inside your Downloads folder, locate the credentials archive named PDFServicesSDK-PythonSamples.zip. Extracting it reveals a samples folder alongside the `pdfservices-api-credentials.json` file.

[Figure: Samples](https://raw.githubusercontent.com/AdobeDocs/pdfservices-api-documentation/main/src/pages/overview/pdf-services-api/quickstarts/python/shot5-spc.png)

2. Move the `pdfservices-api-credentials.json` file into a freshly made directory. Treat these credential files as sensitive material and keep them somewhere secure.

3. Open a terminal, switch into the directory you just made, and pull in the Python SDK by issuing this command: `pip install pdfservices-sdk`.

[Figure: alt](https://raw.githubusercontent.com/AdobeDocs/pdfservices-api-documentation/main/src/pages/overview/pdf-services-api/quickstarts/python/shot7.png)

That completes adding the Adobe PDF Services API Python SDK as a project dependency and bringing the credential files across.

The program we build reads a PDF named `Bodea Brochure.pdf` (you can grab it [here](https://documentcloud.adobe.com/view-sdk-demo/PDFs/Bodea%20Brochure.pdf)) and turns it into a Microsoft Word file called `Bodea Brochure.docx`.

4. Within your editor, open the folder that now holds the copied credentials, then add a fresh file named `export_pdf_to_docx.py`.

With that in place, the coding can start.
