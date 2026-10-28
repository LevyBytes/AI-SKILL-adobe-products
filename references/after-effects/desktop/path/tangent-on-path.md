# Path.tangentOnPath()

Signature: `{pathProperty}.tangentOnPath(percentage = 0.5, t = time)`.

Get the calculated x,y coordinates of the outgoing tangent handle for an arbitrary point along a path. A tangent's coordinate values are given as an offset from the coordinates of the point that owns them - [0,0] leaves the outgoing tangent with no curvature. To get the incoming tangent handle, invert this value (multiply its x,y coordinates by -1). The tangent's owning point is stated as a fraction of the path's arc-length. Coordinates from tangentOnPath() are derived from that owning point and will not match those from outTangents() when a user-defined point happens to sit at the same arc-length percentage. Between the owning point's coordinates and the tangentOnPath() coordinates the straight-line distance is always 1. Scale the returned coordinates up to lengthen the tangent, e.g. (myPath.tangentOnPath() \* 100). You may optionally name the time at which the path is sampled.

| Parameter | Description |
| --- | --- |
| `percentage` | Number between 0 and 1, optional. The percentage along the arc-length of the path to sample. Values smaller than 0 and larger than 1 are clipped. Default is 0.5. |
| `t` | Number, optional. The composition time (in seconds) at which to sample the path. Default is time (the current time). |

Returns:

A number pair array.
