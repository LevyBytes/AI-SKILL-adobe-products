# Ocr pdf with options example setup

Open when running or adapting the linked ocr pdf with options example.

Use the dependencies and resource layout from the [captured source project](https://raw.githubusercontent.com/adobe/pdfservices-java-sdk-samples/25f97d7b48719e0ed26878e734d2840b39870624/src/main/java/com/adobe/pdfservices/operation/samples/ocrpdf/OcrPDFWithOptions.java). Copy the linked modules together into that project’s matching example/package directory. Run from its project root so relative resource and output paths resolve as documented.

Supply your own PDF Services credentials through the environment variables or credentials object used by the example. The SDK, service access and input documents are external prerequisites; no credentials or sample binaries are bundled here.

These files illustrate source-backed API calls and recorded repairs. Local checks cover syntax and isolated mocks; they do not claim a successful live service request or native Java/.NET build.

## Example files

- [OcrPDFWithOptions.java](OcrPDFWithOptions.java)

## Input paths

- `src/main/resources/ocrInput.pdf`

## Source implementation notes

- This sample illustrates how to perform an OCR operation on a PDF file and convert it into an searchable PDF file on the basis of provided locale and SEARCHABLE_IMAGE_EXACT ocr type to keep the original image (Recommended for cases requiring maximum fidelity to the original image.). Note that OCR operation on a PDF file results in a PDF file. Refer to README.md for instructions on how to run the samples.
- Initialize the logger
- Initial setup, create credentials instance
- Creates a PDF Services instance
- Creates an asset(s) from source file(s) and upload
- Create parameters for the job
- Creates a new job instance
- Submit the job and gets the job result
- Get content from the resulting asset(s)
- Creates an output stream and copy stream asset's content to it
- Generates a string containing a directory structure and file name for the output file

## Source licensing

- [Captured pdfservices-java license](../../../../../assets/licenses/pdfservices-java-license.txt)
