# Custom timeout configuration

Choose timeout values for the application's network and response requirements. SDK settings differ by language; use the matching configuration interface and supply the resulting `ClientConfig` when creating the PDF Services client.

- Open when setting connection and socket intervals. [Java timeout configuration](java-timeout-configuration.md).
- Open when setting a request interval in milliseconds. [.NET timeout configuration](net-timeout-configuration.md).
- Open when controlling when a Node.js request is aborted. [Node.js timeout configuration](node-js-timeout-configuration.md).
- Open when setting separate connection and response waits. [Python timeout configuration](python-timeout-configuration.md).

The [current configuration guide](https://developer.adobe.com/document-services/docs/overview/pdf-services-api/howtos/) documents the available settings. Complete operation samples provide credential setup and client construction:

- [Java](https://github.com/adobe/pdfservices-java-sdk-samples/blob/master/src/main/java/com/adobe/pdfservices/operation/samples/customconfigurations/CreatePDFWithCustomTimeouts.java)
- [.NET](https://github.com/adobe/PDFServices.NET.SDK.Samples/blob/master/CreatePDFWithCustomTimeouts/Program.cs)
- [Node.js](https://github.com/adobe/pdfservices-node-sdk-samples/blob/master/src/customconfigurations/create-pdf-with-custom-timeouts.js)
- [Python PDF creation](https://github.com/adobe/pdfservices-python-sdk-samples/blob/main/src/customconfigurations/create_pdf_with_custom_timeouts.py)
