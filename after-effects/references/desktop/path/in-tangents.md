# Path.inTangents()

Signature: `{pathProperty}.inTangents(t = time)`.

Get the x,y coordinates of the incoming tangent handle for all points on a path. A tangent's coordinate values are given as an offset from the coordinates of the point that owns them. That is, [0,0] leaves the incoming tangent with no curvature at all. You can feed this method into createPath() as its inTangents parameter while duplicating a path. You may optionally name the time at which the path is sampled.

| Parameter | Description |
| --- | --- |
| `t` | Number, optional. The composition time (in seconds) at which to sample the path. Default is time (the current time). |

Returns:

Array of number pair arrays, rounded to the fourth decimal place.
