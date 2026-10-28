# bestColor

| Version (Key) | Save-Prefs | Security | Product |
| --- | --- | --- | --- |
| 6.0 | No | No | All |

Hands back a duplicate of the Monitors object trimmed to whichever display or displays carry the deepest color depth.

Pass nMinColor, and the call yields an empty Monitors array whenever the top color depth falls below nMinColor.

Parameters

| Parameter | Description |
| --- | --- |
| nMinColor | (optional) Sets the smallest color depth a display must reach. |

Returns

A Monitors object

Example:

```javascript
var monitors = app.monitors.bestColor(32);
if (monitors.length == 0 )
    console.println("Cannot find the required monitor.");
else
    console.println("Found at least one monitor.");
```
