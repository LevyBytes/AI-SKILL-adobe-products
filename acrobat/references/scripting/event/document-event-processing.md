# Document Event Processing

Opening a document fires the Doc/Open event first. The viewer scans functions and runs any top-level scripts that are exposed. After that, when the PDF's AcroForm dictionary carries a NeedAppearances entry set to true, every form field's formatting script runs. (Consult the PDF Reference.) The Page/Close event comes last.

Note


Anyone authoring PDFs that hold form fields with NeedAppearances set to true should run a Save As before publishing them online. The Save As step builds the form appearances and stores them inside the file. That lets Adobe Reader open the document faster when it runs inside a web browser.
