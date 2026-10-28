# defaultSize

| Version (Key) | Save-Prefs | Security | Product | Type | Access |
| --- | --- | --- | --- | --- | --- |
| 6.0 | No | No | All | Object | R |

Gives back a read-only object holding the width and height of the MediaClip belonging to this MediaPlayer:

```javascript
{ width: number, height: number }
```

Should the player be unable to supply that figure, the value is undefined.
