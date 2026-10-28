# Expression example: Match camera focal plane to another layer

So that a camera's focus distance tracks how far away the anchor point of a layer called 'Target' is, attach this expression to the camera layer's Focus Distance property:

```javascript
var target = thisComp.layer("target");
var V1 = target.toWorld( target.anchorPoint ) - toWorld( [ 0, 0, 0 ] );
var V2 = toWorldVec( [ 0, 0, 1 ] );

dot( V1, V2 );
```
