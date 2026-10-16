# Reorder pdf pages example setup

Open when running or adapting the linked reorder pdf pages example.

Use the dependencies and resource layout from the [captured source project](https://raw.githubusercontent.com/adobe/PDFServices.NET.SDK.Samples/4360e3f042cd3395e399c572490e411b0e3e314d/ReorderPDFPages/Program.cs). Copy the linked modules together into that project’s matching example/package directory. Run from its project root so relative resource and output paths resolve as documented.

Supply your own PDF Services credentials through the environment variables or credentials object used by the example. The SDK, service access and input documents are external prerequisites; no credentials or sample binaries are bundled here.

These files illustrate source-backed API calls and recorded repairs. Local checks cover syntax and isolated mocks; they do not claim a successful live service request or native Java/.NET build.

## Example files

- [Program.cs](Program.cs)

## Source implementation notes

- / <summary>
- / This sample illustrates how to reorder the pages in a PDF file.
- / &lt;para/&gt;
- / Refer to README.md for instructions on how to run the samples.
- / </summary>
- Configure the logging
- Initial setup, create credentials instance
- Creates a PDF Services instance
- Creates an asset from source file and upload
- Create parameters for the job
- Creates a new job instance
- Submits the job and gets the job result
- Get content from the resulting asset(s)
- Creating output streams and copying stream asset's content to it
- Specify order of the pages for an output document.
- Add pages 3 to 4.
- Add page 1.
- Generates a string containing a directory structure and file name for the output file.

## Source licensing

- [Captured pdfservices-dotnet license](../../../../../assets/licenses/pdfservices-dotnet-license.txt)
