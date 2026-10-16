# nextKey(time)

Return type: Key or MarkerKey.

Argument type: time is a Number.

Hands back the keyframe or marker that follows time. Should none exist past time — meaning time sits at or beyond the final keyframe — the last keyframe or marker is returned instead.

To illustrate, the expression below gives the interval remaining before the next keyframe on the active property:

```javascript
const next = thisProperty.nextKey(time);
next.time - time;
```
