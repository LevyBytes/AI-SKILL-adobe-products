# Key attributes and methods (expression reference)

Reaching into a Key object lets you pull its time, index, and value properties. To illustrate, this expression hands you the value of the third Position keyframe: position.key(3).value.

Written on an Opacity property that has keyframes, the next expression disregards the keyframe values entirely, relying only on where the keyframes fall in time to decide when a flash fires: d = Math.abs(time - nearestKey(time).time); easeOut(d, 0, .1, 100, 0)

```javascript
  d = Math.abs(time - nearestKey(time).time);
  easeOut(d, 0, .1, 100, 0)
```

### value

Return type: Number or Array.

Gives back the keyframe's value.
