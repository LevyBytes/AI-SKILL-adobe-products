# Extract first level headings example setup

Open when running or adapting the linked extract first level headings example.

Use the dependencies and resource layout from the [captured source project](https://raw.githubusercontent.com/AdobeDocs/pdfservices-api-documentation/53d3c2030c0371e95a2edca19b888c4656140eb5/src/pages/overview/pdf-extract-api/quickstarts/extract-pdf/dotnet/index.md). Copy the linked modules together into that project’s matching example/package directory. Run from its project root so relative resource and output paths resolve as documented.

Supply your own PDF Services credentials through the environment variables or credentials object used by the example. The SDK, service access and input documents are external prerequisites; no credentials or sample binaries are bundled here.

These files illustrate source-backed API calls and recorded repairs. Local checks cover syntax and isolated mocks; they do not claim a successful live service request or native Java/.NET build.

## Example files

- [Program.cs](Program.cs)
- [imports.cs](imports.cs)
- [print-heading-output.cs](print-heading-output.cs)
- [configure-logging.cs](configure-logging.cs)

## Source implementation notes

- Configure the logging.
- Initial setup, create credentials instance
- Creates a PDF Services instance
- Creates an asset from source file and upload
- Create parameters for the job
- Creates a new job instance
- Submits the job and gets the job result
- Get content from the resulting asset(s)
- Creating output streams and copying stream asset's content to it

## Source licensing

- [Captured pdfservices-dotnet license](../../../../../assets/licenses/pdfservices-dotnet-license.txt)
