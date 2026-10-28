# Extract first level headings example setup

Open when running or adapting the linked extract first level headings example.

The complete program is Adobe's [source sample](https://raw.githubusercontent.com/AdobeDocs/pdfservices-api-documentation/53d3c2030c0371e95a2edca19b888c4656140eb5/src/pages/overview/pdf-extract-api/quickstarts/extract-pdf/dotnet/index.md). The [call pattern](../CallPattern.cs) shows the shared upload, submit, wait and download sequence; the [operations table](../operations.md) lists this example's job, parameter and result classes.

Supply your own PDF Services credentials through the environment variables or credentials object used by the example. The SDK, service access and input documents are external prerequisites; no credentials or sample binaries are bundled here.

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
