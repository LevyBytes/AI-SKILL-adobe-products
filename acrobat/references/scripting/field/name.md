# name

| Version (Key) | Save-Prefs | Security | Product | Type | Access |
| --- | --- | --- | --- | --- | --- |
| 3.01 | No | No | All | String | R |

Hands back the field's fully qualified name as a string object.

From Acrobat 6.0 onward, when the Field object stands for a single individual widget, an appended '.' plus the widget index is tacked onto the returned name.

Fields

all

Example: Grab a Field object and print its name to the console.

```javascript
var f = this.getField("myField");

// Displays "myField" in the console window
console.println(f.name);
```
