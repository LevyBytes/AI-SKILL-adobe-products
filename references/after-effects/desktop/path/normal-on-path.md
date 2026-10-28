# Path.normalOnPath()

Signature: `{pathProperty}.normalOnPath(percentage = 0.5, t = time)`.

Get the calculated x,y coordinates of the normal for an arbitrary point along a path. A normal's coordinate values are given as an offset from the coordinates of the point that owns them - the value [0,0] coincides with the owning point itself. The normal's owning point is stated as a fraction of the path's arc-length. For how arc-length percentage works, read the pointOnPath() method's description. Coordinates from normalOnPath() are derived from its owning point. Between the owning point's coordinates and the normalOnPath() coordinates the straight-line distance is always 1. Scale the returned coordinates up to lengthen the normal, for example (myPath.normalOnPath() \* 100). You may optionally name the time at which the path is sampled.

| Parameter | Description |
| --- | --- |
| `percentage` | Number between 0 and 1, optional. The percentage along the arc-length of the path to sample. Values smaller than 0 and larger than 1 are clipped. Default is 0.5. |
| `t` | Number, optional. The composition time (in seconds) at which to sample the path. Default is time (the current time). |

Returns:

A number pair array.
