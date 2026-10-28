# Mapping events

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
