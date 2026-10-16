# Analytics — Default analytics

No subscription to Adobe Analytics or Google Analytics? PDF analytics events are still within reach as people work with your PDFs. Switch them on by registering a callback through the API that listens for the events. Watching these PDF events sheds light on what users do, which in turn helps you steer and refine the PDF experience you put in front of customers.

Per usual, set up the `AdobeDC.View` object with your client ID, then call the `previewFile` API on that `AdobeDC.View` object as you normally would. Lastly, register the callback that receives the events and turn `enablePDFAnalytics` on by setting it to _true_:

```javascript
const eventOptions = {
  //Pass the PDF analytics events to receive.
  //If no event is passed in listenOn, then all PDF analytics events will be received.
  listenOn: [
    AdobeDC.View.Enum.PDFAnalyticsEvents.PAGE_VIEW,
    AdobeDC.View.Enum.PDFAnalyticsEvents.DOCUMENT_DOWNLOAD,
  ],
  enablePDFAnalytics: true,
};

adobeDCView.registerCallback(
  AdobeDC.View.Enum.CallbackType.EVENT_LISTENER,
  function (event) {
    console.log("Type " + event.type);
    console.log("Data " + event.data);
  },
  eventOptions,
);
```

A runnable example lives in the [samples repo](https://www.adobe.com/go/pdfembedapi_samples), under `/More Samples/Capture PDF Embed API Events/`.

_Supported analytics events_

| Event type | Event description | Event data |
| --- | --- | --- |
| `DOCUMENT_OPEN` | On successful opening of PDF. | `{fileName: <FILE_NAME>}` |
| `PAGE_VIEW` | Page information on change in page(s) in view | `{pageNumber: <PAGE_NUM>, fileName: <FILE_NAME>}` |
| `BOOKMARK_ITEM_CLICK` | On clicking on any bookmark item | `{title: <BOOKMARK_TITLE>, fileName: <FILE_NAME>}` |
| `DOCUMENT_DOWNLOAD` | When the PDF is downloaded | `{fileName: <FILE_NAME>}` |
| `DOCUMENT_PRINT` | When the PDF is printed | `{printSupported: true, fileName: <FILE_NAME>}` |
| `HYPERLINK_OPEN` | On clicking any external hyperlink in the PDF | `{type: “external”, pageNumber: <PAGE_NUM>, x: <X-coordinate of the link>, y: <Y-coordinate of the link>, url: <EXTERNAL_URL>}` |
| `TEXT_COPY` | On copying any text from a PDF. Note that the `TEXT_COPY` event only fires for PDF files that allow text copy; for example, secured and encrypted files do not allow copying text. | `{copiedText: <COPIED_TEXT>, fileName: <FILE_NAME>}` |
| `TEXT_SEARCH` | When the user searches for any text via the document search field | `{searchedText: <SEARCHED_TEXT>, fileName: <FILE_NAME>}` |
| `ZOOM_LEVEL` | When zoom in/out actions are performed from the page control toolbar | `{zoomLevel: <ZOOM_LEVEL>, fileName: <FILE_NAME>}` |
