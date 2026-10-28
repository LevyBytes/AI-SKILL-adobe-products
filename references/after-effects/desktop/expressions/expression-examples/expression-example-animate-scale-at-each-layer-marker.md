# Expression example: Animate scale at each layer marker

To set a layer shaking each time it hits a marker, attach this expression to a Scale property:

```javascript
var n = 0;
var t = 0;

if (marker.numKeys > 0){
    n = marker.nearestKey(time).index;
    if (marker.key(n).time > time) n--;
}
if (n > 0) t = time - marker.key(n).time;

var amp = 15;
var freq = 5;
var decay = 3.0;

var angle = freq * 2 * Math.PI * t;
var scaleFact = (100 + amp * Math.sin(angle) / Math.exp(decay * t)) / 100;

[value[0] * scaleFact, value[1] / scaleFact];
```

Note

A new marker is dropped in via Layer > Markers > New Marker.

The wiggle expression shown is only an example — swap in any other expression to switch its effect on and off at a chosen moment.
