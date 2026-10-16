# length(vec)

Return type: Number.

Argument type: vec is an Array.

Returns the length of vector vec.

### length(point1, point2)

Return type: Number.

Argument type: point1 and point2 are Arrays.

Gives the distance separating two points; the point2 argument is optional. As an example, length(point1, point2) equals length(sub(point1, point2)).

To lock a camera's focal plane onto its point of interest so that point stays sharp, add this expression to the camera's Focus Distance property:

length(position, pointOfInterest)
