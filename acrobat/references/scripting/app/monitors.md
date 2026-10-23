# monitors

| Version (Key) | Save-Prefs | Security | Product | Type | Access |
| --- | --- | --- | --- | --- | --- |
| 6.0 | No | No | All | Monitors object | R |

A Monitors object: an array of one or more Monitor objects, one per display monitor wired to the user’s system. Every read of app.monitors hands back a freshly rebuilt copy of that array.

The Monitors object also offers several methods for choosing a display monitor; alternatively, your JavaScript can walk the array by hand.

Example: Count the number of display monitors connected to the user’s system.

```javascript
var monitors = app.monitors;
console.println("There are " + monitors.length
    + " monitor(s) connected to this system.");
```
