# isSigned

| Version (Key) | Save-Prefs | Security | Product | Type | Access |
| --- | --- | --- | --- | --- | --- |
| 6.0 | No | No | All but Reader | Boolean | R |

Gives back true when the FDF data file carries a signature.

Example: Check whether the fdf carries a signature.

```javascript
var fdf = app.openFDF("/C/temp/myDoc.fdf");
console.println( "It is "+ fdf.isSigned + " that this FDF is signed");
fdf.close();
```

See a more complete example following signatureSign.
