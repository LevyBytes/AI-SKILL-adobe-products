# Linearize pdf example setup

Open when running or adapting the linked linearize pdf example.

The complete program is Adobe's [source sample](https://raw.githubusercontent.com/adobe/PDFServices.NET.SDK.Samples/4360e3f042cd3395e399c572490e411b0e3e314d/LinearizePDF/Program.cs). The [call pattern](../CallPattern.cs) shows the shared upload, submit, wait and download sequence; the [operations table](../operations.md) lists this example's job, parameter and result classes.

Supply your own PDF Services credentials through the environment variables or credentials object used by the example. The SDK, service access and input documents are external prerequisites; no credentials or sample binaries are bundled here.

## Source implementation notes

- This sample illustrates how to convert a PDF file into a Linearized (also known as "web optimized") PDF file.
- Such PDF files are optimized for incremental access in network environments.
- Configure the logging
- Initial setup, create credentials instance
- Creates a PDF Services instance
- Creates an asset(s) from source file(s) and upload
- Creates a new job instance
- Submits the job and gets the job result
- Get content from the resulting asset(s)
- Creating output streams and copying stream asset's content to it
- Generates a string containing a directory structure and file name for the output file.
