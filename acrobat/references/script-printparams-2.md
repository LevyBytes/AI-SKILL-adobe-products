# Printparams (part 2)

> Adobe Acrobat reference. Original prose; identifiers preserved verbatim.

## JavaScript APIs — PrintParams

A Boolean that, when true, renders and prints a border around every page during Multiple Pages Per Sheet printing. Although the default is false, nUpPageBorder defers to the print settings.

Setting pageHandling to nUp is what gives you Multiple Pages Per Sheet.

Refer to nUpNumPagesH for an example.

### nUpPageOrder

Version (Key)

Save-Prefs

Security

Product

Type

Access

7.0

No

No

All

Integer

R/W

| --- | --- | --- | --- | --- | --- |

With several pages per sheet, the nUpPageOrder property dictates the arrangement of those pages on the sheet. You assign its value from the constants nUpPageOrders object. The default is Horizontal, though nUpPageOrder defers to the print settings.

Setting pageHandling to nUp is what gives you Multiple Pages Per Sheet.

constants.nUpPageOrders Object

Property

Description

Horizontal

Pages run left to right, then top to bottom.

HorizontalReversed

Pages run right to left, then top to bottom.

Vertical

Pages run top to bottom, then left to right.

| --- | --- |

Example: Lay this document out several pages to a sheet, supply the parameters, and print.

```
pp = this.getPrintParams();
pp.pageHandling = pp.constants.handling.nUp;
pp.nUpPageOrders = pp.constants.nUpPageOrders.Horizontal;
pp.nUpNumPagesH = 2;
pp.nUpNumPagesV = 2;
pp.nUpPageBorder=true;
this.print(pp);
```

### NumCopies

Version (Key)

Save-Prefs

Security

Product

Type

Access

8.0

No

No

All

Integer

R/W

| --- | --- | --- | --- | --- | --- |

Establishes how many copies this print job turns out.

Example: Configure the job for two-copy duplex output.

```
var pp = this.getPrintParams();
pp.DuplexType = pp.constants.duplexTypes.DuplexFlipShortEdge;
pp.NumCopies = 2;
this.print(pp);
```

### pageHandling

Version (Key)

Save-Prefs

Security

Product

Type

Access

6.0

No

No

All

Integer

R/W

| --- | --- | --- | --- | --- | --- |

Accepts one of seven values drawn from the constants handling object. An illegal value is taken as shrink, which is also the default.

constants.handling Object

Property

Reader

Description

none

No scaling gets applied to the page.

fit

Pages grow or shrink so they fit the printer's paper.

shrink

Small pages print at their size, while oversized pages shrink down to fit the printer's paper.

tileAll

No

Every page prints according to the tiling settings. By raising the tileScale property above 1 you can blow a normal-sized page up into a poster.

tileLarge

No

Small or normal pages print at their original size, whereas large pages spread across several sheets.

nUp

(Version 7.0) Pages are rescaled so that each printer page carries several of them.

The properties tied to Multiple Pages Per Sheet printing are nUpAutoRotate, nUpNumPagesH, nUpNumPagesV, nUpPageBorder and nUpPageOrder.

booklet

(Version 8.0) Lays several pages on one sheet in whatever sequence reads correctly once folded. You set the parameters for booklet printing through the booklet object's properties.

| --- | --- | --- |

Example 1:

```
var pp = this.getPrintParams();
pp.pageHandling = pp.constants.handling.shrink;
this.print(pp);
```

Example 2: Send this document to print with several pages on each sheet after configuring the parameters.

```
pp = this.getPrintParams();
pp.pageHandling = pp.constants.handling.nUp;
pp.nUpPageOrders = pp.constants.nUpPageOrders.Horizontal;
pp.nUpNumPagesH = 2;
pp.nUpNumPagesV = 2;
pp.nUpPageBorder=true;
this.print(pp);
```

Example 3 (Version 8.0)

Print document as a booklet, taking all the default settings.

```
var pp = this.getPrintParams();
pp.pageHandling = pp.constants.handling.booklet;
this.print(pp);
```

### pageSubset

Version (Key)

Save-Prefs

Security

Product

Type

Access

6.0

No

No

All

Integer

R/W

| --- | --- | --- | --- | --- | --- |

Choose whether printing covers even pages, odd pages, or every page. You assign pageSubset by way of the constants subsets object. By default this is all.

constants.subsets Object

Property

Description

all

Prints every page within the chosen page range.

even

Restricts output to even pages only. Here page labels carry no weight; the file is handled as though its pages ran 1 through n, with n being the page count.

odd

Restricts output to odd pages only.

| --- | --- |

Example:

```
var pp = this.getPrintParams();
pp.pageSubset = pp.constants.subsets.even;
this.print(pp);
```

### printAsImage

Version (Key)

Save-Prefs

Security

Product

Type

Access

6.0

No

No

All

Boolean

R/W

| --- | --- | --- | --- | --- | --- |

When this is true, each page goes out as a sizable bitmap. The result can run slowly and look more jagged, yet it sidesteps trouble with a printer's PostScript interpreter. Adjust bitmapDPI up or down to change the bitmap's resolution. Should interaction (refer to interactive) be full, whatever the user has chosen for printAsImage in their printer preferences takes over. By default this is false.

### printContent

Version (Key)

Save-Prefs

Security

Product

Type

Access

6.0

No

No

All

Integer

R/W

| --- | --- | --- | --- | --- | --- |

Determines what the print job will contain. You assign the printContents property through the constants printContents object. By default this is doc.

constants.printContents Object

Property

Description

doc

Prints just the document body, leaving comments out.

docAndComments

Prints the document body together with its comments.

formFieldsOnly

Prints nothing but the form-field contents. Handy when overprinting onto forms that are already preprinted.

| --- | --- |

Example: Set printer to silently print form fields only.

```
var pp = this.getPrintParams();
pp.interactive = pp.constants.interactionLevel.silent;
pp.printContent = pp.constants.printContents.formFieldsOnly;
this.print(pp);
```

### printRange

Version (Key)

Save-Prefs

Security

Product

Type

Access

11.0

No

No

All

Array

R/W

| --- | --- | --- | --- | --- | --- |

Reach for the printRange property when you need several batches of pages printed, each spanning its own range. Supply the argument as an array of (nStart, nEnd) pairs, in which nStart and nEnd are 0-based page indices into the PDF.

Exceptions

ESErrorInvalidArgs is raised under these conditions:

the supplied parameters do not follow the required format

either startPage or endPage drops below 0.

either startPage or endPage reaches or exceeds totalPages within the PDF.

Example 1:

```
var pp = this.getPrintParams();
pp.interactive = pp.constants.interactionLevel.full;
pp.printRange=[[1, 1], [3, 4]];
this.print(pp);
```

### printerName

Version (Key)

Save-Prefs

Security

Product

Type

Access

6.0

No

No

All

String

R/W

| --- | --- | --- | --- | --- | --- |

Holds the name of the printer you want output sent to. Support for this property is a Windows capability, and as of version 9.0 a Mac OS one as well.

Out of the box, printerName carries the default printer's name. Setting it to an empty string routes output to whichever printer Acrobat/Adobe Reader used most recently in this session, or else the System Default printer when none was. Should printerName be empty while fileName holds text, the open document gets written out as a PostScript file. Refer to example 2 further down.

See also app. printerNames.

Example 1: Set the printer, and print.

```
var pp = this.getPrintParams();
pp.printerName = "hp officejet d series";
this.print(pp);
```

Example 2: Save the current document as a PostScript file.

```
var pp = this.getPrintParams();
pp.fileName = "/c/temp/myDoc.ps";
pp.printerName = "";
this.print(pp);
```

### psLevel

Version (Key)

Save-Prefs

Security

Product

Type

Access

6.0

No

No

All

Integer

R/W

| --- | --- | --- | --- | --- | --- |

Which PostScript level gets sent to PostScript printers. A value of 0 says to defer to the printer's own PostScript level. Level 1 has no support. Beyond 0, the values psLevel accepts today are 2 and 3. When the printer can only manage PostScript level 1, printAsImage flips to true. Any out-of-range value is handled as 3. psLevel defaults to 3.

### rasterFlags

Version (Key)

Save-Prefs

Security

Product

Type

Access

6.0

No

No

Not available in Reader

Integer

R/W

| --- | --- | --- | --- | --- | --- |

A field of bit flags. Toggle them individually with bitwise operations against the constants rasterFlagValues object. The user's preferences supply the default.

constants.rasterFlagValues Object

What follows is a list of the rasterFlagValues object's properties. Not one of these properties exists in Adobe Reader.

Property

Description

textToOutline

Once text is turned into outlines it can gain weight, which shows up most on small fonts. Where text sits within artwork that uses transparency, flattening may outline it, leaving it out of step with text kept clear of such artwork. Switching this option on keeps every bit of text looking uniform.

strokesToOutline

Once strokes are turned into outlines they can gain weight, which shows up most on thin strokes. Where strokes sit within artwork that uses transparency, flattening may outline them, leaving them out of step with strokes kept clear of such artwork. Switching this option on keeps every stroke looking uniform.

allowComplexClip

Switching this on keeps the seams between vector and rasterized artwork hugging object paths closely. It cuts down the stitching artifacts you get when one slice of an object is flattened while the rest stays vector. The trade-off is that the resulting paths may grow too intricate for the printer to cope with.

preserveOverprint

Turn this on when you output separations and overprinted objects live in the document. Doing so tends to hold overprint for objects clear of transparency, which lifts performance. Composite printing renders it moot. Leaving it off can yield steadier output, since every instance of overprinting gets flattened regardless of any transparency involvement.

| --- | --- |

Example 1: Within the Transparency Flattening area of the Advanced Printing Setup dialog box, tick the "Convert All Text to Outlines" check box.

```
pp = getPrintParams();
rf = pp.constants.rasterFlagValues;
pp.rasterFlags = rf.textToOutline;
this.print(pp);
```

Example 2: Within the Transparency Flattening area of the Advanced Printing Setup dialog box, clear "Complex Clip Regions" (on by default).

```
pp = getPrintParams();
rf = pp.constants.rasterFlagValues;
pp.rasterFlags = pp.rasterFlags & ~rf.allowComplexClip;
// or pp.rasterFlags &= ~rf.allowComplexClip;
this.print(pp);
```

### reversePages

Version (Key)

Save-Prefs

Security

Product

Type

Access

6.0

No

No

All

Boolean

R/W

| --- | --- | --- | --- | --- | --- |

When true, the print order runs backward, from the last page to the first. It defaults to false.

### tileLabel

Version (Key)

Save-Prefs

Security

Product

Type

Access

6.0

No

No

All

Boolean

R/W

| --- | --- | --- | --- | --- | --- |

Adds a label to each tile of tiled output. Such labels note the row and column, the file name, and the date of printing. By default this is false.

### tileMark

Version (Key)

Save-Prefs

Security

Product

Type

Access

6.0

No

No

Not available in Reader

Integer

R/W

| --- | --- | --- | --- | --- | --- |

Tile marks show where the page should be cut and where tiles overlap. You assign the value via the constants tileMarks object. An illegal setting falls back to none. The default is none.

constants.tileMarks Object

Property

Description

none

No tile marks

west

Tile marks in the Western style

east

Tile marks in the Eastern style

| --- | --- |

### tileOverlap

Version (Key)

Save-Prefs

Security

Product

Type

Access

6.0

No

No

Not available in Reader

Integer

R/W

| --- | --- | --- | --- | --- | --- |

How many points adjacent tiled pages share along their edges. Keep the figure within 0 to 144. Anything outside that becomes 0. The default value is 0.

### tileScale

Version (Key)

Save-Prefs

Security

Product

Type

Access

6.0

No

No

Not available in Reader

Number

R/W

| --- | --- | --- | --- | --- | --- |

The factor by which tiled pages get scaled. Pages left untiled ignore this setting. Unscaled, or 1.0, is the default. Bigger numbers enlarge the printout, so 2.0 doubles it while 0.5 halves it. Keep tileScale within 0.01 to 99.99. Out-of-range entries revert to 1.0, the default value.

### transparencyLevel

Version (Key)

Save-Prefs

Security

Product

Type

Access

6.0

No

No

Not available in Reader

Integer

R/W

| --- | --- | --- | --- | --- | --- |

A whole number between 1 and 100 expresses how aggressively Acrobat works to keep high-level drawing operators intact. At 1 the image is fully rasterized, trading image quality away for speed. At 100 as much as can be is retained, though print speed may suffer for it. Illegal entries default to 75. During rasterization the bitmapDPI and gradientDPI values come into play. The default value is 75.

### usePrinterCRD

Version (Key)

Save-Prefs

Security

Product

Type

Access

6.0

No

No

All

Integer

R/W

| --- | --- | --- | --- | --- | --- |

Accepts any of three values. You assign it through the constants usages object. Compare useT1Conversion; both properties share these values, yet each reads them differently.

constants.usages Object

Property

Description

auto

Leave it to Acrobat to judge whether the printer's Color Rendering Dictionary (CRD) gets used. Acrobat keeps a short list of printers whose CRDs are faulty. Illegal entries fall back to auto. The default is auto.

use

Apply the CRD that the printer supplies.

noUse

Bypass the printer's CRD entirely.

| --- | --- |

### useT1Conversion

Version (Key)

Save-Prefs

Security

Product

Type

Access

6.0

No

No

All

Integer

R/W

| --- | --- | --- | --- | --- | --- |

Accepts any of three values. You assign the useT1Conversion property through the constants usages object. Compare usePrinterCRD; both properties share these values, yet each reads them differently.

Note

Only Windows platforms support this property.

It draws on the constants.usages Object values in the following way.

Property

Description

auto

Leave it to Acrobat to judge whether to hold off converting Type 1 fonts into leaner printer forms such as TrueType. Acrobat keeps a short list of printers that struggle with these fonts. Illegal entries fall back to auto. The default is auto.

use

Permit Type 1 font conversion even when the printer is known to stumble over alternative font representations.

noUse

Never turn Type 1 fonts into leaner representations.

| --- | --- |
