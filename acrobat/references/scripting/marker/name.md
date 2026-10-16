# name

| Version (Key) | Save-Prefs | Security | Product | Type | Access |
| --- | --- | --- | --- | --- | --- |
| 6.0 | No | No | All | String | R |

This marker's name. Every marker inside a media clip carries a name all its own.

Example: Fetch a marker via its index, then write that marker's name out to the console.

```javascript
// Assume player is a MediaPlayer object
var markers = player.markers;
// Get marker with index of 2
var markers = g.get( { index: 2 } );
console.println( "The marker with index of " + markers.index
    +", has a name of " + index.name );
```
