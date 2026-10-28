# Node JS changes

- On NPM the package is now `@adobe/pdfservices-node-sdk`, replacing `@adobe/documentservices-pdftools-node-sdk`
- Bump the SDK dependency in your project's package.json file to the newest version

Merge this property excerpt into the corresponding configuration object.

```json
{
  "@adobe/pdfservices-node-sdk": "3.4.2"
}
```

- Pull in `@adobe/pdfservices-node-sdk` within the Sample file so you can reach the SDK interface

```javascript
const PDFServicesSdk = require('@adobe/pdfservices-node-sdk');
```

When converting HTML to PDF, the PageLayout object now lives inside the html object. Reach the PageLayout interface with this code:

```javascript
const pageLayout = new PDFServicesSdk.CreatePDF.options.html.PageLayout();
```
