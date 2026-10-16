# Annotation schema

Whatever annotation data goes into or comes out of any API ought to follow a well-established, broadly accepted standard format. To back standards and worldwide uptake, the PDF Embed API therefore honors a strict subset of the [Web Annotations Data Model](https://www.w3.org/TR/annotation-model/), a W3C recommendation. That specification lays out thorough detail about a resource or the links between resources.

These, then, are the key fields the PDF Embed API's annotation model calls for:

Annotation record fields:

| Field | Value or type |
| --- | --- |
| `@context` | `https://www.w3.org/ns/anno.jsonld` and `https://comments.acrobat.com/ns/anno.jsonld`. |
| `type` | `Annotation`. |
| `id` | Annotation identifier. |
| `bodyValue`, `motivation` | Strings. |
| `stylesheet.type` | `CssStylesheet`. |
| `stylesheet.value` | CSS definition string. |
| `target` | A document-node target or an annotation-reply target, as described below. |
| `creator.type` | `Person`. |
| `creator.name` | String. |
| `created`, `modified` | Date-time values. |

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

Document-node annotation target:

| Field | Value or type |
| --- | --- |
| `source` | PDF file identifier. |
| `selector.type` | `AdobeAnnoSelector`. |
| `selector.subtype` | One of `note`, `strikeout`, `highlight`, `underline`, or `shape`. |
| `selector.node.index` | Page index. |
| `selector.boundingBox` | Coordinates in `[Xmin, Ymin, Xmax, Ymax]` order. |
| `selector.quadPoints` | Quad-point coordinate array. |
| `selector.inkList` | Array of coordinate arrays. |
| `selector.strokeColor` | Hexadecimal color code. |
| `selector.strokeWidth` | Floating-point value. |
| `selector.opacity` | Floating-point value from 0.0 to 1.0. |
| `selector.styleClass` | String. |

When the annotation replies to an existing one, the `target` parameter takes the _target-reply_ form, which holds a lone parameter naming the annotation ID of the parent (the annotation this reply belongs to):

```json
{
  "source": "<ANNOTATION_ID>"
}
```

Replace the placeholder with the parent annotation ID.

_target-node parameters_

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
