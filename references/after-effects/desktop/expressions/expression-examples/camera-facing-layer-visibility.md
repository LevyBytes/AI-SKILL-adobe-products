# Expression example: Make a 3D layer invisible if facing away from camera

Attach this expression to the Opacity property of a 3D layer:

```javascript
if ( toCompVec([0, 0, 1])[2] > 0 ) {
    value;
} else {
    0;
}
```
