# Dynamic html to pdf example setup

Open when running or adapting the linked dynamic html to pdf example.

Use the dependencies and resource layout from the [captured source project](https://raw.githubusercontent.com/adobe/pdfservices-java-sdk-samples/25f97d7b48719e0ed26878e734d2840b39870624/src/main/java/com/adobe/pdfservices/operation/samples/htmltopdf/DynamicHTMLToPDF.java). Copy the linked modules together into that project’s matching example/package directory. Run from its project root so relative resource and output paths resolve as documented.

Supply your own PDF Services credentials through the environment variables or credentials object used by the example. The SDK, service access and input documents are external prerequisites; no credentials or sample binaries are bundled here.

These files illustrate source-backed API calls and recorded repairs. Local checks cover syntax and isolated mocks; they do not claim a successful live service request or native Java/.NET build.

## Example files

- [DynamicHTMLToPDF.java](DynamicHTMLToPDF.java)

## Input paths

- `src/main/resources/createPDFFromDynamicHtmlInput.zip`

## Source implementation notes

- This sample illustrates how to provide data inputs to an HTML file before converting it to PDF. The data input is used by the javascript in the HTML file to manipulate the HTML DOM, thus effectively updating the source HTML file. This mechanismn can be used to provide data to the template HTML dynamically and convert it into a PDF file. Refer to README.md for instructions on how to run the samples.
- Initialize the logger
- Initial setup, create credentials instance
- Creates a PDF Services instance
- Creates an asset(s) from source file(s) and upload
- Create parameters for the job
- Creates a new job instance
- Submit the job and gets the job result
- Get content from the resulting asset(s)
- Creates an output stream and copy stream asset's content to it
- Define the page layout, in this case an 8 x 11.5 inch page (effectively portrait orientation)
- Sets the dataToMerge field that needs to be populated in the HTML before its conversion
- Generates a string containing a directory structure and file name for the output file

## Source licensing

- [Captured pdfservices-java license](../../../../../assets/licenses/pdfservices-java-license.txt)
