# Expression example: Fade opacity of a 3D layer based on distance from camera

Attach this expression to the Opacity property of a 3D layer:

```javascript
var  startFade = 500; // Start fade 500 pixels from camera.
var  endFade = 1500;  // End fade 1500 pixels from camera.

try {
    // Check whether there's a camera
    var C = thisComp.activeCamera.toWorld([0,0,0]);
} catch ( err ) {
    // No camera, so assume 50mm
    var w = thisComp.width * thisComp.pixelAspect;
    var z = (w/2)/Math.tan(degreesToRadians(19.799));
    var C = [0,0,-z];
}

var P = toWorld( anchorPoint );
var d = length( C, P );

linear( d, startFade, endFade, 100, 0 );
```

Fading kicks in once the layer sits 500 pixels out from the camera and reaches full transparency by the time it's 1500 pixels away. Translating those distance figures into opacity figures is handled by linear interpolation.
