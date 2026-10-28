# getField

| Version (Key) | Save-Prefs | Security | Product |
| --- | --- | --- | --- |
| 3.01 | No | No | All |

Binds a Field object out of the PDF document to a JavaScript variable.

From Acrobat 6.0 forward, the Field object of a single widget can be returned by this method. The Field object entry has more on this.

Parameters

| Parameter | Description |
| --- | --- |
| cName | Which field you are after, by name. |

Returns

A Field object representing a form field in the PDF document.

Example 1: Turn a text field into a multiline one and treble its height

```javascript
var f = this.getField("myText");
var aRect = f.rect;               // Get bounding rectangle
f.multiline = true;               // Make it multiline
var height = aRect[1]-aRect[3];   // Calculate height
aRect[3] -= 2* height;            // Triple the height of the text field
f.rect = aRect;                   // and make it so
```

Example 2 (Acrobat 6.0)

Wire up a JavaScript action on a single widget — here, a radio button:

```javascript
var f = this.getField("myRadio.0");
f.setAction("MouseUp",
    "app.alert('Thanks for selecting the first choice.');");
```

Example 3: List all properties of a field. This technique can be used to programmatically duplicate a field and its properties.

```javascript
f = this.getField("myField");
for ( var i in f ) {
    try {
        if ( typeof f[i] != "function" )    // Do not list field methods
            console.println( i + ":" + f[i] )
    } catch(e) {}           // An exception occurs when we get a property
}                         // that does not apply to this field type.
```
