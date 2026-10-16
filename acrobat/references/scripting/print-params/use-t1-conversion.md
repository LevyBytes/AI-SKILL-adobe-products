# useT1Conversion

| Version (Key) | Save-Prefs | Security | Product | Type | Access |
| --- | --- | --- | --- | --- | --- |
| 6.0 | No | No | All | Integer | R/W |

Accepts any of three values. You assign the useT1Conversion property through the constants usages object. Compare usePrinterCRD; both properties share these values, yet each reads them differently.

Note

Only Windows platforms support this property.

It draws on the constants.usages Object values in the following way.

| Property | Description |
| --- | --- |
| auto | Leave it to Acrobat to judge whether to hold off converting Type 1 fonts into leaner printer forms such as TrueType. Acrobat keeps a short list of printers that struggle with these fonts. Illegal entries fall back to auto. The default is auto. |
| use | Permit Type 1 font conversion even when the printer is known to stumble over alternative font representations. |
| noUse | Never turn Type 1 fonts into leaner representations. |
