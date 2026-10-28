# rate

| Version (Key) | Save-Prefs | Security | Product | Type | Access |
| --- | --- | --- | --- | --- | --- |
| 6.0 | No | No | All | Number | R/W |

Sets how fast playback runs as a number. At the default of 1, the clip runs at normal speed, and every other figure is gauged against that. So .5 runs at half speed, 2 runs at twice speed, and -1 runs normally but in reverse.

The rate values on offer are capped for many players and media types, which fall back to whichever supported playback rate sits nearest.

Example: run a clip at twice its normal speed; fire this from a Rendition action.

```javascript
var player = app.media.createPlayer();
player.settings.rate = 2;
player.open();
```
