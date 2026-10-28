# defaultTransition

| Version (Key) | Save-Prefs | Security | Product | Type | Access |
| --- | --- | --- | --- | --- | --- |
| 5.0 | P | No | All | String | R/W |

Which transition fires by default as pages advance under full screen mode. Pull the roster of transition names the viewer supports from transitions.

“No Transition” is equivalent to app.fs.defaultTransition = "";

Example: Switch the document over to presentation mode.

```javascript
app.fs.defaultTransition = "WipeDown";
app.fs.isFullScreen = true;
```
