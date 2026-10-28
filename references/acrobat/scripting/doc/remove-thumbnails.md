# removeThumbnails

| Version (Key) | Save-Prefs | Security | Product |
| --- | --- | --- | --- |
| 5.0 | D | No | Not available in Reader |

Strips the thumbnails from the pages you name within the document. See also addThumbnails.

Parameters

| Parameter | Description |
| --- | --- |
| nStart | (optional) A 0-based index marking where an inclusive page range begins. When neither nStart nor nEnd is given, every page in the document is affected. Supplying nStart alone narrows the range to just the one page nStart points at. |
| nEnd | (optional) A 0-based index marking where an inclusive page range ends. When neither nStart nor nEnd is given, every page in the document is affected. Supplying nEnd alone makes the range run from page 0 through nEnd. |
