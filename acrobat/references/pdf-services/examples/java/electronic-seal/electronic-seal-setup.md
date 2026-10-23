# Electronic seal example setup

Open when running or adapting the linked electronic seal example.

The complete program is Adobe's [source sample](https://raw.githubusercontent.com/adobe/pdfservices-java-sdk-samples/25f97d7b48719e0ed26878e734d2840b39870624/src/main/java/com/adobe/pdfservices/operation/samples/electronicseal/ElectronicSeal.java). The [call pattern](../CallPattern.java) shows the shared upload, submit, wait and download sequence; the [operations table](../operations.md) lists this example's job, parameter and result classes.

Supply your own PDF Services credentials through the environment variables or credentials object used by the example. The SDK, service access and input documents are external prerequisites; no credentials or sample binaries are bundled here.

## Input paths

- `src/main/resources/sampleInvoice.pdf`
- `src/main/resources/sampleSealImage.png`

## Source implementation notes

- This sample illustrates how to apply electronic seal over the PDF document using default appearance options. To know more about PDF Electronic Seal, please see the [documentation](https://www.adobe.com/go/dc_eseal_overview_doc). Refer to README.md for instructions on how to run the samples.
- Initialize the logger
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
- Sets the optional input seal image for PDFElectronicSealOperation instance
- Submit the job and gets the job result
- Get content from the resulting asset(s)
- Creates an output stream and copy stream asset's content to it
- Generates a string containing a directory structure and file name for the output file
