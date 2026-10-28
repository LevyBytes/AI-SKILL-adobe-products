# Node JS changes

- NPM package name changed from `@adobe/documentservices-pdftools-node-sdk` to `@adobe/pdfservices-node-sdk`
- Update the latest SDK dependency in package.json file of your project

```json
{
  "dependencies": {
    "@adobe/pdfservices-node-sdk": "4.1.0"
  }
}
```

- Require the `@adobe/pdfservices-node-sdk` in the Sample file to access the SDK interface

```javascript
const PDFServicesSdk = require("@adobe/pdfservices-node-sdk");
```

For HTML to PDF Conversions, the PageLayout object is moved inside html object. To access the PageLayout interface use the following code:

```javascript
const pageLayout = new PDFServicesSdk.CreatePDF.options.html.PageLayout();
```
