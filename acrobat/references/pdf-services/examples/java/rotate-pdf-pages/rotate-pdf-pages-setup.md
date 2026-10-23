# Rotate pdf pages example setup

Open when running or adapting the linked rotate pdf pages example.

The complete program is Adobe's [source sample](https://raw.githubusercontent.com/adobe/pdfservices-java-sdk-samples/25f97d7b48719e0ed26878e734d2840b39870624/src/main/java/com/adobe/pdfservices/operation/samples/rotatepages/RotatePDFPages.java). The [call pattern](../CallPattern.java) shows the shared upload, submit, wait and download sequence; the [operations table](../operations.md) lists this example's job, parameter and result classes.

Supply your own PDF Services credentials through the environment variables or credentials object used by the example. The SDK, service access and input documents are external prerequisites; no credentials or sample binaries are bundled here.

## Input paths

- `src/main/resources/rotatePagesInput.pdf`

## Source implementation notes

- This sample illustrates how to rotate pages in a PDF file. Refer to README.md for instructions on how to run the samples.
- Initialize the logger
- Initial setup, create credentials instance
- Creates a PDF Services instance
- Creates an asset(s) from source file(s) and upload
- First set of page ranges for rotating the specified pages of the input PDF file.
- Second set of page ranges for rotating the specified pages of the input PDF file.
- Create parameters for the job
- Creates a new job instance
- Submit the job and gets the job result
- Get content from the resulting asset(s)
- Creates an output stream and copy stream asset's content to it
- Specify pages for rotation
- Add page 1
- Add pages 3 to 4
- Specify pages for rotation
- Add page 2
- Generates a string containing a directory structure and file name for the output file
