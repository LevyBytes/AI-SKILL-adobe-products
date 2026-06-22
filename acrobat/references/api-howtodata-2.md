# Howtodata (part 2)

> Adobe Acrobat reference. Original prose; identifiers preserved verbatim.

## Analytics — Basic events

Beyond the PDF analytics events, the PDF Embed API also raises events that reveal what users do around file preview. The same events callback delivers them. With that callback registered, these file preview events fire:

| Event type | Event description | Event data |
| --- | --- | --- |
| `APP_RENDERING_START` | When the PDF starts to render in the viewer. | None |
| `APP_RENDERING_DONE` | When the first page of the PDF is displayed in the viewer.. | None |
| `APP_RENDERING_FAILED` | When the PDF fails to render because of an unexpected error. | None |
| `PDF_VIEWER_OPEN` | When the PDF viewer opens. | None |
| `PDF_VIEWER_CLOSE` | When the PDF viewer closes. | None |
| `PDF_VIEWER_READY` | When the PDF is rendered completely and the PDF viewer is ready to perform functionalities, such as annotations and form-filling. This event is especially useful in case of linearized PDFs to check when the PDF gets fully downloaded. To know more about linearization, see the section [PDF Linearization](api-howtos.md). | None |

To pick up the extra file preview events, turn `enableFilePreviewEvents` on by setting it to _true_ and hand it to the events callback. Want only certain events? List those event types in the `listenOn` parameter. Leave `listenOn` empty and the API hands back every file preview event.

```javascript
const eventOptions = {
  //Pass the events to receive.
  //If no event is passed in listenOn, then all file preview events will be received.
  listenOn: [
    AdobeDC.View.Enum.Events.APP_RENDERING_START,
    AdobeDC.View.Enum.FilePreviewEvents.PREVIEW_KEY_DOWN,
    AdobeDC.View.Enum.FilePreviewEvents.PREVIEW_PAGE_VIEW_SCROLLED,
  ],
  enableFilePreviewEvents: true,
};

adobeDCView.registerCallback(
  AdobeDC.View.Enum.CallbackType.EVENT_LISTENER,
  function (event) {
    console.log(event);
  },
  eventOptions,
);
```

_List of file preview events_

| Event type | Event description | Event data |
| --- | --- | --- |
| `PREVIEW_KEY_DOWN` | Any keyboard key is pressed over any PDF page. | `{ altKey: <BOOLEAN>, code: <KEY_VALUE>, composed: <BOOLEAN>, ctrlKey: <BOOLEAN>, key: <KEYBOARD_CHARACTER>, keyCode: <KEY_CODE>, location: <LOCATION>, metaKey: <BOOLEAN>, shiftKey: <BOOLEAN>, type: “keydown” }` |
| `PREVIEW_PAGE_VIEW_SCROLLED` | The PDF page is scrolled. | `{ clientHeight: <CLIENT_HEIGHT>, clientWidth: <CLIENT_WIDTH>, scrollHeight: <SCROLL_HEIGHT>, scrollWidth: <SCROLL_WIDTH>, scrollLeft: <SCROLL_LEFT>, scrollTop: <SCROLL_TOP> }` |
| `PREVIEW_DOCUMENT_CLICK` | A user clicks on the area in the webpage which is outside the PDF preview (excluding the top bar and right-hand panel). | `{ clientX: <CLIENT_WIDTH>, clientY: <CLIENT_HEIGHT>, pageX: <PAGE_WIDTH>, pageY: <PAGE_HEIGHT>, screenX: <SCREEN_WIDTH>, screenY: <SCREEN_HEIGHT> }` |
| `PREVIEW_PAGE_CLICK` | A user clicks on any PDF page. | `{ pageNumber: <PAGE_NUMBER> }` |
| `PREVIEW_PAGE_DOUBLE_CLICK` | A user double-clicks on any PDF page. | `{ pageNumber: <PAGE_NUMBER> }` |
| `PREVIEW_PAGE_MOUSE_ENTER` | The mouse pointer enters any PDF page. | `{ pageNumber: <PAGE_NUMBER> }` |
| `PREVIEW_PAGE_MOUSE_LEAVE` | The mouse pointer leaves any PDF page. | `{ pageNumber: <PAGE_NUMBER> }` |
| `CURRENT_ACTIVE_PAGE` | Returns the page number of the current page in view. | `{ pageNumber: <PAGE_NUMBER> }` |
| `PREVIEW_SELECTION_END` | Any text is selected in the PDF. | `{ startPageNumber: <PAGE_NUMBER>, endPageNumber: <PAGE_NUMBER>, newSelection: <BOOLEAN>, selections: { page<PAGE_NUMBER>: { bbox0: { deviceBottom: <Ymin-coordinate>, deviceLeft: <Xmin-coordinate>, deviceRight: <Xmax-coordinate>, deviceTop: <Ymax-coordinate> }, bbox1: {…}, bbox2: {…}, …, bboxCount: <BBOX_COUNT> }} }` |
| `PREVIEW_ZOOM` | A zoom operation is applied to any PDF page. | `<ZOOM_LEVEL>` |
| `PAGES_IN_VIEW_CHANGE` | The page in view changes to a different page through scrolling or page navigation. | `{ startPage: { pageNumber: <PAGE_NUMBER>, fractionVisible <PAGE_VISIBLE_FRACTION> }, endPage: { pageNumber: <PAGE_NUMBER>, fractionVisible <PAGE_VISIBLE_FRACTION> }}` |
| `UNSUPPORTED_FEATURE_FOUND` | When user tries to use an unsupported feature in PDF Embed API. The event data provides information about the type of unsupported feature in the featureName field and relevant metadata of PDF in the data field. For example, XFA form fields are not supported in PDF Embed API and this event is generated when a user tries to fill any such form field. | `{ featureName: <FEATURE_NAME>, data: {hasJS: <BOOLEAN>, hasUnsupportedActions: <BOOLEAN, hasUnsupportedWidget: <BOOLEAN>, hasXFA: <BOOLEAN> }}` |

## Analytics — Annotation events

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
