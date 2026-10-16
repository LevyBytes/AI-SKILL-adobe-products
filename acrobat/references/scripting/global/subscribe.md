# subscribe

| Version (Key) | Save-Prefs | Security | Product |
| --- | --- | --- | --- |
| 5.0 | No | No | All |

Lets fields refresh on their own whenever a global variable’s value shifts. Should the named property cVariable change — even from inside another document — the named function fCallback fires. A published property can carry several subscribers at once.

Parameters

| Parameter | Description |
| --- | --- |
| cVariable | The global property in question. |
| fCallback | The function fired once that property changes. |

Here is how the callback function’s syntax looks:

The subscription callback receives the new global value as its argument. Implement your processing in `function fCallback(newval) { ... }` and register that callback as described above.

Closing the document that first registered the script, or deleting the (global) property, shuts the callback down.

Example: This example assumes Enable Global Object Security Policy is left unchecked. Two files, setRadius.pdf and calcVolume.pdf, sit open in Acrobat or Adobe Reader:

A lone button on setRadius.pdf carries this code

```javascript
global.radius = 2;
```

Over on calcVolume.pdf sits a document-level JavaScript called subscribe :

```javascript
global.subscribe("radius", RadiusChanged);
function RadiusChanged(x)  // callback function
{
    var V = (4/3) * Math.PI * Math.pow(x,3);
    this.getField("MyVolume").value = V;  // Put value in text field
}
```

With the two files both open, a click on the button inside setRadius.pdf instantly refreshes the text field “MyVolume” in calcVolume.pdf to 33.51032 (the figure that global.radius = 2 produces).
