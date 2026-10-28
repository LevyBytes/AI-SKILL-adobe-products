# where

| Version (Key) | Save-Prefs | Security | Product |
| --- | --- | --- | --- |
| 6.0 | No | No | All |

Hands back the current media's playback location as a MediaOffset object. Whether that object carries a time or a frame property hinges on the media player and the media type.

An exception is thrown when the player is closed or when the player has no support for where.

Returns

MediaOffset object

Example: fetch where playback stands, measured in seconds.

```javascript
// This code assumes that the player supports where() using time.
var where = player.where();
var seconds = where.time;
```

Pull the current chapter (marker).

```javascript
var marker = player.markers.get({ time: seconds });
var name = marker ? marker.name : "no marker";
```
