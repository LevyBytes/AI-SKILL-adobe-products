# Howtos Comments (part 2)

> Adobe Acrobat reference. Original prose; identifiers preserved verbatim.

## Annotation schema

| Parameter name | Description | Required? |
| --- | --- | --- |
| source | Identifier that uniquely tags the PDF. | Yes |
| selector.type | Only a single value is accepted here by the PDF Embed API: _AdobeAnnoSelector_. | Yes |
| selector.subtype | Which kind of annotation this is. The allowed entries are _note_, _highlight_, _shape_, _underline_, _strikeout_, and _freetext_. | Yes |
| selector.node | Whatever element inside the document the comment is attached to. With PDFs, that `node` object holds just one property, `index`. | Yes |
| selector.node.index | Zero-based page number within the PDF. | Yes |
| selector.boundingBox | Where, in PDF page coordinates, the rectangle enclosing the annotation sits. Expect four numbers \[Xmin, Ymin, Xmax, Ymax\]: the rectangle runs from Xmin to Xmax along X and from Ymin to Ymax along Y, and each of Xmin, Ymin, Xmax, and Ymax is a float. | Yes |
| selector.quadPoints | Relevant only to highlight, underline, or strikeout types. These are the PDF page coordinates marking the upper-left, upper-right, lower-left, and lower-right corner of every rectangle that wraps the annotation. You get back an array holding many coordinates \[X1, Y1, X2, Y2, …\] across all the rectangles, with every value a float. | Required only if annotation subtype is _highlight_, _underline_ or _strikeout_. |
| selector.inkList | Float. Coordinates on the PDF page tracing the shape annotation. The structure is an array of N arrays \[\[X1, Y1, X2, Y2, …\], \[X1, Y1, X2, Y2, …\], …\]; within each inner array the X-axis and Y-axis values alternate to mark the points the shape is traced through. | Required only if annotation subtype is _shape_. |
| selector.strokeColor | The annotation's HEX color the way it renders on screen. | No |
| selector.strokeWidth | A float giving how thick the drawing annotation's line is. | No |
| selector.opacity | A float from 0.0 through 1.0 that sets how opaque the annotation appears. | No |
| styleClass | Holds the CSS class named in stylesheet.value, which then styles the add text annotation. | No |

_target-reply parameters_

| Parameter name | Description | Required? |
| --- | --- | --- |
| source | Unique tag of the parent annotation that this reply hangs off of. | Yes |

### Annotation data examples

More sample code and examples are available in the [samples
repo](https://www.adobe.com/go/pdfembedapi_samples).

### Note annotation data

```javascript
{
      "@context": [
          "https://www.w3.org/ns/anno.jsonld",
          "https://comments.acrobat.com/ns/anno.jsonld"
      ],
      "type": "Annotation",
      "id": "079d66a4-5ec2-4703-ae9d-30ccbb1aa84c",
      "bodyValue": "I added a note!",
      "motivation": "commenting",
      "target": {
          "source": "77c6fa5d-6d74-4104-8349-657c8411a834",
          "selector": {
              "node": {
                  "index": 1
              },
              "opacity": 0.4,
              "subtype": "note",
              "boundingBox": [
                  69.3311157226562,
                  76.4769897460938,
                  86.9484252929688,
                  94.63037109375
              ],
              "strokeColor": "#ff0808",
              "type": "AdobeAnnoSelector"
          }
      },
      "creator": {
          "type": "Person",
          "name": "John Smith"
      },
      "created": "2018-08-02T14:45:37Z",
      "modified": "2020-01-20T07:54:10Z"
}
```

### Reply annotation data

```javascript
{
   "@context": [
       "https://www.w3.org/ns/anno.jsonld",
       "https://comments.acrobat.com/ns/anno.jsonld"
   ],
   "type": "Annotation",
   "id": "eb46d1a9-e9c3-4e81-a6f4-ce5ba7a905e9",
   "bodyValue": "Reply to this",
   "motivation": "replying",
   "target": {
       "source": "079d66a4-5ec2-4703-ae9d-30ccbb1aa84c"
   },
   "creator": {
       "type": "Person",
       "name": "Samuel Lee"
   },
   "created": "2020-02-02T14:45:37Z",
   "modified": "2020-02-02T07:57:03Z"
}
```

### Add text annotation data

```javascript
{
      "@context": [
          "https://www.w3.org/ns/anno.jsonld",
          "https://comments.acrobat.com/ns/anno.jsonld"
      ],
      "type": "Annotation",
      "id": "02dcf931-d1cb-49c1-a8bc-d047892a06bc",
      "bodyValue": "I added a text annotation",
      "motivation": "commenting",
      "stylesheet": {
          "type": "CssStylesheet",
          "value": "body-value-css { font: 13px Helvetica; color: #0000FF; }"
      },
      "target": {
          "source": "77c6fa5d-6d74-4104-8349-657c8411a834",
          "selector": {
              "node": {
                  "index": 1
              },
              "subtype": "freetext",
              "boundingBox": [
                  306.41829735235586,
                  339.01199687491595,
                  475.729044456285,
                  357.0653042030006
              ],
              "styleClass": "body-value-css",
              "type": "AdobeAnnoSelector"
          }
      },
      "creator": {
          "type": "Person",
          "name": "John Smith"
      },
      "created": "2021-01-15T14:45:37Z",
      "modified": "2021-01-15T14:45:37Z"
}
```

## Annotations interface

To call any annotations API, reach for the `AnnotationManager` interface that the PDF Embed API hands you; every one of these APIs is invoked from there. One prerequisite applies first: switch `enableAnnotationAPIs` to _true_ and supply it as part of the preview configuration handed to the `previewFile` API.

Here is how you call the APIs through `annotationManager`:

```html
<html>
  <head>
    <title>Adobe Document Cloud PDF Embed API Sample</title>
    <meta charset="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
    <meta id="viewport" name="viewport" content="width=device-width, initial-scale=1" />
  </head>

  <body style="margin: 0px">
    <div id="adobe-dc-view"></div>
    <script src="https://acrobatservices.adobe.com/view-sdk/viewer.js"></script>
    <script type="text/javascript">
      document.addEventListener("adobe_dc_view_sdk.ready", function () {
        var adobeDCView = new AdobeDC.View({
          clientId: "<YOUR_CLIENT_ID>",
          divId: "adobe-dc-view",
        });
        var previewFilePromise = adobeDCView.previewFile(
          {
            content: {
              location: {
                url: "https://acrobatservices.adobe.com/view-sdk-demo/PDFs/Bodea Brochure.pdf",
              },
            },
            metaData: {
              fileName: "Bodea Brochure.pdf",
              id: "77c6fa5d-6d74-4104-8349-657c8411a834",
            },
          },
          {
            enableAnnotationAPIs: true,
          },
        );

        previewFilePromise.then((adobeViewer) => {
          adobeViewer.getAnnotationManager().then((annotationManager) => {
            // All annotation APIs can be invoked here
          });
        });
      });
    </script>
  </body>
</html>
```

Once the annotation APIs are switched on, a PDF ID has to ride along in the metadata field of your `previewFile` call. That ID is what singles out the PDF so annotations have somewhere to attach.

```javascript
adobeDCView.previewFile({
   content:   {location: {url: "https://acrobatservices.adobe.com/view-sdk-demo/PDFs/Bodea Brochure.pdf"}},
   metaData:  {fileName: "Bodea Brochure.pdf", id: "77c6fa5d-6d74-4104-8349-657c8411a834"}
}
```

## Basic APIs for commenting

Adding, importing, exporting, deleting, and updating annotations can all be done programmatically through the handful of APIs the PDF Embed API exposes.

### addAnnotations API

Use this one to add or strictly import supported annotations. Feed it a JSON array carrying the annotation data, which has to follow the [Annotation schema](https://raw.githubusercontent.com/AdobeDocs/pdfservices-api-documentation/main/src/pages/overview/pdf-embed-api/howtos-comments.md#annotation-schema). It accepts a lone annotation just as happily as a batch of them.

### Input parameters

A JSON array holding the annotations as a list: `[Annotation_1, Annotation_2, ...]`

### API output

A Promise comes back that:

- settles successfully once the API call goes through
- turns down, handing over an error object with a code and a message, should the call fail.

### API signature

```javascript
const list_of_annotations = [Annotation_1, Annotation_2, ...];

previewFilePromise.then(adobeViewer => {
        adobeViewer.getAnnotationManager().then(annotationManager => {
                        annotationManager.addAnnotations(list_of_annotations)
                                        .then(() => console.log("Success"))
                                        .catch(error => console.log(error));
         });
});
```

### getAnnotations API

Driven by a filter the client supplies, this API pulls out and hands back PDF annotation data. What comes back is a JSON array, and the annotation data inside it follows the layout set out in the [Annotation schema](https://raw.githubusercontent.com/AdobeDocs/pdfservices-api-documentation/main/src/pages/overview/pdf-embed-api/howtos-comments.md#annotation-schema).

### Input parameters

- Leave the filter empty and every annotation's data comes back.
- Supply a list of annotation IDs in the filter and only the annotations whose IDs match get returned.
- Supply a page range in the filter and only annotations sitting on those pages get returned.

```javascript
filter = {
        annotationIds:
                [Annotation_ID_1, Annotation_ID_2, ...],
        pageRange:{
                startPage: <Page_Number>,
                endPage: <Page_Number>
        },
}
```

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

### deleteAnnotations API

Working from the filter the client passes, this API removes PDF annotations.

### Input parameters

- Leave the filter empty and all of the PDF's annotations get removed.
- Pass a list of annotation IDs in the filter and only the matching ones are removed; everything else stays put.
- Pass a page range in the filter and only the annotations on those pages are removed, with the rest left alone.

```javascript
filter = {
  annotationIds:
     [Annotation_ID_1, Annotation_ID_2, ...],
  pageRange:{
     startPage: <Page_Number>,
     endPage: <Page_Number>
  }
}
```

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

### updateAnnotation API

One existing annotation in the PDF gets revised by this API, covering the `bodyValue` parameter, the `font` and `color` parameters nested under `stylesheet`, and further parameters under `selector` like `strokeColor`, `strokeWidth`, `boundingBox` and `inkList`.

Hand it annotation data carrying the revised parameters; it locates the annotation whose ID appears in that input and writes the changes onto it. That annotation data has to match the same layout the Annotation schema lays out.

Through this API, the `boundingBox` parameter can be revised only on note, add text, and drawing annotations.

### Input parameters

JSON object containing the annotation data.

### API output

A Promise comes back that:

- settles when the update goes through,
- turns down with an error object carrying a code and message if the update fails.

### API signature

```javascript
const annotation_data = <Annotation_Data>;

previewFilePromise.then(adobeViewer => {
        adobeViewer.getAnnotationManager().then(annotationManager => {
                        annotationManager.updateAnnotation(annotation_data)
                                        .then (()=> console.log("Success"))
                                        .catch(error => console.log(error));
 });
});
```

## Annotation events

Whenever a user's action touches an annotation, website developers can be notified through events. Both UI-driven annotation actions and ones carried out via the annotation APIs raise these events.

You have two routes for catching them: lean on the Events callback, or use the `annotationManager` interface.

### Events callback usage

Hook up the events callback and turn on the `enableAnnotationEvents` flag to start receiving them.

For details, see [Annotation events](api-howtodata.md)

### annotationManager interface

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

## Handling existing annotations

On top of the others, the PDF Embed API ships two APIs for clearing out existing annotations or persisting new ones. Both work only while `includePDFAnnotations` is _true_.

### removeAnnotationsFromPDF API

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

### addAnnotationsInPDF API

Feed this API a list of supported annotations and it writes them into the PDF buffer. What you get back is the refreshed PDF buffer.

### Input parameters

A JSON array of annotation data: `[Annotation_1, Annotation_2, ...]`

### API output

A Promise comes back that:

- settles with the refreshed PDF buffer whenever the run succeeds.
- turns down and hands over an error object holding an error code and a message on failure.

### API signature

```javascript
const list_of_annotations = [Annotation_1, Annotation_2, ...];

previewFilePromise.then(adobeViewer => {
        adobeViewer.getAnnotationManager().then(annotationManager => {
                        annotationManager.addAnnotationsInPDF(list_of_annotations)
                                        .then(result => console.log(result))
                                        .catch(error => console.log(error));
         });
});
```
