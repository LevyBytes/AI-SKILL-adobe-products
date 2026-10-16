# replacePages

| Version (Key) | Save-Prefs | Security | Product |
| --- | --- | --- | --- |
| 5.0 | D | Yes | Not allowed in Reader: Only available in Acrobat products |

Swaps pages of the current document for pages drawn from a source document.

See also deletePages, extractPages, and insertPages.

Note

Execution is restricted to a batch or console event only. See Privileged context. The event object covers how JavaScript events work.

Parameters

| Parameter | Description |
| --- | --- |
| nPage | (optional) The 0-based index of the page where replacement begins. Defaults to 0. |
| cPath | <br>A device-independent path pointing to the PDF that supplies the replacement pages. This path is allowed to be stated relative to wherever the current document sits. |
| nStart | (optional) A 0-based index marking where an inclusive page range starts in the source document used for replacement. When neither nStart nor nEnd is given, the whole source document is pulled. Supplying nStart alone narrows the range to just the one page nStart points at. |
| nEnd | (optional) A 0-based index marking where an inclusive page range ends in the source document used for replacement. When neither nStart nor nEnd is given, the whole source document is pulled. Supplying nEnd alone makes the range run from page 0 through nEnd. |
