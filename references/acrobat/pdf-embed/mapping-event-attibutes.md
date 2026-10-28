# Mapping event attibutes

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
