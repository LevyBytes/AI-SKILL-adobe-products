# Set up the PDF Viewer

Because the aim is to capture how people use the PDF viewer, those events have to land in the proper report suites. Hand the Analytics report suite ID to the `AdobeDC.View` instance when you create it, and PDF analytics events flow in on their own. Make certain Adobe Analytics is wired up with that same `reportSuiteId` on whatever site hosts the embedded PDF Viewer.

```javascript
function createAdobeAnalyticsView(clientId, divId, reportSuiteId) {
    return new AdobeDC.View({ clientId, divId, reportSuiteId });
}
```

Load the PDF Embed SDK and call this function after adobe_dc_view_sdk.ready. The supplied divId must identify an existing container; clientId is your registered Embed API client ID.

The Adobe Analytics integration sample for PDF Embed API is available [here](https://www.adobe.com/go/pdfembedapi_samples), under `/More Samples/Analytics/Adobe Analytics`.
