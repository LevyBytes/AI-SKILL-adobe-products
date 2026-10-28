# colorDepth

| Version (Key) | Save-Prefs | Security | Product | Type | Access |
| --- | --- | --- | --- | --- | --- |
| 6.0 | No | No | All | Number | R |

The monitor’s color depth: in other words, its bits per pixel.

Example: Grab the primary monitor and inspect its color depth, picking that monitor out with the Monitors.primary method.

```javascript
var monitors = app.monitors.primary();
console.println( "Color depth of primary monitor is "

     + monitors[0].colorDepth );
```
