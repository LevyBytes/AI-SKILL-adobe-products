# setPageTransitions

| Version (Key) | Save-Prefs | Security | Product |
| --- | --- | --- | --- |
| 5.0 | D | No | Not available in Reader |

Applies the page transition over a particular run of pages.

See also getPageTransition.

Parameters

| Parameter | Description |
| --- | --- |
| nStart | (optional) A 0-based index marking where an inclusive page range begins in the document to act on. When neither nStart nor nEnd is given, every page in the document is processed. Supplying nStart alone narrows the range to just the one page nStart points at. |
| nEnd | (optional) A 0-based index marking where an inclusive page range ends in the document to act on. When neither nStart nor nEnd is given, every page in the document is processed. Supplying nEnd alone makes the range run from page 0 through nEnd. |
| aTrans | (optional) The page-transition array carries three values: [nDuration, cTransition, nTransDuration]. - nDuration is the longest the page stays shown before the viewer flips to the next page on its own. Set it to -1 to switch off automatic page turning. - cTransition names the transition applied to the page. For the list of valid transitions, see fullScreen. transitions. - nTransDuration is how long, in seconds, the transition effect lasts. Omit aTrans and any page transitions on those pages are cleared. |

Example: switch the document to full screen mode and lay on a few transitions:

```javascript
this.setPageTransitions({ aTrans: [-1, "Random", 1] } );
app.fs.isFullScreen=true;
```
