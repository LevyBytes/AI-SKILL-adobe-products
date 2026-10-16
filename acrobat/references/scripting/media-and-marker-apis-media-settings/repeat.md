# repeat

| Version (Key) | Save-Prefs | Security | Product | Type | Access |
| --- | --- | --- | --- | --- | --- |
| 6.0 | No | No | All | Number | R/W |

Counts how many times playback loops on its own. Its default of 1 leaves the clip playing a single time.

Whole-number repeat values are all that many players accept, though a few permit fractional ones like 1.5. Hand it Infinity and the clip loops without stopping.

The default value is 1.

Example — loop a clip endlessly straight out of a Rendition action.

```javascript
var player = app.media.openPlayer({settings: { repeat: Infinity } });
```
