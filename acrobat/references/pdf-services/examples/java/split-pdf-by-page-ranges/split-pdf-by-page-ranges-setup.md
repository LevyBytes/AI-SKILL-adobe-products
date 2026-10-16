# Split pdf by page ranges example setup

Open when running or adapting the linked split pdf by page ranges example.

Use the dependencies and resource layout from the [captured source project](https://raw.githubusercontent.com/adobe/pdfservices-java-sdk-samples/25f97d7b48719e0ed26878e734d2840b39870624/src/main/java/com/adobe/pdfservices/operation/samples/splitpdf/SplitPDFByPageRanges.java). Copy the linked modules together into that project’s matching example/package directory. Run from its project root so relative resource and output paths resolve as documented.

Supply your own PDF Services credentials through the environment variables or credentials object used by the example. The SDK, service access and input documents are external prerequisites; no credentials or sample binaries are bundled here.

These files illustrate source-backed API calls and recorded repairs. Local checks cover syntax and isolated mocks; they do not claim a successful live service request or native Java/.NET build.

## Example files

- [SplitPDFByPageRanges.java](SplitPDFByPageRanges.java)

## Input paths

- `src/main/resources/splitPDFInput.pdf`

## Source implementation notes

- This sample illustrates how to split input PDF into multiple PDF files on the basis of page ranges. Each page range corresponds to a single output file having the pages specified in the page range. Refer to README.md for instructions on how to run the samples.
- Initialize the logger
- Initial setup, create credentials instance
- Creates a PDF Services instance
- Creates an asset(s) from source file(s) and upload
- Specify page ranges to split PDF
- Create parameters for the job
- Set the page ranges where each page range corresponds to a single output file
- Creates a new job instance
- Submit the job and gets the job result
- Get content from the resulting asset(s)
- Creates an output stream and copy stream asset's content to it
- Specify page ranges
- Add page 1
- Add pages 3 to 4
- Generates a string containing a directory structure and indexed file name for the output file

## Source licensing

- [Captured pdfservices-java license](../../../../../assets/licenses/pdfservices-java-license.txt)
