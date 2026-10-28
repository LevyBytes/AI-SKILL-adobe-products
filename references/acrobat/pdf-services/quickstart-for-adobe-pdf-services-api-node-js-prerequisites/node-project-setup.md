# Set up the Node.js PDF-to-Word project

Use Node.js 18 or a compatible later release for this SDK workflow. Extract `PDFServicesSDK-Node.jsSamples.zip` from the credential download and keep `pdfservices-api-credentials.json` securely in your project directory.

1. Open a terminal in that directory and initialize the project with `npm init -y`.
2. Select the module format used by the complete example with `npm pkg set type=commonjs`.
3. Install the exact sample dependency with `npm install --save-exact @adobe/pdfservices-node-sdk@4.1.0`. Adobe's [sample package](https://github.com/adobe/pdfservices-node-sdk-samples/blob/8f1889564d3d35e566861f8eb3c9128665b1a07c/package.json) declares that SDK version.
4. Download [Bodea Brochure.pdf](https://documentcloud.adobe.com/view-sdk-demo/PDFs/Bodea%20Brochure.pdf) into the project directory and save the complete [export application](node-application-creation.md) as `export.js` beside it.

The export application uses the SDK and Node's built-in `fs` module. A ZIP-processing package is not required for this PDF-to-DOCX operation. Its result is `Bodea Brochure.docx` in the working directory.

Continue with the application procedure to set both credential environment variables and run `node export.js`. Retain the generated package lock when reusing the project so dependency resolution remains reproducible.
