# PrintParams.booklet

| Version (Key) | Save-Prefs | Security | Product | Type | Access |
| --- | --- | --- | --- | --- | --- |
| 8.0 | No | No | All | object | R/W |

An object that carries the settings for booklet printing. Its properties are spelled out in the following table.

| Property | Type | Access | Description |
| --- | --- | --- | --- |
| binding | Integer | R/W | For booklet output, the binding property fixes both the direction the paper binds and the sequence the pages get arranged in. You assign binding's value from the constants bookletBindings object covered below. Left is the default. |
| duplexMode | Integer | R/W | For booklet output, the duplexMode property fixes which duplex printing mode applies. You assign duplexMode's value from the constants duplexMode object covered below. BothSides is the default. Where the output device lacks automatic duplex capability, you can do a manual duplex by running the front and back sides as two separate print passes. |
| subsetFrom | Integer | R/W | For booklet output, subsetFrom names the earliest booklet sheet that gets printed. Quite apart from the overall page-range choice, this option restricts printing to a portion of the finished booklet.<br><br>Sheet numbering is valid from 0 upward, with 0 being the first sheet. 0 is also the default.<br><br>A value of -1 stands for the final sheet. In general terms, the negative number -N points to the sheet (N-1) positions ahead of the last one. So -2 names the sheet immediately preceding the final sheet, and -3 names the sheet two positions before the last.<br><br>Refer to the extra note below covering booklet subsetting. |
| subsetTo | Integer | R/W | For booklet output, subsetTo names the latest booklet sheet that gets printed. Quite apart from the overall page-range choice, this option restricts printing to a portion of the finished booklet.<br><br>Sheet numbering is valid from 0 upward, while -1 stands for the final sheet. -1 is also the default.<br><br>The negative number -N points to the sheet (N-1) positions ahead of the last one. So -2 names the sheet immediately preceding the final sheet, and -3 names the sheet two positions before the last.<br><br>Refer to the extra note below covering booklet subsetting. |

You set the value of booklet.binding from the properties carried by the bookletBindings object.

constants.bookletBindings object

| Property | Description |
| --- | --- |
| Left | Binds on the left for the Western left-to-right reading order. Folding happens on the short side. |
| Right | Binds on the right, suited to right-to-left text or the vertical writing of Japanese style. Folding happens on the short side. |
| LeftTall | Binds on the left for the Western left-to-right reading order. Folding happens on the long side, which yields tall, narrow pages. |
| RightTall | Binds on the right, suited to right-to-left text or the vertical writing of Japanese style. Folding happens on the long side, which yields tall, narrow pages. |

You set the value of booklet.duplexMode from the properties carried by the bookletDuplexModes object.

constants.bookletDuplexModes object

| Property | Description |
| --- | --- |
| BothSides | Prints both faces of the sheet automatically. This requires a printer that handles automatic duplex printing. |
| FrontSideOnly | Prints solely the pages destined for the front face of the sheet. To finish a manual duplex run, feed the printed sheets back in and print once more under BacksideOnly mode. |
| BackSideOnly | Prints solely the pages destined for the back face of the sheet. |

Note

(Booklet subsetting using subsetFrom and subsetTo) Because tweaking the source page range — through the PrintParams object's firstPage and lastPage properties — itself reshapes the booklet output, you cannot readily reproduce the same result by adjusting those page-range properties. Consider this: an 8-page booklet job lays its first 2-sided sheet out in the page order [8, 1, 2, 7], whereas a 16-page job lays its first sheet out as [16, 1, 2, 15]. That is where subsetFrom and subsetTo earn their keep — letting you send particular booklet pages to different devices or media. One classic case is rendering the cover and inside cover in color while the remainder of the document prints in black and white. Another frequent case is running the cover page on heavier colored stock.

Related references:

- [Booklet binding, duplex and sheet-subset examples](booklet-printing-examples.md)
