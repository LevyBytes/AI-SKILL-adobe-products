# strokeColor

| Version (Key) | Save-Prefs | Security | Product | Type | Access |
| --- | --- | --- | --- | --- | --- |
| 4.0 | D | No | F | Array | R/W |

Sets the color used to stroke a field's rectangle with a line whose thickness matches the line width. You define the value with transparent, gray, RGB, or CMYK color. For how to build color arrays and how their values feed this property, consult Color arrays.

Earlier editions of this spec called this property borderColor. That older name still works for backward compatibility, but using it is discouraged.

Fields

all

Example: Recolor every text field in the document so its stroke is red.

```javascript
   for ( var i=0; i < this.numFields; i++) {
       var fname = this.getNthFieldName(i);
       var f = this.getField(fname);
       if ( f.type == "text" ) f.strokeColor = color.red;
}
```
