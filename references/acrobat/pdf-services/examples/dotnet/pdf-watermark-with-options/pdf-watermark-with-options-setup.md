# Pdf watermark with options example setup

Open when running or adapting the linked pdf watermark with options example.

The complete program is Adobe's [source sample](https://raw.githubusercontent.com/adobe/PDFServices.NET.SDK.Samples/4360e3f042cd3395e399c572490e411b0e3e314d/PDFWatermarkWithOptions/Program.cs). The [call pattern](../CallPattern.cs) shows the shared upload, submit, wait and download sequence; the [operations table](../operations.md) lists this example's job, parameter and result classes.

Supply your own PDF Services credentials through the environment variables or credentials object used by the example. The SDK, service access and input documents are external prerequisites; no credentials or sample binaries are bundled here.

## Source implementation notes

- This sample illustrates how to perform PDF Watermark operation on a PDF file.
- Note that PDF Watermark operation on a PDF file results in a PDF file.
- Configure the logging
- Initial setup, create credentials instance
- Creates an asset(s) from source file(s) and upload
- Creates a watermark asset from source file(s) and upload
- Watermark pages of the document (as specified by PageRanges).
- Creates PDF Watermark appearance option
- Create parameters for the job
- Submits the job and gets the job result
- Get content from the resulting asset(s)
- Creating output streams and copying stream asset's content to it
- Specify pages for deletion
- Add page 1
- Add pages 3 to 4
