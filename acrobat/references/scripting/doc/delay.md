# delay

| Version (Key) | Save-Prefs | Security | Product | Type | Access |
| --- | --- | --- | --- | --- | --- |
| 4.0 | No | No | All | Boolean | R/W |

Use this property to hold off redrawing appearance changes across every field in the document. It typically buffers a run of field changes before you ask the fields to rebuild their appearance. While it is true, each change waits in a queue until delay returns to false, at which moment every field on the page is redrawn.

See also the Field object delay property.
