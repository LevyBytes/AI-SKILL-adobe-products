# Path.createPath()

Signature: `{pathProperty}.createPath(points = [[0,0], [100,0], [100,100], [0,100]], inTangents = [], outTangents = [], is_closed = true)`.

Builds a path object out of a collection of points and tangents. An array of number pair arrays holding their x,y coordinates defines the points. That array has to be length 1 at minimum and may run longer. The points' incoming and outgoing tangent handles are defined by an array of number pair arrays giving their x,y offset coordinates. Each tangent array's length has to match the points parameter exactly. A tangent's coordinate values are given as an offset from the coordinates of the point that owns them - [0,0] leaves the incoming tangent with no curvature. A path's points(), inTangents(), outTangents(), and isClosed() methods can be supplied to createPath()'s points, inTangents, outTangents, and is_closed parameters to clone a path. You can also pass a single path's points and tangents into createPath() with tweaks to produce a different outcome. For instance, the expression below strips the curves out of Mask 1 by withholding the inTangents and outTangents parameters:

```javascript
var myMask = mask("Mask 1").path;
myMask.createPath(myMask.points());
```

The next example feeds in the points and tangents of Mask 1 and turns it into an open path by setting is_closed to false:

```javascript
var myMask = mask("Mask 1").path;
myMask.createPath(
  myMask.points(), myMask.inTangents(), myMask.outTangents(), false
);
```

| Parameter | Description |
| --- | --- |
| `points` | An array of length 1 or greater containing number pair arrays representing the [x,y] coordinates of the path points. Required unless no parameters are passed (i.e., createPath()). Default is [[0,0], [100,0], [100,100], [0,100]]. |
| `is_closed` | Boolean, optional. Determines if the mask is closed. If true, the last point will be connected to the first point. Default is true. |
| `inTangents` | An array containing number pair arrays representing the [x,y] offset coordinates of the incoming tangent handles to the path points. Required unless no parameters are passed (i.e., createPath()). The array length must be the same as points, or you can pass an empty array ([]), which will assume the same length as points and [0,0] for all tangents. Default is an empty array. |
| `outTangents` | An array containing number pair arrays representing the [x,y] offset coordinates of the outgoing tangent handles to the path points. Required unless no parameters are passed (i.e., createPath()). The array length must be the same as points, or you can pass an empty array ([]), which will assume the same length as points and [0,0] for all tangents. Default is an empty array. |

Returns:

A path object.
