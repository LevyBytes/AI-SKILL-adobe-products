# palindrome

| Version (Key) | Save-Prefs | Security | Product | Type | Access |
| --- | --- | --- | --- | --- | --- |
| 6.0 | No | No | All | Boolean | R/W |

Set this property to true and the clip runs through once forward, then rewinds back to its start by playing in reverse. Where repeat is also given, that forward-then-reverse pass cycles the stated number of times, with one whole forward-and-reverse trip tallying as a single repeat.

The default value is false.

Note

palindrome goes unsupported by most media players, which simply ignore the setting.

Example: view the clip through QuickTime, one of the players that honors palindrome.

```javascript
var playerList = app.media.getPlayers().select({ id: /quicktime/i });
var settings = { players: playerList, palindrome: true };
var player = app.media.openPlayer({ settings: settings });
```

You should fire the code shown above from inside a Rendition action event that carries an associated rendition.
