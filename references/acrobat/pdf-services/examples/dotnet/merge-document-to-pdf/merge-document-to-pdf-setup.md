# Merge document to pdf example setup

Open when running or adapting the linked merge document to pdf example.

The complete program is Adobe's [source sample](https://raw.githubusercontent.com/adobe/PDFServices.NET.SDK.Samples/4360e3f042cd3395e399c572490e411b0e3e314d/MergeDocumentToPDF/Program.cs). The [call pattern](../CallPattern.cs) shows the shared upload, submit, wait and download sequence; the [operations table](../operations.md) lists this example's job, parameter and result classes.

Supply your own PDF Services credentials through the environment variables or credentials object used by the example. The SDK, service access and input documents are external prerequisites; no credentials or sample binaries are bundled here.

## Source implementation notes

- This sample illustrates how to merge the Word based document template with the input JSON data to generate the output document in the PDF format.
- To know more about document generation and document templates, please see the [documentation](http://www.adobe.com/go/dcdocgen_overview_doc)
- /
- Configure the logging
- Initial setup, create credentials instance
- Creates a PDF Services instance
- Creates an asset from source file and upload
- Setup input data for the document merge process
- Create parameters for the job
- Creates a new job instance
- Submits the job and gets the job result
- Get content from the resulting asset(s)
- Creating output streams and copying stream asset's content to it
- Generates a string containing a directory structure and file name for the output file.
