# flattenPages

| Version (Key) | Save-Prefs | Security | Product |
| --- | --- | --- | --- |
| 5.0 | D | No | Not available in Reader |

Every annotation sitting within a span of pages is folded into the page contents. Omit the page range and the conversion sweeps across every annotation the document holds.

Note

Tread carefully here. Each annotation on the named span of pages — form fields, comments, and links included — gets flattened. Their visual appearances may survive, yet they cease to be annotations.

Parameters

| Parameter | Description |
| --- | --- |
| nStart | (optional) A 0-based index pinning where an inclusive page range opens within the current document. Give nStart on its own and the range shrinks to the lone page it points at. |
| nEnd | (optional) A 0-based index pinning where that inclusive page range closes within the current document. |
| nNonPrint | (optional, Acrobat 6.0) This parameter governs the treatment of non-printing annotations. Its values are:<br><br>0: (default) flattens non-printing annotations.<br><br>1: leaves non-printing annotations untouched.<br><br>2: strips non-printing annotations out of the document. |

Example: Flatten every page the document holds.

```javascript
this.flattenPages();
```
