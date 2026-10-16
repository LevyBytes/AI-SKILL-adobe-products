# The Effect of PDF Permissions on Adobe PDF Services API

Other than when the PDF Extract API and the Export PDF API turn PDFs into images, Acrobat Services will not process PDF files holding any permission set to false, and they return a 400 error.

When "copying" is set to true, PDF Extract API will go ahead and process the PDF.

Export PDF API will run the PDF-to-images conversion once "copying", "page_extraction", "document_assembly", and "printing" are all true.
