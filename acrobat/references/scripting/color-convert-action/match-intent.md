# matchIntent

| Version (Key) | Save-Prefs | Security | Product | Type | Access |
| --- | --- | --- | --- | --- | --- |
| 8.0 | No | No | Acrobat Pro only | Integer | R/W |

Lines up against whichever rendering intent the object uses. Table 4.20 of the PDF Reference covers rendering intents at length.

You get at the value of matchIntent via the colorConvertAction object's constants.renderingIntents object, laid out like so:

constants.renderingIntents object

| Name | Description |
| --- | --- |
| AbsoluteColorimetric | Absolute colorimetric rendering intent. |
| RelativeColorimetric | Relative colorimetric rendering intent. |
| Saturation | Saturation rendering intent |
| Perceptual | Perceptual rendering intent |
| Any | Match any of the above rendering intents |
| Document | Use the rendering intent specified by the current graphics state in which the matched object is rendered (used by convertIntent only). |
