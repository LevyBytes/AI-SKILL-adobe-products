# Insert pdf pages example setup

Open when running or adapting the linked insert pdf pages example.

The complete program is Adobe's [source sample](https://raw.githubusercontent.com/adobe/pdfservices-java-sdk-samples/25f97d7b48719e0ed26878e734d2840b39870624/src/main/java/com/adobe/pdfservices/operation/samples/insertpages/InsertPDFPages.java). The [call pattern](../CallPattern.java) shows the shared upload, submit, wait and download sequence; the [operations table](../operations.md) lists this example's job, parameter and result classes.

Supply your own PDF Services credentials through the environment variables or credentials object used by the example. The SDK, service access and input documents are external prerequisites; no credentials or sample binaries are bundled here.

## Input paths

- `src/main/resources/baseInput.pdf`
- `src/main/resources/firstFileToInsertInput.pdf`
- `src/main/resources/secondFileToInsertInput.pdf`

## Source implementation notes

- This sample illustrates how to insert specific pages of multiple PDF files into a single PDF file. Refer to README.md for instructions on how to run the samples.
- Initialize the logger
- Initial setup, create credentials instance
- Creates a PDF Services instance
- Creates an asset(s) from source file(s) and upload
- Create parameters for the job
- Add the first asset as input to the
- params, along with its page ranges and base page
- Add the second asset as input to the params, along
- with base page
- Creates a new job instance
- Submit the job and gets the job result
- Get content from the resulting asset(s)
- Creates an output stream and copy stream asset's content to it
- Specify which pages of the first file are to be inserted in the base file
- Add pages 1 to 3
- Add page 4
- Generates a string containing a directory structure and file name for the output file
