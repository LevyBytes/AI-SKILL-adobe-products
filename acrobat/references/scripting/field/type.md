# Field.type

| Version (Key) | Save-Prefs | Security | Product | Type | Access |
| --- | --- | --- | --- | --- | --- |
| 3.01 | No | No | All | String | R |

Hands back the field's type as a string. The valid types are:

```text
button
checkbox
combobox
listbox
radiobutton
signature
text
```

Fields

all

Example: Tally the text fields in the document.

```javascript
var count = 0;
for ( var i=0; i<this.numFields; i++) {
    var fname = this.getNthFieldName(i);
    if ( this.getField(fname).type == "text" ) count++; }
console.println("There are " + count + " text fields.");
```
