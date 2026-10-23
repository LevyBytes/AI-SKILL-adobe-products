# Merge document to pdf example setup

Open when running or adapting the linked merge document to pdf example.

The complete program is Adobe's [source sample](https://raw.githubusercontent.com/adobe/pdfservices-java-sdk-samples/25f97d7b48719e0ed26878e734d2840b39870624/src/main/java/com/adobe/pdfservices/operation/samples/documentmerge/MergeDocumentToPDF.java). The [call pattern](../CallPattern.java) shows the shared upload, submit, wait and download sequence; the [operations table](../operations.md) lists this example's job, parameter and result classes.

Supply your own PDF Services credentials through the environment variables or credentials object used by the example. The SDK, service access and input documents are external prerequisites; no credentials or sample binaries are bundled here.

## Input paths

- `src/main/resources/salesOrder.json`
- `src/main/resources/salesOrderTemplate.docx`

## Source implementation notes

- This sample illustrates how to merge the Word based document template with the input JSON data to generate the output document in the PDF format. To know more about document generation and document templates, please see the [documentation](http://www.adobe.com/go/dcdocgen_overview_doc) Refer to README.md for instructions on how to run the samples.
- Initialize the logger
- Initial setup, create credentials instance
- Creates a PDF Services instance
- Creates an asset(s) from source file(s) and upload
- Setup input data for the document merge process
- Create parameters for the job
- Creates a new job instance
- Submit the job and gets the job result
- Get content from the resulting asset(s)
- Creates an output stream and copy stream asset's content to it
- Generates a string containing a directory structure and file name for the output file
