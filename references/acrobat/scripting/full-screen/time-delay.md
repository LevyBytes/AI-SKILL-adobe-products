# timeDelay

| Version (Key) | Save-Prefs | Security | Product | Type | Access |
| --- | --- | --- | --- | --- | --- |
| 5.0 | P | No | All | Number | R/W |

How many seconds elapse, by default, before a page turns on its own under full screen mode. Toggle automatic page turning on or off via useTimer.

Example: Set full screen properties, then go into full screen mode.

```javascript
app.fs.timeDelay = 5;          // Delay 5 seconds
app.fs.useTimer = true;        // Activate automatic page turning
app.fs.usePageTiming = true;   // Allow page override
app.fs.isFullScreen = true;    // Go into full screen
```
