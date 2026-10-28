# Set up the Python PDF-to-Word project

Use a Python 3.10 or later interpreter compatible with the selected SDK. Extract `PDFServicesSDK-PythonSamples.zip` from the credential download and keep `pdfservices-api-credentials.json` securely in a project directory.

1. Open a terminal in that directory with the project's Python environment selected.
2. Install the SDK into that environment with `python -m pip install pdfservices-sdk==4.3.0`. Adobe's [sample requirements](https://github.com/adobe/pdfservices-python-sdk-samples/blob/main/requirements.txt) declare this version.
3. Download [Bodea Brochure.pdf](https://documentcloud.adobe.com/view-sdk-demo/PDFs/Bodea%20Brochure.pdf) into the working directory.
4. Save the complete [export application](python-application-creation.md) as `export_pdf_to_docx.py` in the same directory. This standalone layout uses that local filename; a full sample repository has its own source-directory layout.
5. Create the directory `output/ExportPDFToDOCX/`, which the complete application uses for its result.

Continue with the application procedure to set `PDF_SERVICES_CLIENT_ID` and `PDF_SERVICES_CLIENT_SECRET`, then run `python export_pdf_to_docx.py` with the same interpreter. The result path is `output/ExportPDFToDOCX/Bodea Brochure.docx` relative to the working directory.
