# rotation

| Version (Key) | Save-Prefs | Security | Product | Type | Access |
| --- | --- | --- | --- | --- | --- |
| 6.0 | D | No | Not available in Reader | Integer | R/W |

How far a widget is turned, measured in counterclockwise steps. The values you can use are 0, 90, 180, and 270.

Fields

all

Example: Drop a rotated text field onto every page and put text in it.

```javascript
for ( var i=0; i < this.numPages; i++) {
    var f = this.addField("myRotatedText"+i,"text",i,[6, 6+72, 18, 6]);
    f.rotation = 90; f.value = "Confidential";
    f.textColor = color.red; f.readonly = true;
}
```
