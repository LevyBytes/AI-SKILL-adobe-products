# setPageRotations

| Version (Key) | Save-Prefs | Security | Product |
| --- | --- | --- | --- |
| 5.0 | D | No | Not available in Reader |

Turns the named pages of the current document.

See also getPageRotation.

Parameters

| Parameter | Description |
| --- | --- |
| nStart | (optional) A 0-based index marking where an inclusive page range begins in the document to act on. When neither nStart nor nEnd is given, every page in the document is processed. Supplying nStart alone narrows the range to just the one page nStart points at. |
| nEnd | (optional) A 0-based index marking where an inclusive page range ends in the document to act on. When neither nStart nor nEnd is given, every page in the document is processed. Supplying nEnd alone makes the range run from page 0 through nEnd. |
| nRotate | (optional) How much rotation to put on the target pages. Allowed values are 0, 90, 180, or 270. Defaults to 0. |

Example: spin pages 0 to 10 of the current document around.

```javascript
this.setPageRotations(0, 10, 90);
```
