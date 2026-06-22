# Howtos Comments (part 1)

> Adobe Acrobat reference. Original prose; identifiers preserved verbatim.

Through its commenting and markup tools, the Embed API lets you attach comments to PDF documents. The toolkit covers an add-text-comment tool, sticky notes, highlights, a drawing tool, plus strikethrough and underline for text. An eraser tool joins them for wiping away pieces of drawing annotations, and undo and redo tools sit in the top bar as well.

[Figure: Annotation Tools like save button, adding sticky notes, text formatting menu and popover menu](https://raw.githubusercontent.com/AdobeDocs/pdfservices-api-documentation/main/src/pages/overview/images/annotstoolsoverview.png)

[Figure: Comment Pane with features to add comments, reply to a comment, add a note with comment and delete comments](https://raw.githubusercontent.com/AdobeDocs/pdfservices-api-documentation/main/src/pages/overview/images/commentpane.png)

## Single line implementation

Toggling the commenting tools takes just one line. Out of the box, the Embed API turns commenting on and shows those tools in the top bar. Want it off? Drop `showAnnotationTools: false` (line 9) into the previewConfig object inside the embedded JavaScript.

```html
<div id="adobe-dc-view"></div>
<script src="https://acrobatservices.adobe.com/view-sdk/viewer.js"></script>
<script type="text/javascript">
  document.addEventListener("adobe_dc_view_sdk.ready", function () {
    var adobeDCView = new AdobeDC.View({ clientId: "<YOUR_CLIENT_ID>", divId: "adobe-dc-view" });
    adobeDCView.previewFile(
      {
        content: {
          location: {
            url: "https://acrobatservices.adobe.com/view-sdk-demo/PDFs/Bodea Brochure.pdf",
          },
        },
        metaData: { fileName: "Bodea Brochure.pdf" },
      },
      { showAnnotationTools: false },
    );
  });
</script>
```

## Commenting feature overview

Here is the core commenting set the Embed API offers:

- Adding text comments, sticky notes, highlights, underlines, strikethroughs, drawing markups, etc.
- Updating annotations
- Removing annotations
- Replying to annotations

Across every annotation type the PDF Embed API ships, you get this same set of behaviors:

- Replies can be attached to annotations, letting recipients answer the author's original markup. The right-hand comments panel gathers all of them.
- Adding or updating any annotation enables the **Save** or **Download** button.
- After a save, the annotation joins the PDF and becomes part of the PDF buffer.

### Add text comments

To drop freehand text anywhere on a page: from the left-side quick tools menu pick the **Add text comment** tool, then click on the page to set your cursor and type whatever you want. Clicking outside the text box commits the annotation, and a matching comment shows up in the right-hand comments panel. What you can do:

- Updating a text comment: Click an existing text comment to revise its wording or adjust its text attributes from the toolbar — color and font size among them. **Note**: How big the text looks tracks the PDF zoom level. You can also edit it through the Edit option in that comment's overflow menu in the comments panel.
- Removing a text comment:
  - On any existing text comment in the PDF, open its toolbar and pick **Delete**.
  - Or open the overflow menu beside that comment in the comments panel and pick **Delete**.
- Moving or resizing a text comment: Set the cursor on an existing text comment and slide the text elsewhere on the same page. Dragging one of the text box's corner circles resizes it.

[Figure: Add Text Menu with option to style font and delete](https://raw.githubusercontent.com/AdobeDocs/pdfservices-api-documentation/main/src/pages/overview/images/addtext-menu.png)

### Sticky notes

A sticky note holds a short message you can drop anywhere on the PDF; resizing is not offered. What you can do:

- Adding a sticky note
  - From the left-side quick tools menu choose the **Add comment** tool, then click wherever the note should sit. A comment box opens for your text — click Post to commit it.
  - A right-click also works: choose _Add comment_ from the popover menu.
- Updating a sticky note
  - Click an existing sticky note to bring up a toolbar for recoloring it.
  - Revise the comment through the Edit option in the overflow menu of the comments panel.
- Removing a sticky note
  - Click an existing sticky note to open the toolbar, then hit delete to clear the note.
  - Alternatively, click the overflow menu for that comment in the comments panel and choose Delete.
- Moving a sticky note: Set the cursor over an existing sticky note and drag it to wherever you like.

[Figure: Sticky Note with option to change color and delete](https://raw.githubusercontent.com/AdobeDocs/pdfservices-api-documentation/main/src/pages/overview/images/stickynote1.png)

### Text markup annotations

Three text markup types are covered by the Embed API: highlight, strikethrough, and underline. What you can do:

[Figure: Text Selection with strikethrough](https://raw.githubusercontent.com/AdobeDocs/pdfservices-api-documentation/main/src/pages/overview/images/textselectiontool.png)

- Adding a text markup: Two routes get you there:
  - In the quick tools menu on the left-hand side, click the highlight/underline/strikethrough tool, then select some text. The text takes on the markup and a comment box opens for your text.
  - Or select text first, then pick the highlight text option from the context menu. The markup lands and a comment box opens for your text.

[Figure: Context Menu with text styling options available](https://raw.githubusercontent.com/AdobeDocs/pdfservices-api-documentation/main/src/pages/overview/images/contextmenu.png)

- Updating a text markup: You cannot move or resize a text markup, but you can:
  - Click an existing text markup to open a toolbar for changing its color.
  - Revise the comment through the Edit option in the overflow menu of the comments panel.

[Figure: Highlight Menu with option to change color and delete](https://raw.githubusercontent.com/AdobeDocs/pdfservices-api-documentation/main/src/pages/overview/images/highlight-menu.png)

- Removing a text markup
  - On an existing text markup, open the toolbar and pick **Delete**.
  - Or open the overflow menu beside that comment in the comments panel and pick **Delete**.

### Drawing tool

Reach for this tool to sketch any freehand shape or line. What you can do:

- Adding a drawing
  - From the quick tools menu on the left-hand side, select the drawing tool, click where the shape should start, and drag to form it. Let go of the mouse button, reposition the pointer, and keep drawing. The drawing lands together with a default comment in the comments panel.
  - A right-click works too: choose _Draw freeform_ from the popover menu.
- Updating a drawing
  - Click an existing drawing to bring up the toolbar, where attributes like color and stroke width can be changed.
  - Revise the comment through the Edit option in the overflow menu of the comments panel.
- Removing a drawing
  - Click an existing drawing to bring up the toolbar, then hit the delete option.
  - Alternatively, click the overflow menu for that comment in the comments panel and choose Delete.
- Moving or resizing a drawing
  - Set the cursor over a drawing and drag it to a new spot.
  - Set the cursor over a drawing and drag one of its corner circles to resize the annotation.

[Figure: Drawing Menu with option to change color of marker and delete](https://raw.githubusercontent.com/AdobeDocs/pdfservices-api-documentation/main/src/pages/overview/images/drawing-menu.png)

### Eraser tool

Use this one to wipe away pieces of the freehand drawing annotations you made with the drawing tool.

From the left-side quick tools menu choose the eraser tool, then drag it over the drawing areas you want gone. The revised drawing annotation is then saved to the PDF.

- You can erase pieces of one drawing or several at once, and the matching drawings update in the PDF.
- Erase a drawing entirely and that drawing drops out of the PDF.

[Figure: Eraser to erase drawing](https://raw.githubusercontent.com/AdobeDocs/pdfservices-api-documentation/main/src/pages/overview/images/eraser.png)

### Undo or Redo changes

The Undo tool in the top bar walks back your last action, one action per click. Keep clicking Undo to peel away as many prior actions as you need.

To put back what an undo removed, use the Redo tool.

[Figure: Undo Redo button on top right toolbar](https://raw.githubusercontent.com/AdobeDocs/pdfservices-api-documentation/main/src/pages/overview/images/undo-redo.png)

### Select text

The quick tools menu carries a pair of text-selection options. The **Select** option lets you mark text in the document, while the **Pan** option lets you grab and drag the whole document.

[Figure: Select and pan option](https://raw.githubusercontent.com/AdobeDocs/pdfservices-api-documentation/main/src/pages/overview/images/select-pan.png)

## Annotations API overview

Programmatic import, creation, deletion, updating, and export are all handled by the annotations API — for both comments (sticky notes) and markup such as highlight, underline, and strikethrough. Two configuration variables in the PDF Embed API switch annotations on and govern them:

- `enableAnnotationAPIs`: Defaults to _false_; setting it _true_ switches the APIs on. Your application then feeds the annotations plus the PDF buffer into the PDF Embed API, which paints the result in the browser.
- `includePDFAnnotations`: Defaults to _false_. Set _true_ and the API surfaces annotations already in the file — the supported ones stay editable while unsupported ones go read only. Editing any annotation lights up the **Save** or **Download** button, letting your add, update, and delete actions persist into the PDF.

With only `enableAnnotationAPIs` set to _true_, adding or updating annotations leaves the original PDF content untouched. Flip both variables to _true_ and the APIs do change the original PDF.

You may hand both variables to the `previewFile` API as a preview configuration.

```
Preview configuration
{
  enableAnnotationAPIs: <Boolean, default=false>,
  includePDFAnnotations: <Boolean, default=false>
}
```

Because the two variables play off each other, a few scenarios arise:

1.  When the annotation APIs are off (`enableAnnotationAPIs: false`), `includePDFAnnotations` has no effect.
2.  When the annotation APIs are on (`enableAnnotationAPIs: true`) alongside `includePDFAnnotations: false`, then:

> - Existing annotations stay hidden in the PDF Embed API, though fresh ones do show.
> - Whatever annotation you add or update — from the UI or the API — never reaches the PDF buffer, so the top bar shows no **Save** or **Download** button.

3.  When both `enableAnnotationAPIs` and `includePDFAnnotations` are _true_, then:

> - Every existing annotation the PDF Embed API supports appears and is reachable via these APIs. Unsupported ones, note, render read-only and stay out of the APIs' reach.
> - Any annotation you add or update from the UI or API is written to the PDF buffer, and whenever the PDF carries unsaved changes the **Save** or **Download** button switches on.

## Annotation schema

Whatever annotation data goes into or comes out of any API ought to follow a well-established, broadly accepted standard format. To back standards and worldwide uptake, the PDF Embed API therefore honors a strict subset of the [Web Annotations Data Model](https://www.w3.org/TR/annotation-model/), a W3C recommendation. That specification lays out thorough detail about a resource or the links between resources.

These, then, are the key fields the PDF Embed API's annotation model calls for:

```javascript
{
  "@context": [
     "https://www.w3.org/ns/anno.jsonld",
     "https://comments.acrobat.com/ns/anno.jsonld"
   ],
  "type": "Annotation",
  "id": <ANNOTATION_ID>,
  "bodyValue": String,
  "motivation": String,
  "stylesheet": {
     "type": "CssStylesheet",
     "value": <CSS_DEFINITION>,
  },
  "target": <target-node> OR <target-reply>,
  "creator": {
     "type": "Person",
     "name": String,
   },
  "created": DateTime,
  "modified": DateTime,
}
```

_Annotations data parameters_

| Parameter | Description | Required? |
| --- | --- | --- |
| context | The context that determines the meaning of the JSON as an annotation. The annotation MUST have these two values in the context parameter: [https://www.w3.org/ns/anno.jsonld](https://www.w3.org/ns/anno.jsonld), [https://comments.acrobat.com/ns/anno.jsonld](https://comments.acrobat.com/ns/anno.jsonld) | Yes |
| type | The annotation type which must be _Annotation_. | Yes |
| id | The annotation’s unique identifier. | Yes |
| bodyValue | The string value of the plain text comment associated with the annotation. | Yes |
| motivation | The motivation for an annotation is a reason for its creation and might include things like replying to another annotation or commenting on a resource. The value can be either _commenting_ or _replying_. | Yes |
| target | The value can be either in the form of `target-node` for a comment or `target-reply` for reply to an annotation. | Yes |
| creator.type | Creator refers to the agent responsible for creating the annotation. The PDF Embed API’s required value is _Person_ which denotes a human agent. | Yes |
| creator.name | The name of the annotation creator. | Yes |
| created | The date-time in UTC timezone format to denote the annotation modification time after it was created. Use xsd:dateTime with the UTC timezone expressed as “Z”. | Yes |
| modified | The date-time in UTC timezone format to denote the annotation modification time after it was created. Use xsd:dateTime with the UTC timezone expressed as “Z”. | Yes |
| source | The PDF’s unique identifier. This is same as the value of `id` in the metadata field in the `previewFile` API. | Yes |
| stylesheet.type | The type of style applied to freehand text annotations. The only permissible value is CssStylesheet. | No |
| stylesheet.value | This specifies the font size and color as a valid CSS JSON. This parameter is applicable only in case of freehand text annotations. **Note:** In the current implementation, there is no support to set the font family of the text annotation. Depending on the language of the text, the following font families will be applied: English: Helvetica; Chinese Simplified: Adobe Song Std L; Chinese Traditional: Kozuka Mincho Pr6N R; Japanese: Kozuka Mincho Pr6N R; Korean: Adobe Myungjo Std M; Other languages: Helvetica. | No |

When the annotation is a comment on the PDF, the `target` parameter takes the _target-node_ form shown here:

```javascript
{
 "source": <FILE_ID>,
 "selector": {
   "type": "AdobeAnnoSelector",
   "subtype" : "note" | "strikeout" | "highlight" | "underline" | "shape",
   "node": {
      "index": <PAGE_INDEX>
   },
   "boundingBox" : [Xmin, Ymin, Xmax, Ymax],
   "quadPoints" : [ .... ],
   "inkList" : [ [...], [...], ... ],
   "strokeColor": <COLOR_HEX_CODE>,
   "strokeWidth": Float,
   "opacity": Float (from 0.0 to 1.0),
   "styleClass": String
 }
}
```

When the annotation replies to an existing one, the `target` parameter takes the _target-reply_ form, which holds a lone parameter naming the annotation ID of the parent (the annotation this reply belongs to):

```javascript
{
 "source": <ANNOTATION_ID>,
}
```

_target-node parameters_
