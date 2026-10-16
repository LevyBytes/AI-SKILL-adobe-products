# SubPathItem

A SubPathItem represents one subpath; multiple subpaths together form a [PathItem](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/d3cf17a4cf92132513faf8f8ad6f143f518ac9d6/src/pages/ps-reference/classes/pathitem.md).

Call [PathItems.add](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/d3cf17a4cf92132513faf8f8ad6f143f518ac9d6/src/pages/ps-reference/classes/pathitems.md#add)() with [SubPathInfo](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/d3cf17a4cf92132513faf8f8ad6f143f518ac9d6/src/pages/ps-reference/classes/subpathinfo.md) objects to construct them. For each supplied [SubPathInfo](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/d3cf17a4cf92132513faf8f8ad6f143f518ac9d6/src/pages/ps-reference/classes/subpathinfo.md) object, the call makes a `SubPathItem`; it also produces a fresh [PathItem](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/d3cf17a4cf92132513faf8f8ad6f143f518ac9d6/src/pages/ps-reference/classes/pathitem.md) result representing all subpaths. Access the resulting objects through the [PathItem.subPathItems](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/d3cf17a4cf92132513faf8f8ad6f143f518ac9d6/src/pages/ps-reference/classes/pathitem.md#subpathitems) collection.

- Read data for existing subpaths through the [SubPathItem](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/d3cf17a4cf92132513faf8f8ad6f143f518ac9d6/src/pages/ps-reference/classes/subpathitem.md) object. Its properties are read-only.
- Create subpaths with [SubPathInfo](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/d3cf17a4cf92132513faf8f8ad6f143f518ac9d6/src/pages/ps-reference/classes/subpathinfo.md); its properties are read-write.

_Added in Photoshop 23.3_

### Properties

| Name | Type | Access | Min Version | Description |
| --- | --- | --- | --- | --- |
| closed | _boolean_ | R | 23.3 | Closed-state flag for the path. |
| operation | [_ShapeOperation_](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/d3cf17a4cf92132513faf8f8ad6f143f518ac9d6/src/pages/ps-reference/modules/constants.md#shapeoperation) | R | 23.3 | Behavior for this `SubPathItem` when it intersects another. If the destination path already has a selection, this controls how the shapes combine. |
| parent | [_PathItem_](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/d3cf17a4cf92132513faf8f8ad6f143f518ac9d6/src/pages/ps-reference/classes/pathitem.md) | R | 23.3 | Path that owns this subpath. |
| pathPoints | [_PathPoints_](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/d3cf17a4cf92132513faf8f8ad6f143f518ac9d6/src/pages/ps-reference/classes/pathpoints.md) | R | 23.3 | [PathPoint](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/d3cf17a4cf92132513faf8f8ad6f143f518ac9d6/src/pages/ps-reference/classes/pathpoint.md) entries belonging to this `SubPathItem`. |
| typename | _string_ | R | 23.3 | Class name for the referenced object: _"SubPathItem"_. |
