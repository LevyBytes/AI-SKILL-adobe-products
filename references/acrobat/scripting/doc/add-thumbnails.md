# addThumbnails

| Version (Key) | Save-Prefs | Security | Product |
| --- | --- | --- | --- |
| 5.0 | D | No | Not available in Reader |

Generates thumbnails for the pages you name within the document. See also the removeThumbnails method.

Parameters

| Parameter | Description |
| --- | --- |
| nStart | (optional) A 0-based index marking where an inclusive page range begins. Leave both nStart and nEnd out and the range spans every page in the document. Supply nStart by itself and the range is the lone page that nStart names. Supply nEnd by itself and the range runs from 0 through nEnd. |
| nEnd | (optional) A 0-based index marking where an inclusive page range ends. Refer to nStart for the particulars. |
