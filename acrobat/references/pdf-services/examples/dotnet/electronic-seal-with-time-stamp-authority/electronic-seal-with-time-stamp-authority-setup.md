# Electronic seal with time stamp authority example setup

Open when running or adapting the linked electronic seal with time stamp authority example.

The complete program is Adobe's [source sample](https://raw.githubusercontent.com/adobe/PDFServices.NET.SDK.Samples/4360e3f042cd3395e399c572490e411b0e3e314d/ElectronicSealWithTimeStampAuthority/Program.cs). The [call pattern](../CallPattern.cs) shows the shared upload, submit, wait and download sequence; the [operations table](../operations.md) lists this example's job, parameter and result classes.

Supply your own PDF Services credentials through the environment variables or credentials object used by the example. The SDK, service access and input documents are external prerequisites; no credentials or sample binaries are bundled here.

## Source implementation notes

- This sample illustrates how to apply electronic seal over the PDF document using time stamp authority options.
- To know more about PDF Electronic Seal, please see the [documentation](https://www.adobe.com/go/dc_eseal_overview_doc).
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
- Create TSABasicAuthCredentials using username and password
- Set the Time Stamp Authority Options using url and TSA Auth credentials
- Create parameters for the job
- Creates a new job instance
- Submits the job and gets the job result
- Get content from the resulting asset(s)
- Creating output streams and copying stream asset's content to it
- Generates a string containing a directory structure and file name for the output file.
