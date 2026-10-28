# Path.outTangents()

Signature: `{pathProperty}.outTangents(t = time)`.

Get the x,y coordinates of the outgoing tangent handle for all points on a path. A tangent's coordinate values are given as an offset from the coordinates of the point that owns them - [0,0] leaves the outgoing tangent with no curvature at all. You can feed this method into createPath() as its outTangents parameter while duplicating a path. You may optionally name the time at which the path is sampled.

| Parameter | Description |
| --- | --- |
| `t` | Number, optional. The composition time (in seconds) at which to sample the path. Default is time (the current time). |

Returns:

Array of number pair arrays, rounded to the fourth decimal place.
