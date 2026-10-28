# printColorProfiles

| Version (Key) | Save-Prefs | Security | Product | Type | Access |
| --- | --- | --- | --- | --- | --- |
| 6.0 | No | No | Acrobat only | Array of Strings | R |

The set of printer color spaces on hand. Each entry works as the colorProfile property value on a PrintParams object.

Example: Print out a listing of available printer color spaces:

```javascript
var l = app.printColorProfiles.length
for ( var i = 0; i < l; i++)
    console.println("(" + (i+1) + ") " + app.printColorProfiles[i]);
```
