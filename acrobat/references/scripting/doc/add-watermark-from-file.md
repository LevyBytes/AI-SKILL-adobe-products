# addWatermarkFromFile

| Version (Key) | Save-Prefs | Security | Product |
| --- | --- | --- | --- |
| 7.0 | D | Yes | Not allowed in Reader: Only available in Acrobat products |

Drops in a page as a watermark over the pages you name within the document, lodging the watermark inside an optional content group (OCG). See also the OCG object.

Note

Execution is confined to a batch or console event. See also Privileged context.

Parameters

| Parameter | Description |
| --- | --- |
| cDIPath | The watermark source file's device-independent path. Should whatever sits at that location not be a PDF file, Acrobat tries to turn it into one. |
| nSourcePage | (optional) The 0-based index of which page in the source file becomes the watermark. By default this is 0. |
| nStart | (optional) The 0-based index of the first page within the range that the watermark gets added to. Leave both nStart and nEnd out and the range spans every page in the document. Supply nStart by itself and the range is the lone page that nStart names. Supply nEnd by itself and the range runs from 0 through nEnd. |
| nEnd | (optional) The final page within the range that the watermark gets added to. Refer to nStart for the particulars. |
| bOnTop | (optional) A Boolean fixing the watermark's z-ordering. When true (the default), the watermark sits over all other page content. When false, it goes beneath all other page content. Where bFixedPrint is true, this parameter is disregarded. |
| bOnScreen | (optional) A Boolean stating whether the watermark shows while the document is viewed on screen. This defaults to true. |
| bOnPrint | (optional) A Boolean stating whether the watermark shows while the document is printed. This defaults to true. |
| nHorizAlign | (optional) A number setting the watermark's horizontal alignment. For the values on offer, see app. constants .align. By default this is app.constants.align.center. |
| nVertAlign | (optional) A number setting the watermark's vertical alignment. For the values on offer, see app. constants .align. By default this is app.constants.align.center. |
| nHorizValue | (optional) A number that nudges the watermark's horizontal placement on the page. When bPercentage is true, it stands for a share of the horizontal page size. When bPercentage is false, it stands for the count of points to offset. By default this is 0. |
| nVertValue | (optional) A number that nudges the watermark's vertical placement on the page. When bPercentage is true, it stands for a share of the vertical page size. When bPercentage is false, it stands for the count of points to offset. By default this is 0. |
| bPercentage | (optional) A Boolean telling whether nHorizValue and nVertValue stand for a share of the page size or a literal count of points. By default this is false. |
| nScale | (optional) Which scale the watermark uses, with 1.0 meaning 100%. Passing -1 tells the watermark to fit the page while holding its proportions. By default this is 1.0. |
| bFixedPrint | (optional) A Boolean stating that this watermark ought to be added as a FixedPrint Watermark annotation. That lets watermarks print at a set size and position no matter the size of the page being printed onto. When true, bOnTop is disregarded. By default this is false. |
| nRotation | (optional) How many degrees to spin the watermark counterclockwise. By default this is 0. |
| nOpacity | (optional) Which opacity the watermark uses, where 0 means transparent and 1.0 means opaque. By default this is 1.0. |

Example 1: Takes watermark.pdf's first page and lays it as a watermark over the center of every page in the current document.

```javascript
this.addWatermarkFromFile("/C/temp/watermark.pdf");
```

Example 2: Takes watermark.pdf's second page and lays it as a watermark across the opening 10 pages of the current document. That watermark is turned 45 degrees counterclockwise and set 1 inch down plus 2 inches across from the page's upper-left corner.

```javascript
this.addWatermarkFromFile({
    cDIPath: "/C/temp/watermark.pdf",
    nSourcePage: 4, nEnd: 9,
    nHorizAlign: app.constants.align.left,
    nVertAlign: app.constants.align.top,
    nHorizValue: 144, nVertValue: -72,
    nRotation: 45
});
```
