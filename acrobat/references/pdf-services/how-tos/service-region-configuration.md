# Service region configuration

By default the Adobe PDF Services SDKs route every document through the `US (United States)` region for processing.
After you buy PDF Services SDK, you can point the SDKs at any of the regions enumerated below to handle your documents there instead.
At present, the regions PDF Services SDKs can target are these:

| Region Code | Name |
| --- | --- |
| `US` | United States (default) |
| `EU` | Europe |

Beyond what is described below, these ready-to-run code samples are also available for reference:

- [Java](https://github.com/adobe/pdfservices-java-sdk-samples/blob/master/src/main/java/com/adobe/pdfservices/operation/samples/customconfigurations/ExportPDFWithSpecifiedRegion.java)
- [.NET](https://github.com/adobe/PDFServices.NET.SDK.Samples/blob/master/ExportPDFWithSpecifiedRegion/Program.cs)
- [Node.js](https://github.com/adobe/pdfservices-node-sdk-samples/blob/master/src/customconfigurations/export-pdf-with-specified-region.js)
- [Python](https://github.com/adobe/pdfservices-python-sdk-samples/blob/main/src/customconfigurations/export_pdf_with_specified_region.py)

Available properties:

- **region**: Default: `US`. Every document gets handled within whichever region you name here.

Supply your own `ClientConfig` class to replace the `region` property:
