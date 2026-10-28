# time

| Version (Key) | Save-Prefs | Security | Product | Type | Access |
| --- | --- | --- | --- | --- | --- |
| 6.0 | No | No | All | Number | R |

A time given in seconds, with 0 marking where the media starts. On most players a marker carries either a frame or a time, though not the two together.

Example: Fetch a named marker, then write out how many seconds past the media's start that marker falls.

```javascript
// Assume player is a MediaPlayer object
var g = player.markers;
// Get marker with name of "Chapter 1"
var markers = g.get( { name: "Chapter 1" } );
console.println( 'The named marker "Chapter 1", occurs at time '
    + markers.time);
```
