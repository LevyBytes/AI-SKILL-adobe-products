# flags

| Version (Key) | Save-Prefs | Security | Product | Type | Access |
| --- | --- | --- | --- | --- | --- |
| 6.0 | No | No | All | Integer | R/W |

A bit field of print-control flags. You raise or lower these flags with bitwise operations applied through the constants flagValues object.

You may set any number of flags, from none upward; flags that aren't supported get ignored. By default they take whatever the user preferences set.

constants.flagValues object

Each of the flagValues object's properties appears in the table below; except where stated otherwise, none of them is available in Adobe Reader.

| Property | Description |
| --- | --- |
| applyOverPrint | Run an overprint preview while printing. Leave it off where overprinting already has native support. |
| applySoftProofSettings | Apply the soft-proofing settings ahead of any color management. |
| applyWorkingColorSpaces | Bring working color spaces into play when printing. |
| emitHalftones | Output the halftones that the document specifies. |
| emitPostScriptXObjects | PostScript only — yes, carry the content of PostScript XObjects through to the output. |
| emitFormsAsPSForms | Turns Form XObjects into PS forms. Off by default. |
| maxJP2KRes | Draw on the full resolution of JPeg2000 images rather than the closest-matching resolution. |
| setPageSize | Switch on setPageSize. Pick the paper tray according to the PDF's page size. Available in Adobe Reader. |
| suppressBG | Hold back the document's BlackGeneration from the output. |
| suppressCenter | Skip centering the page. Available in Adobe Reader. |
| suppressCJKFontSubst | Hold back CJK Font Substitution at the printer—has no bearing when kAVEmitFontAllFonts is in use. |
| suppressCropClip | Skip emitting the cropbox page clip. Available in Adobe Reader. |
| suppressRotate | Skip rotating the page. Available in Adobe Reader. |
| suppressTransfer | Hold back the document's transfer functions from the output. |
| suppressUCR | Hold back UnderColorRemovals in the document from the output. |
| useTrapAnnots | Output TrapNet and PrinterMark annotations even when the print setting says “document only”. |
| usePrintersMarks | Output PrinterMark annotations even when the print setting says “document only”. Available in Acrobat Pro only. |

Example 1: Within the Advanced Print Setup dialog box, under Output options, tick the Apply Output Preview Settings box.

```javascript
var pp = this.getPrintParams();
var fv = pp.constants.flagValues;
// or pp.flags = fv.applySoftProofSettings;;
pp.flags = pp.flags | fv.applySoftProofSettings;
this.print(pp);
```

Example 2: Inside the Print dialog box, clear Auto-Rotate and Center, which starts out checked.

```javascript
var pp = this.getPrintParams();
var fv = pp.constants.flagValues;
pp.flags = (fv.suppressCenter | fv.suppressRotate);
this.print(pp);
```

Example 3: Open the Advanced Print Setup dialog box, go to its PostScript options, and tick the Emit Undercolor Removal/Black Generation box.

```javascript
var pp = this.getPrintParams();
var fv = pp.constants.flagValues;
pp.flags &= ~(fv.suppressBG | fv.suppressUCR)
this.print(pp)
```
