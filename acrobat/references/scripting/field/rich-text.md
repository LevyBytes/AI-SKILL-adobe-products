# richText

| Version (Key) | Save-Prefs | Security | Product | Type | Access |
| --- | --- | --- | --- | --- | --- |
| 6.0 | D | No | F | Boolean | R/W |

When true, the field permits rich text formatting. It defaults to false.

Fields

text

Tied in here are richValue, defaultStyle, event. richValue, event. richChange, event. richChangeEx, the Annotation object richContents property, and the Span object.

Example 1: Pull a Field object and enable rich text formatting on it.

```javascript
var f = this.getField("Text1");
f.richText = true;
```

For a fuller example, refer to richValue.

Example 2: Tally how many rich text fields the document contains.

```javascript
var count = 0;
for ( var i = 0; i < this.numFields; i++)
{
    var fname = this.getNthFieldName(i);
    var f = this.getField(fname);
    if ( f.type == "text" && f.richText ) count++
}
console.println("There are a total of "+ count + " rich text fields.");
```
