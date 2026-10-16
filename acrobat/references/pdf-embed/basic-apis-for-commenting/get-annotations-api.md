# getAnnotations API

Driven by a filter the client supplies, this API pulls out and hands back PDF annotation data. What comes back is a JSON array, and the annotation data inside it follows the layout set out in the [Annotation schema](https://raw.githubusercontent.com/AdobeDocs/pdfservices-api-documentation/main/src/pages/overview/pdf-embed-api/howtos-comments.md#annotation-schema).

### Input parameters

- Leave the filter empty and every annotation's data comes back.
- Supply a list of annotation IDs in the filter and only the annotations whose IDs match get returned.
- Supply a page range in the filter and only annotations sitting on those pages get returned.

```javascript
function annotationFilter(annotationIds, startPage, endPage) {
    return { annotationIds, pageRange: { startPage, endPage } };
}
```

Supply the desired annotation ID array and documented start/end page numbers; pass the returned filter to the relevant annotation-manager operation.

### API output

A Promise comes back that:

- on success, settles carrying a list of annotations,
- on a failed operation, turns down with an error object bearing a code and message.

### API signature

```javascript
const filter = {
  // annotationIds: [Annotation_ID_1, Annotation_ID_2, ...];
  // OR,
  // pageRange: {startPage: <Page_Number>, endPage: <Page_Number>};
};

previewFilePromise.then((adobeViewer) => {
  adobeViewer.getAnnotationManager().then((annotationManager) => {
    annotationManager
      .getAnnotations(filter)
      .then((result) => console.log(result))
      .catch((error) => console.log(error));
  });
});
```

Flip `includePDFAnnotations` to _true_ and every annotation already living in the PDF that the PDF Embed API knows how to handle becomes reachable from the annotation APIs. The GET API is how you retrieve the data for those annotations. Keep in mind that the GET API hands back a different ID for such annotations on each browser session.
