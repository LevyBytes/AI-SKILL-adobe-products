# Path.points()

Signature: `{pathProperty}.points(t = time)`.

Get the x,y coordinates of all points on a path. For a layer mask's path points, the coordinates are measured from the layer's origin at its top-left corner. For a Bezier shape's path points, they are measured from the anchor point of the path's shape group — for instance, Transform: Shape 1 > Anchor Point. For a brush stroke's path points, they are measured from where the stroke begins, with the first point sitting at [0,0]. You may optionally name the time at which the path is sampled. This method can be fed into createPath() as its points parameter when you duplicate a path.

| Parameter | Description |
| --- | --- |
| `t` | Number, optional. The composition time (in seconds) at which to sample the path. Default is time (the current time). |

Returns:

Array of number pair arrays, rounded to the fourth decimal place.
