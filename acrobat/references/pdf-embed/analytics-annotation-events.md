# Analytics - Annotation events

When someone works with an annotation, web developers can be notified through events. These fire for annotation actions carried out via the UI.

Register the events callback by turning `enableAnnotationEvents` on (set it to _true_) and passing it along. To narrow things down, supply the annotation event types you care about in the `listenOn` parameter; if `listenOn` stays empty, the API sends back every annotation event.

```javascript
const eventOptions = {
  //Pass the events to receive.
  //If no event is passed in listenOn, then all annotation events will be received.
  listenOn: [
    AdobeDC.View.Enum.AnnotationEvents.ANNOTATION_ADDED,
    AdobeDC.View.Enum.AnnotationEvents.ANNOTATION_UPDATED,
  ],
  enableAnnotationEvents: true,
};

adobeDCView.registerCallback(
  AdobeDC.View.Enum.CallbackType.EVENT_LISTENER,
  function (event) {
    console.log(event.type, event.data);
  },
  eventOptions,
);
```

_List of annotation events_

| Event type | Event description | Event data |
| --- | --- | --- |
| `ANNOTATION_ADDED` | A new annotation is added to PDF. | `ANNOTATION_TYPE` |
| `ANNOTATION_CLICKED` | An existing annotation is clicked. | `ANNOTATION_TYPE` |
| `ANNOTATION_UPDATED` | An existing annotation is updated. | `ANNOTATION_TYPE` |
| `ANNOTATION_DELETED` | An annotation is deleted. | `ANNOTATION_TYPE` |
| `ANNOTATION_MOUSE_OVER` | The cursor moves over any annotation. | `ANNOTATION_TYPE` |
| `ANNOTATION_MOUSE_OUT` | The cursor moves out of any annotation. | `ANNOTATION_TYPE` |
| `ANNOTATION_SELECTED` | Any existing annotation is selected. | `ANNOTATION_TYPE` |
| `ANNOTATION_UNSELECTED` | A selected annotation is unselected | `ANNOTATION_TYPE` |
| `ANNOTATION_MODE_STARTED` | The user selects a particular annotation type from the toolbar. | `ANNOTATION_TYPE` |
| `ANNOTATION_MODE_ENDED` | A user exits any previously selected annotation mode. | `ANNOTATION_TYPE` |
| `ANNOTATION_COUNT` | Denotes the total number of annotations when any new annotation is added or any existing annotation is deleted. | `NUMBER_OF_ANNOTATIONS` |

- When the annotation APIs stay disabled, the event data carries the annotation type that triggered the event.
- With the annotation APIs enabled, the event data instead carries that annotation's full data as JSON.
