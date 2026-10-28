# addWatermarkFromText

| Version (Key) | Save-Prefs | Security | Product |
| --- | --- | --- | --- |
| 7.0 | D | No | Not available in Reader |

Lays the text you supply as a watermark over the pages you name within the document, lodging the watermark inside an optional content group (OCG).

See the OCG object.

Parameters

| Parameter | Description |
| --- | --- |
| cText | Which text serves as the watermark. More than one line is permitted. The characters "r" mark a newline. |
| nTextAlign | (optional) How cText is aligned inside the watermark. For the values on offer, see app. constants .align. Where cText runs to just one line, this parameter does nothing. |
| cFont | (optional) Which font this watermark uses. Valid fonts appear as properties on the font object, as the textFont property of the Field object lists. You can supply any font by passing a string holding the font's PostScript name. By default this is font.Helv. |
| nFontSize | (optional) The point size of the font used for the watermark. This defaults to 24. |
| aColor | (optional) Which color the watermark uses. See Color arrays. By default this is color.black. |
| nStart | (optional) The 0-based index of the first page within the range that the watermark gets added to. Leave both nStart and nEnd out and the range spans every page in the document. Supply nStart by itself and the range is the lone page that nStart names. |
| nEnd | (optional) The final page within the range that the watermark gets added to. Leave both nStart and nEnd out and the range spans every page in the document. Supply nEnd by itself and the range runs from 0 through nEnd. |
| bOnTop | (optional) A Boolean fixing the watermark's z-ordering. Passing true puts the watermark over all other page content. Passing false puts the watermark beneath all other page content. Where bFixedPrint is true, this parameter is disregarded. This defaults to true. |
| bOnScreen | (optional) A Boolean stating whether the watermark shows while the document is viewed on screen. |
| bOnPrint | (optional) A Boolean stating whether the watermark shows while the document is printed. |
| nHorizAlign | (optional) A number setting the watermark's horizontal alignment. For the values on offer, see app. constants .align. By default this is app.constants.align.center. |
| nVertAlign | (optional) A number setting the watermark's vertical alignment. For the values on offer, see app. constants .align. By default this is app.constants.align.center. |
| nHorizValue | (optional) A number that nudges the watermark's horizontal placement on the page. When bPercentage is true, it stands for a share of the horizontal page size. When bPercentage is false, it stands for the count of points to offset. By default this is 0. |
| nVertValue | (optional) A number that nudges the watermark's vertical placement on the page. When bPercentage is true, it stands for a share of the vertical page size. When bPercentage is false, it stands for the count of points to offset. By default this is 0. |
| bPercentage | (optional) A Boolean telling whether nHorizValue and nVertValue stand for a share of the page size or a literal count of points. By default this is false. |
| nScale | (optional) Which scale the watermark uses, with 1.0 meaning 100%. Passing -1 tells the watermark to fit the page while holding its proportions. By default this is 1.0. |
| bFixedPrint | <br>(optional) A Boolean stating that the watermark ought to be added as a FixedPrint Watermark annotation. This makes the watermark print at a set size and position no matter the size of the page being printed onto. When true, bOnTop is disregarded. By default this is false. |
| nRotation | (optional) How many degrees to spin the watermark counterclockwise. By default this is 0. |
| nOpacity | (optional) Which opacity the watermark uses, where 0 means transparent and 1.0 means opaque. By default this is 1.0. |

Example 1: Lays "Confidential" as a watermark over the center of every page in the current document.

```javascript
this.addWatermarkFromText("Confidential", 0, font.Helv, 24, color.red);
```

Example 2: Lays a multiline watermark on every page of the current document, set 1 inch down and 1 inch across from the upper-right corner.

```javascript
this.addWatermarkFromText({
    cText: "Confidential DocumentrA. C. Robat",
    nTextAlign: app.constants.align.right,
    nHorizAlign: app.constants.align.right,
    nVertAlign: app.constants.align.top,
    nHorizValue: -72, nVertValue: -72
});
```
