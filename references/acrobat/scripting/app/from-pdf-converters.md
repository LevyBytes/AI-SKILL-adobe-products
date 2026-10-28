# fromPDFConverters

| Version (Key) | Save-Prefs | Security | Product | Type | Access |
| --- | --- | --- | --- | --- | --- |
| 6.0 | No | No | All | Array | R |

An array holding file-type conversion ID strings. Any one of these strings is valid input to the saveAs method on the Doc object.

Example: List all currently supported conversion ID strings.

```javascript
for ( var i = 0; i < app.fromPDFConverters.length; i++)
    console.println(app.fromPDFConverters[i]);
```
