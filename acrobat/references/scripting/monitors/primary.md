# primary

| Version (Key) | Save-Prefs | Security | Product |
| --- | --- | --- | --- |
| 6.0 | No | No | All |

Hands back a duplicate of the Monitors object with every secondary display stripped out, keeping just the primary display when it was part of the starting list.

Should the primary display be absent from the starting list, the call returns a Monitors array carrying at least one display chosen arbitrarily from that list.

Returns

A Monitors object

Example: fetch the primary display and read off its color depth.

```javascript
var monitors = app.monitors.primary();
// Recall that each element in a monitors object is a monitor object
// This code uses monitor.colorDepth
console.println( "Color depth of primary monitor is "

     + monitors[0].colorDepth );
```
