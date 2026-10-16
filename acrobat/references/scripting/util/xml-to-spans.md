# xmlToSpans

| Version (Key) | Save-Prefs | Security | Product |
| --- | --- | --- | --- |
| 6.0 | No | No | All |

Turns an XML (XFA) string of the kind documented in the PDF Reference into an array of Span objects, ready to assign as the richValue or richContents of a field or annotation.

Parameters

| Parameter | Description |
| --- | --- |
| a string | An XML (XFA) string that becomes an array of Span objects. |

Returns

An Array of Span objects

Example: Pull the rich text string out of "Text1", convert it into XML, then convert that back into an array of Span objects and refill the text field.

```javascript
var f = getField("Text1");
var spans = f.richValue;
var str = util.spansToXML(spans);
var spans = util.xmlToSpans(str);
f.richValue = spans;
```
