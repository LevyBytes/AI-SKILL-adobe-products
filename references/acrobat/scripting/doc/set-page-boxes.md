# setPageBoxes

| Version (Key) | Save-Prefs | Security | Product |
| --- | --- | --- | --- |
| 5.0 | D | No | Not available in Reader |

Defines a rectangle bounding the named box across the pages you specify.

See also getPageBox.

Parameters

| Parameter | Description |
| --- | --- |
| cBox | (optional) The box-type value, one of: Art Bleed Crop Media Trim Keep in mind the BBox box type is read-only and turns up only in getPageBox. For what these boxes mean, see the PDF Reference. |
| nStart | (optional) A 0-based index marking where an inclusive page range begins in the document to act on. When neither nStart nor nEnd is given, every page in the document is processed. Supplying nStart alone narrows the range to just the one page nStart points at. |
| nEnd | (optional) A 0-based index marking where an inclusive page range ends in the document to act on. When neither nStart nor nEnd is given, every page in the document is processed. |
| rBox | (optional) An array of four numbers, in rotated user space, that the named box is set to. Leave it out and the named box is removed. |
