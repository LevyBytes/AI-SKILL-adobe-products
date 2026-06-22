# Printparams (part 1)

> Adobe Acrobat reference. Original prose; identifiers preserved verbatim.

## JavaScript APIs — PrintParams

Here is an all-purpose object governing the print settings that apply to any document sent to print through JavaScript. Altering it leaves the user preferences untouched and makes no lasting modification to the document.

Within Acrobat 6.0, a PrintParams object is the argument the Doc print method expects. Call the Doc getPrintParams method to acquire one, then adjust the object it returns.

A good many PrintParams properties expect integer constants for their values, and you get at those through the constants property. As an example:

```
// Get the printParams object of the default printer
var pp = this.getPrintParams();
// Set some properties
pp.interactive = pp.constants.interactionLevel.automatic;
// Print
this.print(pp);
```

Every one of the constants properties is an integer that is read-only.

### PrintParams properties

### binaryOK

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

Set to true when the printer can accept a binary channel. true is the default.

### bitmapDPI

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

How many dots per inch (DPI) to apply when generating bitmaps or flattening transparency. Acceptable values span 1 through 9600. Where the document's protections cap the printing resolution, whichever of the two figures is smaller wins. 300 is the default, and any illegal value falls back to 300. Consult gradientDPI as well.

### booklet

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

object

R/W

| --- | --- | --- | --- | --- | --- |

An object that carries the settings for booklet printing. Its properties are spelled out in the following table.

Property

Type

Access

Description

binding

Integer

R/W

For booklet output, the binding property fixes both the direction the paper binds and the sequence the pages get arranged in. You assign binding's value from the constants bookletBindings object covered below. Left is the default.

duplexMode

Integer

R/W

For booklet output, the duplexMode property fixes which duplex printing mode applies. You assign duplexMode's value from the constants duplexMode object covered below. BothSides is the default. Where the output device lacks automatic duplex capability, you can do a manual duplex by running the front and back sides as two separate print passes.

subsetFrom

Integer

R/W

For booklet output, subsetFrom names the earliest booklet sheet that gets printed. Quite apart from the overall page-range choice, this option restricts printing to a portion of the finished booklet.

Sheet numbering is valid from 0 upward, with 0 being the first sheet. 0 is also the default.

A value of -1 stands for the final sheet. In general terms, the negative number -N points to the sheet (N-1) positions ahead of the last one. So -2 names the sheet immediately preceding the final sheet, and -3 names the sheet two positions before the last.

Refer to the extra note below covering booklet subsetting.

subsetTo

Integer

R/W

For booklet output, subsetTo names the latest booklet sheet that gets printed. Quite apart from the overall page-range choice, this option restricts printing to a portion of the finished booklet.

Sheet numbering is valid from 0 upward, while -1 stands for the final sheet. -1 is also the default.

The negative number -N points to the sheet (N-1) positions ahead of the last one. So -2 names the sheet immediately preceding the final sheet, and -3 names the sheet two positions before the last.

Refer to the extra note below covering booklet subsetting.

| --- | --- | --- | --- |

You set the value of booklet.binding from the properties carried by the bookletBindings object.

constants.bookletBindings object

Property

Description

Left

Binds on the left for the Western left-to-right reading order. Folding happens on the short side.

Right

Binds on the right, suited to right-to-left text or the vertical writing of Japanese style. Folding happens on the short side.

LeftTall

Binds on the left for the Western left-to-right reading order. Folding happens on the long side, which yields tall, narrow pages.

RightTall

Binds on the right, suited to right-to-left text or the vertical writing of Japanese style. Folding happens on the long side, which yields tall, narrow pages.

| --- | --- |

You set the value of booklet.duplexMode from the properties carried by the bookletDuplexModes object.

constants.bookletDuplexModes object

Property

Description

BothSides

Prints both faces of the sheet automatically. This requires a printer that handles automatic duplex printing.

FrontSideOnly

Prints solely the pages destined for the front face of the sheet. To finish a manual duplex run, feed the printed sheets back in and print once more under BacksideOnly mode.

BackSideOnly

Prints solely the pages destined for the back face of the sheet.

| --- | --- |

Note

(Booklet subsetting using subsetFrom and subsetTo) Because tweaking the source page range — through the PrintParams object's firstPage and lastPage properties — itself reshapes the booklet output, you cannot readily reproduce the same result by adjusting those page-range properties. Consider this: an 8-page booklet job lays its first 2-sided sheet out in the page order [8, 1, 2, 7], whereas a 16-page job lays its first sheet out as [16, 1, 2, 15]. That is where subsetFrom and subsetTo earn their keep — letting you send particular booklet pages to different devices or media. One classic case is rendering the cover and inside cover in color while the remainder of the document prints in black and white. Another frequent case is running the cover page on heavier colored stock.

Example 1 (binding)

Configure a booklet whose text binds on the right edge, then send it to print.

```
var pp = this.getPrintParams();
pp.pageHandling = pp.constants.handling.booklet;
pp.booklet.binding = pp.constants.bookletBindings.Right;
this.print(pp);
```

Example 2 (duplexMode)

Print booklet in duplex mode, printing only the front pages.

```
var pp = this.getPrintParams();
pp.pageHandling = pp.constants.handling.booklet;
pp.booklet.duplexMode = pp.constants.bookletDuplexModes.FrontSideOnly;
this.print(pp);
```

Example 3 (subsetFrom and subsetTo)

Set up booklet printing to print the second sheet only and print.

```
var pp = this.getPrintParams();
pp.pageHandling = pp.constants.handling.booklet;
pp.booklet.subsetFrom = 1;
pp.booklet.subsetTo = 1;
this.print(pp);
```

Set booklet printing from the second sheet to the last sheet.

```
pp.booklet.subsetFrom = 1;
pp.booklet.subsetTo = -1;
```

Set booklet printing to print last sheet only.

```
pp.booklet.subsetFrom = -1;
pp.booklet.subsetTo = -1;
```

Set booklet printing to print last sheet two sheets.

```
pp.booklet.subsetFrom = -2;
pp.booklet.subsetTo = -1;
```

Set booklet printing to print all pages except the last two.

```
pp.booklet.subsetFrom = 0;
pp.booklet.subsetTo = -3;
```

### colorProfile

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

String

R/W

| --- | --- | --- | --- | --- | --- |

Which color profile to apply. To see the color spaces on offer, query printColorProfiles. By default this property holds “Printer/PostScript Color Management”.

### constants

Version (Key)

Save-Prefs

Security

Product

Type

Accessibility

6.0

No

No

All

object

R

| --- | --- | --- | --- | --- | --- |

Every PrintParams instance picks up this property, a wrapper enclosing an assortment of constant values. They are all read-only integers. They supply the option values for several of the other PrintParams properties, and each one is documented alongside the property it serves.

Constant object

Contains constant values for this property

bookletBindings

booklet

bookletDuplexModes

booklet

duplexTypes

DuplexType

fontPolicies

fontPolicy

handling

pageHandling

interactionLevel

interactive

nUpPageOrders

nUpPageOrder

printContents

printContent

flagValues

flags

rasterFlagValues

rasterFlags

subsets

pageSubset

tileMarks

tileMark

usages

usePrinterCRD useT1Conversion

| --- | --- |

### downloadFarEastFonts

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

When true (which is the default), Far East fonts get pushed to the printer whenever they are needed. Switch this to false in the case where the printer already holds Far East fonts yet wrongly claims it needs them.

### DuplexType

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

Chooses among simplex, duplex long-edge feed, and duplex short-edge feed for the print job's duplex mode. Under the Advanced tab of the Document Properties dialog box this surfaces as DuplexMode.

constants.duplexTypes Object

You reach the duplex choices via the constants.duplexType object, whose properties are tabulated below.

Property

Description

Simplex

Prints on one side of the paper.

DuplexFlipLongEdge

Prints both faces of the sheet, with the paper turning over along its long edge.

DuplexFlipShortEdge

Prints both faces of the sheet, with the paper turning over along its short edge.

| --- | --- |

Whenever DuplexFlipLongEdge or DuplexFlipShortEdge is in play, the chosen printer needs to support duplex printing.

Example: Switch the job to short-edge-feed duplex, then print it.

```
var pp = this.getPrintParams();
pp.DuplexType = pp.constants.duplexTypes.DuplexFlipShortEdge;
this.print(pp);
```

### fileName

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

A device-independent path naming a file that receives the output rather than the printer (Print to File). That path may be given relative to wherever the current document sits. Should the interaction level (refer to interactive) be full while printing to a file, it gets dropped to automatic.

Its default is an empty string, meaning no file name.

Note

Output written to a file comes out in a form the printer expects — Postscript or GDI commands, for instance.

Give printerName an empty string together with a fileName, and the current document gets written out as a PostScript file.

Example:

```
var pp = this.getPrintParams();
pp.fileName = "/c/print/myDoc.prn";
this.print(pp);
```

Example 2: Save the current document as a PostScript file.

```
var pp = this.getPrintParams();
pp.fileName = "/c/temp/myDoc.ps";
pp.printerName = "";
this.print(pp);
```

### firstPage

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

Which page of the document printing starts at. Counting is 0-based, so every document's opening page is 0 no matter what its page-number labels say. The default is 0, and any value beyond the document's range is taken as 0.

Consult lastPage as well.

Example:

```
var pp = this.getPrintParams();
pp.firstPage = 0;
pp.lastPage = 9;
this.print(pp);
```

### flags

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

A bit field of print-control flags. You raise or lower these flags with bitwise operations applied through the constants flagValues object.

You may set any number of flags, from none upward; flags that aren't supported get ignored. By default they take whatever the user preferences set.

constants.flagValues object

Each of the flagValues object's properties appears in the table below; except where stated otherwise, none of them is available in Adobe Reader.

Property

Description

applyOverPrint

Run an overprint preview while printing. Leave it off where overprinting already has native support.

applySoftProofSettings

Apply the soft-proofing settings ahead of any color management.

applyWorkingColorSpaces

Bring working color spaces into play when printing.

emitHalftones

Output the halftones that the document specifies.

emitPostScriptXObjects

PostScript only — yes, carry the content of PostScript XObjects through to the output.

emitFormsAsPSForms

Turns Form XObjects into PS forms. Off by default.

maxJP2KRes

Draw on the full resolution of JPeg2000 images rather than the closest-matching resolution.

setPageSize

Switch on setPageSize. Pick the paper tray according to the PDF's page size. Available in Adobe Reader.

suppressBG

Hold back the document's BlackGeneration from the output.

suppressCenter

Skip centering the page. Available in Adobe Reader.

suppressCJKFontSubst

Hold back CJK Font Substitution at the printer—has no bearing when kAVEmitFontAllFonts is in use.

suppressCropClip

Skip emitting the cropbox page clip. Available in Adobe Reader.

suppressRotate

Skip rotating the page. Available in Adobe Reader.

suppressTransfer

Hold back the document's transfer functions from the output.

suppressUCR

Hold back UnderColorRemovals in the document from the output.

useTrapAnnots

Output TrapNet and PrinterMark annotations even when the print setting says “document only”.

usePrintersMarks

Output PrinterMark annotations even when the print setting says “document only”. Available in Acrobat Pro only.

| --- | --- |

Example 1: Within the Advanced Print Setup dialog box, under Output options, tick the Apply Output Preview Settings box.

```
pp = getPrintParams();
fv = pp.constants.flagValues;
// or pp.flags = fv.applySoftProofSettings;;
pp.flags = pp.flags  fv.applySoftProofSettings;
this.print(pp);
```

Example 2: Inside the Print dialog box, clear Auto-Rotate and Center, which starts out checked.

```
pp = getPrintParams();
fv = pp.constants.flagValues;
pp.flags = (fv.suppressCenter  fv.suppressRotate);
this.print(pp);
```

Example 3: Open the Advanced Print Setup dialog box, go to its PostScript options, and tick the Emit Undercolor Removal/Black Generation box.

```
pp = getPrintParams();
fv = pp.constants.flagValues;
pp.flags &= ~(fv.suppressBG  fv.suppressUCR)
this.print(pp)
```

### fontPolicy

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

Establishes the font policy. You assign the fontpolicy property's value from the constants fontPolicies object. pageRange is the default.

constants.fontPolicies object

Property

Description

everyPage

Send the needed fonts down ahead of each page, then release every font once that page finishes. The print jobs this yields are the biggest and slowest, yet they demand the least printer memory.

jobStart

Send the needed fonts down as the print job opens, then release them when the job closes. The print jobs this yields are the smallest and fastest, yet they demand the most printer memory.

pageRange

(Default) Send each font down ahead of the first page that calls for it and release it after the last such page. This too yields the smallest, fastest print jobs and may consume less memory. The catch is that page ordering forces the job to be printed exactly as produced. - pageRange can strike a sound balance between speed and memory. That said, steer clear of it when the PostScriptcript pages are going to be reordered programmatically later on.

| --- | --- |

### gradientDPI

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

How many dots per inch to apply when rasterizing gradients. You can usually pitch this below bitmapDPI, since it touches regions the eye notices less. It has to land between 1 and 9600. Illegal values fall back to 150. Where the document protections cap the printing resolution, whichever of the two figures is smaller gets used. 150 is the default.

### interactive

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

Sets how much the user interacts with the print job. You assign this property's value from the constants interactionLevel object. full is the default.

Note

(Acrobat 7.0) Printing without interaction is permitted only during batch, console, and menu events. You make printing non-interactive either by passing bUI as false to the Doc print method or by switching the interactive property to silent, as in:

```
var pp = this.getPrintParams();
pp.interactive = pp.constants.interactionLevel.silent;
```

Anywhere outside batch, console, and menu events, both bUI and interactive go unheeded, and a print dialog box is always shown.

Refer to Privileged context as well.

constants.interactionLevel Object

Property

Description

automatic

Nothing prompts with a print dialog box. While the job runs, a progress monitor and cancel dialog box show up, then clear themselves once printing wraps up.

full

Shows the print dialog box, which lets the user adjust print settings and obliges them to click OK before going on. While the job runs, a progress monitor and cancel dialog box show up, then clear themselves once printing wraps up.

silent

Nothing prompts with a print dialog box. No progress or cancel dialog box appears either. Not even error messages are shown.

| --- | --- |

Example:

```
var pp = this.getPrintParams();
pp.interactive = pp.constants.interactionLevel.automatic;
pp.printerName = "Adobe PDF";
this.print(pp);
```

### lastPage

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

The document's final page to print, counted 0-based. By “0-based” we mean every document's opening page is 0, whatever its page-number labels read. Should the value fall under firstPage or stray outside the document's legal range, it snaps back to its default. That default is the document's page count minus one.

Refer to firstPage for an example.

### nUpAutoRotate

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

Boolean

R/W

| --- | --- | --- | --- | --- | --- |

A Boolean that, when true, spins each page automatically so its orientation lines up with the available paper region during Multiple Pages Per Sheet printing. Although the default is false, nUpAutoRotate defers to the print settings.

Setting pageHandling to nUp is what gives you Multiple Pages Per Sheet.

### nUpNumPagesH

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

How many pages to arrange across the horizontal axis under Multiple Pages Per Sheet printing. Although the default is 2, nUpNumPagesH defers to the print settings.

Setting pageHandling to nUp is what gives you Multiple Pages Per Sheet.

Example: Run this document through Multiple Pages Per Sheet output, configure the parameters, and print.

```
pp = this.getPrintParams();
pp.pageHandling = pp.constants.handling.nUp;
pp.nUpPageOrders = pp.constants.nUpPageOrders.Vertical;
pp.nUpNumPagesH = 3;
pp.nUpNumPagesV = 3;
pp.nUpPageBorder=true;
pp.nUpAutoRotate=true;
this.print(pp);
```

### nUpNumPagesV

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

How many pages to arrange down the vertical axis under Multiple Pages Per Sheet printing. Although the default is 2, nUpNumPagesV defers to the print settings.

Setting pageHandling to nUp is what gives you Multiple Pages Per Sheet.

Refer to nUpNumPagesH for an example.

### nUpPageBorder

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

Boolean

R/W

| --- | --- | --- | --- | --- | --- |
