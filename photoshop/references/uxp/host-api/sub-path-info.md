# Sub Path Info

This array holds [PathPointInfo](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/d3cf17a4cf92132513faf8f8ad6f143f518ac9d6/src/pages/ps-reference/classes/pathpointinfo.md) entries for a straight or curved path segment and is used when building a [SubPathItem](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/d3cf17a4cf92132513faf8f8ad6f143f518ac9d6/src/pages/ps-reference/classes/subpathitem.md).

Provide an array of these objects to [PathItems.add](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/d3cf17a4cf92132513faf8f8ad6f143f518ac9d6/src/pages/ps-reference/classes/pathitems.md#add)(). The method creates one [SubPathItem](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/d3cf17a4cf92132513faf8f8ad6f143f518ac9d6/src/pages/ps-reference/classes/subpathitem.md) object for each `SubPathInfo` object, then returns a newly created [PathItem](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/d3cf17a4cf92132513faf8f8ad6f143f518ac9d6/src/pages/ps-reference/classes/pathitem.md) object representing the combined subpaths.

- Create subpaths with `SubPathInfo`; its properties are read-write.

- Read data for existing subpaths through the [SubPathItem](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/d3cf17a4cf92132513faf8f8ad6f143f518ac9d6/src/pages/ps-reference/classes/subpathitem.md) object. Its properties are read-only.

### Properties

| Name | Type | Access | Min Version | Description |
| --- | --- | --- | --- | --- |
| closed | _boolean_ | R W | 23.3 | Whether the path encloses an area. |
| entireSubPath | [_PathPointInfo_](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/d3cf17a4cf92132513faf8f8ad6f143f518ac9d6/src/pages/ps-reference/classes/pathpointinfo.md)[] | R W | 23.3 | Sub-path [PathPoint](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/d3cf17a4cf92132513faf8f8ad6f143f518ac9d6/src/pages/ps-reference/classes/pathpoint.md) object array. |
| operation | [_ShapeOperation_](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/d3cf17a4cf92132513faf8f8ad6f143f518ac9d6/src/pages/ps-reference/modules/constants.md#shapeoperation) | R W | 23.3 | Operation this subpath applies against other subpaths. When a destination path already has a selection, it controls shape combination. |
| typename | _string_ | R | 23.3 | Class name for the referenced object: _"SubPathInfo"_. |

## See also

- [Unsupported](../unsupported.md)
