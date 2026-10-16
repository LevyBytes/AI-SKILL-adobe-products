# Electronic seal example setup

Open when running or adapting the linked electronic seal example.

Use the dependencies and resource layout from the [captured source project](https://raw.githubusercontent.com/adobe/PDFServices.NET.SDK.Samples/4360e3f042cd3395e399c572490e411b0e3e314d/ElectronicSeal/Program.cs). Copy the linked modules together into that project’s matching example/package directory. Run from its project root so relative resource and output paths resolve as documented.

Supply your own PDF Services credentials through the environment variables or credentials object used by the example. The SDK, service access and input documents are external prerequisites; no credentials or sample binaries are bundled here.

These files illustrate source-backed API calls and recorded repairs. Local checks cover syntax and isolated mocks; they do not claim a successful live service request or native Java/.NET build.

## Example files

- [Program.cs](Program.cs)
- [imports.cs](imports.cs)
- [configure-logging.cs](configure-logging.cs)
- [create-output-file-path.cs](create-output-file-path.cs)

## Source implementation notes

- / <summary>
- / This sample illustrates how to apply electronic seal over the PDF document using default appearance options.
- / &lt;para&gt;
- / To know more about PDF Electronic Seal, please see the <a href="https://www.adobe.com/go/dc_eseal_overview_doc" target="_blank">documentation</a>.
- / &lt;/para&gt;
- / Refer to README.md for instructions on how to run the samples.
- / </summary>
- Initialize the logger.
- Configure the logging
- Initial setup, create credentials instance
- Creates a PDF Services instance
- Creates an asset(s) from source file(s) and upload
- Set the document level permission to be applied for output document
- Sets the Seal Field Name to be created in input PDF document.
- Sets the page number in input document for applying seal.
- Sets if seal should be visible or invisible.
- Creates FieldLocation instance and set the coordinates for applying signature
- Create FieldOptions instance with required details.
- Sets the name of TSP Provider being used.
- Sets the access token to be used to access TSP provider hosted APIs.
- Sets the credential ID.
- Sets the PIN generated while creating credentials.
- Creates CSCAuthContext instance using access token and token type.
- Create CertificateCredentials instance with required certificate details.
- Create parameters for the job
- Creates a new job instance
- Submits the job and gets the job result
- Get content from the resulting asset(s)
- Creating output streams and copying stream asset's content to it
- Generates a string containing a directory structure and file name for the output file.

## Source licensing

- [Captured pdfservices-dotnet license](../../../../../assets/licenses/pdfservices-dotnet-license.txt)
