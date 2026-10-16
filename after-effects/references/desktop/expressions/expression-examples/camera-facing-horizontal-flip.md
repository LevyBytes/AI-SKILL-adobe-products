# Expression example: Flip layer horizontally if facing away from camera

Attach this expression to the Scale property of a 3D layer:

```javascript
if ( toCompVec([0, 0, 1])[2] > 0 ) {
    value;
} else {
    [ -value[0], value[1], value[2] ];
}
```
