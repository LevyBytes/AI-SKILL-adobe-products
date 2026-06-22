# Howtodata (part 1)

> Adobe Acrobat reference. Original prose; identifiers preserved verbatim.

Got an existing Adobe Analytics subscription? Then detailed PDF analytics come along for free. Keep using Analytics the way you always have — but a short setup is needed first so the arriving data lines up with the right Adobe Analytics variables.

### Set up the PDF Viewer

Because the aim is to capture how people use the PDF viewer, those events have to land in the proper report suites. Hand the Analytics report suite ID to the `AdobeDC.View` instance when you create it, and PDF analytics events flow in on their own. Make certain Adobe Analytics is wired up with that same `reportSuiteId` on whatever site hosts the embedded PDF Viewer.

```javascript
var adobeDCView = new AdobeDC.View({
    clientId: "<YOUR_CLIENT_ID>",
    divId: "adobe-dc-view"
    reportSuiteId: "<YOUR_Adobe_Analytics_REPORT_SUITE ID>",
    ...
})
```

The Adobe Analytics integration sample for PDF Embed API is available [here](https://www.adobe.com/go/pdfembedapi_samples), under `/More Samples/Analytics/Adobe Analytics`.

### Configure Adobe Analytics

A handful of configuration steps in the present release are what map the PDF Embed API data coming off your viewer onto your report suite. After signing in to Analytics, work through these:

Once you've logged in to Analytics, do the following:

1.  In the top menu, go to **Admin > Report Suites**.
2.  Select your report suite.

[Figure: Selecting Site Title as DC SDK PDF Viewer Metrics in AEM Suite](https://raw.githubusercontent.com/AdobeDocs/pdfservices-api-documentation/main/src/pages/overview/images/aemsuite.png)

3.  Navigate to the Report Suite Manager.
4.  Highlight your report suite.
5.  Choose **Edit Settings > General > Processing Rules**.

[Figure: Selecting Processing Rules from AEM Edit Settings Menu](https://raw.githubusercontent.com/AdobeDocs/pdfservices-api-documentation/main/src/pages/overview/images/aemeditsettingsmenu.png)

6.  Click the **Processing Rules** tab. Two rules are what you set up here, configured so collected events and their attributes map onto Analytics variables.

[Figure: Setting up AEM Processing Rules on event dimensions and events](https://raw.githubusercontent.com/AdobeDocs/pdfservices-api-documentation/main/src/pages/overview/images/aemprocessingrules.png)

### Mapping event attibutes

Here you build a fresh rule that ties the event attributes the PDF Embed API sends to an Adobe Analytics variable. An attribute could be a page number or a title, say. Many events may share one attribute — one per event firing on a given page. In your reports, these attributes end up as dimensions:

- a.dc.searchTerm
- a.action
- a.dc.pageNum
- a.dc.filename

Map event attributes as follows:

1.  Choose **Add Rule**.
2.  Add a custom rule title such as "Event Dimensions".
3.  Choose **Add Action** until you have four (one for each attribute above).
4.  Select an item (event attribute) from the **With** drop down list (one of those above).
5.  Select an Analytics dimension variable from the drop down list on the left.
6.  The left hand columns should remain set to "Overwrite value of".
7.  Repeat the above steps for each incoming event attribute you track.

[Figure: AEM Dim Map with dimension variable and incoming event attribute field set](https://raw.githubusercontent.com/AdobeDocs/pdfservices-api-documentation/main/src/pages/overview/images/aemdimmap.png)

### Mapping events

Build a second new rule, this time linking the events the PDF Embed API sends to an Adobe Analytics variable. Keep in mind Analytics treats "metrics" and "events" as the same thing. Any interaction your JavaScript event listener picks up counts as an event — a button click or a comment on a PDF, for instance. These events turn into the metrics your reports display:

- a.dc.zoomLevel
- a.dc.loadPDF
- a.dc.viewPage
- a.dc.download
- a.dc.search
- a.dc.bookmarkClicked
- a.dc.copyText
- a.dc.print

Map events as follows:

1.  Choose **Add Rule**.
2.  Add a custom rule title such as "Events".
3.  Choose **Add Action** until you have eight (one for each attribute above).
4.  Select a metric (an event) from the **To** drop down list (one of those above).
5.  Select an Analytics event variable from the drop down list on the left.
6.  The left hand column should remain set to "Set event".
7.  Repeat the above steps for each metric (incoming event).

[Figure: AEM Section 3 with event variable and incoming event attribute field set](https://raw.githubusercontent.com/AdobeDocs/pdfservices-api-documentation/main/src/pages/overview/images/aemsection3.png)

### Viewing your data

Configure reporting however you normally would, then look over the dimensions and metrics inside your workspace.

[Figure: AEM Report with number of page views metric](https://raw.githubusercontent.com/AdobeDocs/pdfservices-api-documentation/main/src/pages/overview/images/aemreport.png)

### Help, support, forum

For a fuller walkthrough of this Adobe Analytics UI, head to the [help docs](https://experienceleague.adobe.com/docs/analytics/admin/admin-tools/processing-rules/processing-rules.html). Questions and help are also available here:

- [Community forum](https://forums.adobe.com/community/experience-cloud/analytics-cloud/analytics)
- [Analytics Support](https://helpx.adobe.com/support/analytics.html)

## Analytics — Google Analytics

Already running Google Analytics on your site? A short setup lets PDF analytics from PDF Embed API show up in Google Analytics too.

### Set up the PDF Viewer

Since the goal is capturing how visitors use the PDF viewer, those events need to reach the correct Google Analytics property. Pass the **Google Analytics 4 measurement ID** to the `AdobeDC.View` instance at creation time and PDF analytics events arrive automatically. Be sure Google Analytics is instrumented with that very measurement ID on the site where the PDF Viewer is embedded.

Only a Google Analytics 4 property can gather PDF analytics. The current build does not support collection through Universal Analytics.

```javascript
var adobeDCView = new AdobeDC.View({
    clientId: "<YOUR_CLIENT_ID>",
    divId: "adobe-dc-view"
    measurementId: "<YOUR_GA4_MEASUREMENT ID>",
    ...
})
```

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

### Configure Google Analytics

To get the PDF Embed API data from your viewer mapped correctly into Google Analytics, the present release calls for a few configuration steps.

### Custom Dimensions

In the Google Analytics 4 property you will define several custom dimensions that correspond to the attributes carried in the event data PDF Embed API sends.

After signing in to Google Analytics, carry out these steps:

1.  From the top bar, select the Google Analytics 4 property which contains your **measurement ID**.
2.  Click **Custom definitions** under **Configure** (in the left navigation pane).
3.  Click **Create custom dimensions**.

[Figure: Configure in GA4](https://raw.githubusercontent.com/AdobeDocs/pdfservices-api-documentation/main/src/pages/overview/images/ga-create-dimension.png)

4.  Enter Dimension name.
5.  Set the scope as **Event**.
6.  Enter a description for this custom dimension.
7.  Enter the name of the event attribute sent from PDF Embed API. Custom dimensions need to be created for these event attributes: **filename**, **pageNum**, **searchTerm** and **zoomLevel**.
8.  Click Save.
    (Note: You will see a value of "Not set" for a custom dimension during the first 48 hours. )

9.  You need to set up four custom dimensions, as follows:

- File Name
- Page Number
- Search Term, and,
- Zoom Level

10. Map these custom dimensions with the correct event attributes sent from PDF Embed API, as shown in the table below:

| Dimension name | Scope | User property/parameter |
| --- | --- | --- |
| File name | Event | filename |
| Page number | Event | pageNum |
| Search term | Event | searchTerm |
| Zoom level | Event | zoomLevel |

[Figure: Configure in GA4](https://raw.githubusercontent.com/AdobeDocs/pdfservices-api-documentation/main/src/pages/overview/images/ga-custom-dimension.png)

### Viewing your data in Google Analytics 4

After PDF analytics begin flowing into Google Analytics 4, build your reporting the usual way and review the dimensions and metrics in your workspace.

**Creating a sample exploration to track page views**

Reports can be assembled across whichever dimensions and metrics you choose so you can inspect the data. The walkthrough below builds a sample exploration that follows page views inside the PDF.

1.  Select **Explore** from the left navigation pane and click the plus sign to create a new blank report.
2.  Select a custom timeline.
3.  Select **Line Chart** from the Visualisation.
4.  Drag and drop **Event Name** from Dimensions in Breakdowns.
5.  Remove Active Count from Values.
6.  Drag and drop **Event Count** from Metrics in Values.
7.  Go to Filters and select **Event Name**.
8.  Select match type 'contains' and enter 'Page View' in expression.
9.  Click Apply.

[Figure: View sample exploration in GA4](https://raw.githubusercontent.com/AdobeDocs/pdfservices-api-documentation/main/src/pages/overview/images/ga-page-view-2.png)

When a site is signed up for both Adobe Analytics and Google Analytics, the data goes solely to Adobe Analytics, and Google Analytics receives no PDF analytics at all.

## Analytics — Control analytics collection

Where your site is already hooked into an analytics tool — Adobe Analytics or Google Analytics — a few extra setup steps let you gather PDF analytics. For the full procedure, check the [Adobe Analytics](api-howtodata.md) and [Google Analytics](api-howtodata.md) sections.

Whether PDF analytics get collected in those tools comes down to the `sendAutoPDFAnalytics` configuration. It defaults to _true_. Flip it to _false_ whenever you want PDF analytics collection switched off.

```javascript
var adobeDCView = new AdobeDC.View({
    clientId: "<YOUR_CLIENT_ID>",
    divId: "adobe-dc-view"
    sendAutoPDFAnalytics: false,
    ...
})
```

## Analytics — Default analytics

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
