# PathPoint

`PathPoint` represents the anchor endpoint and control-handle endpoints for one path segment. The anchor point, left-direction point, and right-direction point are each arrays of X and Y coordinates.

- Read existing segment point data with the `PathPoint` object. Its properties are read-only. The [SubPathItem.pathPoints](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/d3cf17a4cf92132513faf8f8ad6f143f518ac9d6/src/pages/ps-reference/classes/subpathitem.md#pathpoints) property exposes [PathPoint](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/d3cf17a4cf92132513faf8f8ad6f143f518ac9d6/src/pages/ps-reference/classes/pathpoint.md) objects.

- Create path points by passing [PathPointInfo](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/d3cf17a4cf92132513faf8f8ad6f143f518ac9d6/src/pages/ps-reference/classes/pathpointinfo.md) data to [PathItems.add](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/d3cf17a4cf92132513faf8f8ad6f143f518ac9d6/src/pages/ps-reference/classes/pathitems.md#add)(). The properties are writeable.

For paths made of straight segments, all three point coordinates match. Curved segments use different coordinates. The anchor point's offset from the left or right direction points determines the curve arc. The left direction point bends the curve "outward" or makes it convex; the right direction point bends the curve "inward" or makes it concave.

_Added in Photoshop 23.3_

### Properties

| Name | Type | Access | Min Version | Description |
| --- | --- | --- | --- | --- |
| anchor | _number_[] | R | 23.3 | Curve anchor coordinates stored as `[horizontal, vertical]`. |
| kind | [_PointKind_](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/d3cf17a4cf92132513faf8f8ad6f143f518ac9d6/src/pages/ps-reference/modules/constants.md#pointkind) | R | 23.3 | Role this point has in the containing path segment, either corner or smooth. |
| leftDirection | _number_[] | R | 23.3 | Left-direction endpoint location ('in' position), stored as `[horizontal, vertical]`. |
| parent | [_SubPathItem_](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/d3cf17a4cf92132513faf8f8ad6f143f518ac9d6/src/pages/ps-reference/classes/subpathitem.md) | R | 23.3 | SubPath object that contains this point. |
| rightDirection | _number_[] | R | 23.3 | Right-direction endpoint location ('out' position), stored as `[horizontal, vertical]`. |
| typename | _string_ | R | 23.3 | Referenced object class name: _"PathPoint"_. |
