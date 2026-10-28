# removeAnnotationsFromPDF API

Calling this wipes every annotation and returns two things: the list of what was removed plus the PDF buffer. Bear in mind it can clear only the annotations it supports.

### Input parameters

N/A

### API output

A Promise comes back that:

- on a successful run, settles with the list of removed annotations plus a refreshed PDF buffer.
- on failure, turns down and hands over an error object holding an error code and a message.

### API signature

```javascript
previewFilePromise.then((adobeViewer) => {
  adobeViewer.getAnnotationManager().then((annotationManager) => {
    annotationManager
      .removeAnnotationsFromPDF()
      .then((result) => console.log(result))
      .catch((error) => console.log(error));
  });
});
```
