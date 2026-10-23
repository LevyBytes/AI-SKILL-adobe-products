# Pdf watermark with options example setup

Open when running or adapting the linked pdf watermark with options example.

The complete program is Adobe's [source sample](https://raw.githubusercontent.com/adobe/pdfservices-java-sdk-samples/25f97d7b48719e0ed26878e734d2840b39870624/src/main/java/com/adobe/pdfservices/operation/samples/pdfwatermark/PDFWatermarkWithOptions.java). The [call pattern](../CallPattern.java) shows the shared upload, submit, wait and download sequence; the [operations table](../operations.md) lists this example's job, parameter and result classes.

Supply your own PDF Services credentials through the environment variables or credentials object used by the example. The SDK, service access and input documents are external prerequisites; no credentials or sample binaries are bundled here.

## Input paths

- `src/main/resources/pdfWatermarkInput.pdf`
- `src/main/resources/watermark.pdf`

## Source implementation notes

- This sample illustrates how to apply watermark to a PDF file. It showcases how to customize watermarking with specific page ranges and appearance settings. Note that PDF Watermark operation on a PDF file results in a PDF file. Refer to README.md for instructions on how to run the samples.
- Initialize the logger
- Initial setup, create credentials instance
- Creates a PDF Services instance
- Creates an asset(s) from source file(s) and upload
- Watermark pages of the document (as specified by PageRanges).
- Creates PDF Watermark appearance option
- Create parameters for the job
- Creates a new job instance
- Submit the job and gets the job result
- Get content from the resulting asset(s)
- Creates an output stream and copy stream asset's content to it
- Specify pages for deletion
- Add page 1
- Add pages 3 to 4
- Generates a string containing a directory structure and file name for the output file
