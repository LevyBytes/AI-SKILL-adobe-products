# Service region configuration

The SDK configuration guide lists `US` (United States) as the default processing region and `EU` (Europe) as an alternative. It ties region selection to paid-service eligibility; confirm the region available to the account before submitting documents. Set `region` on `ClientConfig` and supply that configuration when constructing the client.

- Open when selecting the region through the Java builder. [Java example](java.md#service-region).
- Open when selecting the region through the .NET builder. [.NET example](net.md).
- Open when setting the Node.js constructor option. [Node.js example](node-js.md#service-region).
- Open when setting the Python constructor argument. [Python example](python.md#service-region).

The [configuration guide](https://developer.adobe.com/document-services/docs/overview/pdf-services-api/howtos/) describes region availability. Complete operation samples demonstrate the configuration in use:

- [Java](https://github.com/adobe/pdfservices-java-sdk-samples/blob/master/src/main/java/com/adobe/pdfservices/operation/samples/customconfigurations/ExportPDFWithSpecifiedRegion.java)
- [.NET](https://github.com/adobe/PDFServices.NET.SDK.Samples/blob/master/ExportPDFWithSpecifiedRegion/Program.cs)
- [Node.js](https://github.com/adobe/pdfservices-node-sdk-samples/blob/master/src/customconfigurations/export-pdf-with-specified-region.js)
- [Python](https://github.com/adobe/pdfservices-python-sdk-samples/blob/main/src/customconfigurations/export_pdf_with_specified_region.py)
