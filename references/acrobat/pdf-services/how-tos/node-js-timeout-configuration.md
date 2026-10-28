# Node.js timeout configuration

`ClientConfig` accepts a `timeout` in milliseconds. The documented default is 10000; a request exceeding the configured value is aborted. Pass the configuration as `clientConfig` when constructing `PDFServices`.

```javascript
const { ClientConfig } = require("@adobe/pdfservices-node-sdk");

const clientConfig = new ClientConfig({
  timeout: 15000,
});
```

This example selects a 15-second timeout. The [complete sample](https://github.com/adobe/pdfservices-node-sdk-samples/blob/master/src/customconfigurations/create-pdf-with-custom-timeouts.js) demonstrates client construction and an operation with another custom value. The [configuration guide](https://developer.adobe.com/document-services/docs/overview/pdf-services-api/howtos/) documents the default and override behavior. Add [region or proxy settings](node-js.md) to the same configuration when needed.
