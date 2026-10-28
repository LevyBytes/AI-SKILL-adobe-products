# deleteAnnotations API

Working from the filter the client passes, this API removes PDF annotations.

### Input parameters

- Leave the filter empty and all of the PDF's annotations get removed.
- Pass a list of annotation IDs in the filter and only the matching ones are removed; everything else stays put.
- Pass a page range in the filter and only the annotations on those pages are removed, with the rest left alone.

```javascript
function annotationFilter(annotationIds, startPage, endPage) {
    return { annotationIds, pageRange: { startPage, endPage } };
}
```

Supply the desired annotation ID array and documented start/end page numbers; pass the returned filter to the relevant annotation-manager operation.

### API output

A Promise comes back that:

- settles once the delete goes through
- turns down with an error object carrying a code and message when the delete fails.

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
      .deleteAnnotations(filter)
      .then(() => console.log("Success"))
      .catch((error) => console.log(error));
  });
});
```
