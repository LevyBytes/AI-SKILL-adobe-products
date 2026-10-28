# toggleNoView

| Version (Key) | Save-Prefs | Security | Product | Type | Access |
| --- | --- | --- | --- | --- | --- |
| 6.0 | D | No | C | string | R/W |

When true, hovering the mouse over the annotation or selecting it flips the noView flag.

Should an annotation have both noView and toggleNoView turned on, it normally stays hidden; it only appears while the pointer rests on it or it is selected.

Annotations: All

### type

| Version (Key) | Save-Prefs | Security | Product | Type | Access |
| --- | --- | --- | --- | --- | --- |
| 5.0 | No | No | C | string | R |

The annotation’s type. You can assign this only inside the object-literal argument handed to the addAnnot method of the Doc object. Allowed values are:

Text

FreeText

Line

Square

Circle

Polygon

PolyLine

Highlight

Underline

Squiggly

StrikeOut

Stamp

Caret

Ink

FileAttachment

Sound

Annotations: All
