# previousKey(time)

Return type: Key or MarkerKey.

Argument type: time is a Number.

Hands back the keyframe or marker located at or prior to time. Should none exist at or before time, the first keyframe or marker is returned instead.

To illustrate, the expression below gives the interval elapsed since the previous keyframe on the active property:

```javascript
const prev = thisProperty.previousKey(time);
time - prev.time;
```
