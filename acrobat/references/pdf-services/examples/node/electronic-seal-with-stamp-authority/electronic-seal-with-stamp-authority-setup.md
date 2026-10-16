# Electronic seal with stamp authority example setup

Open when running or adapting the linked electronic seal with stamp authority example.

Use the dependencies and resource layout from the [captured source project](https://raw.githubusercontent.com/adobe/pdfservices-node-sdk-samples/8f1889564d3d35e566861f8eb3c9128665b1a07c/src/electronicseal/electronic-seal-with-stamp-authority.js). Copy the linked modules together into that project’s matching example/package directory. Run from its project root so relative resource and output paths resolve as documented.

Supply your own PDF Services credentials through the environment variables or credentials object used by the example. The SDK, service access and input documents are external prerequisites; no credentials or sample binaries are bundled here.

These files illustrate source-backed API calls and recorded repairs. Local checks cover syntax and isolated mocks; they do not claim a successful live service request or native Java/.NET build.

## Example files

- [electronic-seal-with-stamp-authority.cjs](electronic-seal-with-stamp-authority.cjs)
- [dependencies.cjs](dependencies.cjs)
- [helpers.cjs](helpers.cjs)
- [seal-options.cjs](seal-options.cjs)

## Input paths

- `resources/sampleInvoice.pdf`
- `resources/sampleSealImage.png`

## Source licensing

- [Captured pdfservices-node license](../../../../../assets/licenses/pdfservices-node-license.txt)
