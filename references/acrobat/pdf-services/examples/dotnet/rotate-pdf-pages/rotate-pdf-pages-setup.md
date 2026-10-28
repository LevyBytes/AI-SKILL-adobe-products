# Rotate pdf pages example setup

Open when running or adapting the linked rotate pdf pages example.

The complete program is Adobe's [source sample](https://raw.githubusercontent.com/adobe/PDFServices.NET.SDK.Samples/4360e3f042cd3395e399c572490e411b0e3e314d/RotatePDFPages/Program.cs). The [call pattern](../CallPattern.cs) shows the shared upload, submit, wait and download sequence; the [operations table](../operations.md) lists this example's job, parameter and result classes.

Supply your own PDF Services credentials through the environment variables or credentials object used by the example. The SDK, service access and input documents are external prerequisites; no credentials or sample binaries are bundled here.

## Source implementation notes

- This sample illustrates how to rotate pages in a PDF file.
- Configure the logging
- Initial setup, create credentials instance
- Creates a PDF Services instance
- Creates an asset from source file and upload
- Sets angle by 90 degrees (in clockwise direction) for rotating the specified pages of
- the input PDF file.
- Sets angle by 180 degrees (in clockwise direction) for rotating the specified pages of
- the input PDF file.
- Create parameters for the job
- Creates a new job instance
- Submits the job and gets the job result
- Get content from the resulting asset(s)
- Creating output streams and copying stream asset's content to it
- Specify pages for rotation.
- Add page 1.
- Add pages 3 to 4.
- Specify pages for rotation.
- Add page 2.
- Generates a string containing a directory structure and file name for the output file.
