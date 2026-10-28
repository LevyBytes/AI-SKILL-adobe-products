# annotationManager interface

By way of its `registerEventListener` API, the `annotationManager` interface watches for events. Want only certain event types? Hand that list to the `listenOn` parameter. Leave `listenOn` empty and every annotation event comes through.

Bear in mind this interface fires events only while the annotation APIs are turned on.

```javascript
const eventOptions = {
  // Pass the events to receive.
  // If no event is passed in listenOn, then all the annotation events will be received.
  listenOn: ["ANNOTATION_ADDED", "ANNOTATION_CLICKED"],
};

previewFilePromise.then((adobeViewer) => {
  adobeViewer.getAnnotationManager().then((annotationManager) => {
    annotationManager.registerEventListener(function (event) {
      console.log(event.type, event.data);
    }, eventOptions);
  });
});
```

The table that follows lists the annotation events you might see. Each event carries, in JSON form, the data of the annotation that set it off.

_Event types_

| Event type | Description | Event data |
| --- | --- | --- |
| `ANNOTATION_ADDED` | A fresh annotation lands in the PDF from either the UI or the API. | `ANNOTATION_DATA` |
| `ANNOTATION_CLICKED` | Some annotation in the PDF gets clicked. | `ANNOTATION_DATA` |
| `ANNOTATION_UPDATED` | An annotation gets revised from the UI or the API. | `ANNOTATION_DATA` |
| `ANNOTATION_DELETED` | An annotation gets removed from the UI or the API. | `ANNOTATION_DATA` |
| `ANNOTATION_MOUSE_OVER` | The pointer passes over some annotation. | `ANNOTATION_DATA` |
| `ANNOTATION_MOUSE_OUT` | The pointer leaves some annotation. | `ANNOTATION_DATA` |
| `ANNOTATION_SELECTED` | Some annotation gets selected from the UI or the API. | `ANNOTATION_DATA` |
| `ANNOTATION_UNSELECTED` | Some annotation gets unselected from the UI or the API. | `ANNOTATION_DATA` |
| `ANNOTATION_MODE_STARTED` | Raised when a user picks a specific annotation type off the toolbar, or when `startAnnotationMode` runs to kick off any annotation mode. | `ANNOTATION_TYPE` |
| `ANNOTATION_MODE_ENDED` | Raised when a user leaves whatever annotation mode was previously chosen. | `ANNOTATION_TYPE` |
| `ANNOTATION_COUNT` | Reports the running total of annotations each time a new one is added or an existing one is removed. | `NUMBER_OF_ANNOTATIONS` |
