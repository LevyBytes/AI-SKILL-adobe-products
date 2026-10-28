# Path.pointOnPath()

Signature: `{pathProperty}.pointOnPath(percentage = 0.5, t = time)`.

Get the x,y coordinates of an arbitrary point along a path.That point is stated as a fraction of the path's arc-length, where 0% marks the first point and 100% marks the last. On a closed path, 0% and 100% land on the same coordinates. Working in arc-length percentage keeps the speed along the path even. Apart from 0% and 100%, a percentage need not line up with the Bezier points on the path - on a three-point path the middle point won't necessarily fall at 50%. A further consequence: an open path and a closed path built from the same points won't return matching coordinates for a given percentage, since the closed path adds extra length. You may optionally name the time at which the path is sampled.

| Parameter | Description |
| --- | --- |
| `percentage` | Number between 0 and 1, optional. The percentage along the arc-length of the path to sample. Values smaller than 0 and larger than 1 are clipped. Default is 0.5. |
| `t` | Number, optional. The composition time (in seconds) at which to sample the path. Default is time (the current time). |

Returns:

A number pair array.
