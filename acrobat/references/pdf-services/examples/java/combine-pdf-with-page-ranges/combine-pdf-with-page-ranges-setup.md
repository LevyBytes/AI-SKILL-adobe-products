# Combine pdf with page ranges example setup

Open when running or adapting the linked combine pdf with page ranges example.

The complete program is Adobe's [source sample](https://raw.githubusercontent.com/adobe/pdfservices-java-sdk-samples/25f97d7b48719e0ed26878e734d2840b39870624/src/main/java/com/adobe/pdfservices/operation/samples/combinepdf/CombinePDFWithPageRanges.java). The [call pattern](../CallPattern.java) shows the shared upload, submit, wait and download sequence; the [operations table](../operations.md) lists this example's job, parameter and result classes.

Supply your own PDF Services credentials through the environment variables or credentials object used by the example. The SDK, service access and input documents are external prerequisites; no credentials or sample binaries are bundled here.

## Input paths

- `src/main/resources/combineFileWithPageRangeInput1.pdf`
- `src/main/resources/combineFileWithPageRangeInput2.pdf`

## Source implementation notes

- This sample illustrates how to combine specific pages of multiple PDF files into a single PDF file. Note that the SDK supports combining upto 20 files in one operation Refer to README.md for instructions on how to run the samples.
- Initialize the logger
- Initial setup, create credentials instance
- Creates a PDF Services instance
- Creates an asset(s) from source file(s) and upload
- Create parameters for the job
- Add the first asset as input to the params,
- along with its page ranges
- Add the second asset as input to the params,
- along with its page ranges
- Creates a new job instance
- Submit the job and gets the job result
- Get content from the resulting asset(s)
- Creates an output stream and copy stream asset's content to it
- Specify which pages of the second file are to be included in the combined file
- Add all pages including and after page 3
- Specify which pages of the first file are to be included in the combined file
- Add page 1
- Add page 2
- Add pages 3 to 4
- Generates a string containing a directory structure and file name for the output file
