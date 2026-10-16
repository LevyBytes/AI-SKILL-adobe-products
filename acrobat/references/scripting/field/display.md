# display

| Version (Key) | Save-Prefs | Security | Product | Type | Access |
| --- | --- | --- | --- | --- | --- |
| 4.0 | D | No | All | Integer | R/W |

Sets whether the field shows or hides both on screen and in print. The table below lists the display property's values.

| Effect | Keyword |
| --- | --- |
| Field shows both on screen and when printed | display.visible |
| Field is suppressed both on screen and when printed | display.hidden |
| Field shows on screen yet stays out of print | display.noPrint |
| Field is suppressed on screen yet does print | display.noView |

The older hidden and print properties are superseded by this one.

Fields

all

Example:

```javascript
// Assign the display property
var f = getField("myField");
f.display = display.noPrint;

// Test whether field is hidden on screen and in print
if (f.display == display.hidden) console.println("hidden");
```
