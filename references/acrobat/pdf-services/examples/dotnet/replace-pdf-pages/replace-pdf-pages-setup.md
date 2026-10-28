# Replace pdf pages example setup

Open when running or adapting the linked replace pdf pages example.

The complete program is Adobe's [source sample](https://raw.githubusercontent.com/adobe/PDFServices.NET.SDK.Samples/4360e3f042cd3395e399c572490e411b0e3e314d/ReplacePDFPages/Program.cs). The [call pattern](../CallPattern.cs) shows the shared upload, submit, wait and download sequence; the [operations table](../operations.md) lists this example's job, parameter and result classes.

Supply your own PDF Services credentials through the environment variables or credentials object used by the example. The SDK, service access and input documents are external prerequisites; no credentials or sample binaries are bundled here.

## Source implementation notes

- This sample illustrates how to replace specific pages in a PDF file.
- Configure the logging
- Initial setup, create credentials instance
- Creates a PDF Services instance
- Creates an asset from source file and upload
- Create parameters for the job
- Creates a new job instance
- Submits the job and gets the job result
- Get content from the resulting asset(s)
- Creating output streams and copying stream asset's content to it
- Specify pages of the first file for replacing the page of base PDF file.
- Add pages 1 to 3.
- Add page 4.
- Generates a string containing a directory structure and file name for the output file.
