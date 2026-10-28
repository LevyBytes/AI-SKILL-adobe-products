# Set up the PDF Viewer

Since the goal is capturing how visitors use the PDF viewer, those events need to reach the correct Google Analytics property. Pass the **Google Analytics 4 measurement ID** to the `AdobeDC.View` instance at creation time and PDF analytics events arrive automatically. Be sure Google Analytics is instrumented with that very measurement ID on the site where the PDF Viewer is embedded.

Only a Google Analytics 4 property can gather PDF analytics. The current build does not support collection through Universal Analytics.

```javascript
function createGoogleAnalyticsView(clientId, divId, measurementId) {
    return new AdobeDC.View({ clientId, divId, measurementId });
}
```

Load the PDF Embed SDK and call this function after adobe_dc_view_sdk.ready. The supplied divId must identify an existing container; clientId is your registered Embed API client ID.

_Following PDF analytics will be tracked:_

| Event action | Event description | Event data |
| --- | --- | --- |
| Load PDF | On successful opening of PDF. | File name |
| Page View | Page information on change in page(s) in view | Page number, File name |
| Bookmark Click | On clicking on any bookmark item | File name |
| Download | When the PDF is downloaded | File name Print When the PDF is printed File name |
| Hyperlink Open | On clicking any external hyperlink in the PDF | File name |
| Text Copy | On copying any text from a PDF. | File name |
| Search | When the user searches for any text via the document search field | Searched text, file name |
| Change Zoom | When zoom in/out actions are performed on the PDF toolbar | Zoom level, File name |

The Google Analytics integration sample for PDF Embed API can be found [here](https://www.adobe.com/go/pdfembedapi_samples), under `/More Samples/Analytics/Google Analytics`.
