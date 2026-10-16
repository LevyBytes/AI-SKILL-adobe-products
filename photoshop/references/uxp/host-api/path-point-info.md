# Path Point Info

Create a [PathPoint](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/d3cf17a4cf92132513faf8f8ad6f143f518ac9d6/src/pages/ps-reference/classes/pathpoint.md) with this object; the point represents both the anchor and the control-handle endpoints for one path segment.
The anchor point, left-direction point, and right-direction point are each arrays that hold X and Y position coordinates.

- Create these objects with the JavaScript `new` operator, then place them in [SubPathInfo.entireSubPath](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/d3cf17a4cf92132513faf8f8ad6f143f518ac9d6/src/pages/ps-reference/classes/subpathinfo.md#entiresubpath)
  before you use that object to make a path item through [PathItems.add](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/d3cf17a4cf92132513faf8f8ad6f143f518ac9d6/src/pages/ps-reference/classes/pathitems.md#add)()

- After creation, the [SubPathItem](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/d3cf17a4cf92132513faf8f8ad6f143f518ac9d6/src/pages/ps-reference/classes/subpathitem.md) object holds the resulting [PathPoint](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/d3cf17a4cf92132513faf8f8ad6f143f518ac9d6/src/pages/ps-reference/classes/pathpoint.md) objects. Query the [PathPoint](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/d3cf17a4cf92132513faf8f8ad6f143f518ac9d6/src/pages/ps-reference/classes/pathpoint.md) object
  when you need details about points that define existing path segments. Its properties are read-only.

For straight path segments, all three points share identical coordinates. Curved segments use different coordinate values. The offset between the anchor point and either the left or right direction point sets the curve arc. The left direction point bends the curve outward, making it convex; the right direction point bends it inward, making it concave.
