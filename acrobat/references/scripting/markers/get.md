# get

| Version (Key) | Save-Prefs | Security | Product |
| --- | --- | --- | --- |
| 6.0 | No | No | All |

Finds a marker by name, by index number, by time in seconds, or by frame number, and returns the Marker object for the one requested. Inside the object parameter you should place either a name, index, time, or frame property. Alternatively, a marker name may be handed in straight as a string.

Should a time or frame be supplied, what comes back is the closest marker at or ahead of that time or frame. When the time or frame falls before every marker in the media, null comes back.

Parameters

An object or string that conveys the marker's name, index number, time in seconds, or frame number. Inside the object parameter you should place either a name, index, time, or frame property. Alternatively, a marker name may be handed in straight as a string.

Returns

Marker object or null

Marker index numbers run in sequence beginning at 0. By time or by frame they need not be ordered. Worth noting in particular: these differ from the marker numbers Windows Media Player relies on. To turn up every marker available in a media clip, run MediaPlayer.markers.get inside a loop that begins at {index: 0} and bumps the number upward until get hands back null.

Example 1: Count the number of markers on the media clip.

```javascript
var index, i =  0;
// assume player is a MediaPlayer object.
var m = player.markers;
while ( (index = m.get( { index: i } ) ) != null ) i++;
console.println("There are " + i + " markers.");
```

Example 2: Get markers by name, index, time and frame.

```javascript
// Get a marker by name, two different ways
var marker = player.markers.get( "My Marker" );
var marker = player.markers.get({ name: "My Marker" });
// Get a marker by index
var marker = player.markers.get({ index: 1 });
// Get a marker by time
var marker = player.markers.get({ time: 17.5 });
// Get a marker by frame
var marker = player.markers.get({ frame: 43 });
```
