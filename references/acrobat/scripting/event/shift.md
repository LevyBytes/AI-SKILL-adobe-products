# shift

| Version (Key) | Save-Prefs | Security | Product | Type | Access |
| --- | --- | --- | --- | --- | --- |
| 3.01 | No | No | All | Boolean | R |

Reads true while the shift key is held during a given event, false otherwise.

Example: What follows is a mouse-up button action:

```javascript
if (event.shift)
    this.gotoNamedDest("dest2");
else
    this.gotoNamedDest("dest1");
```
