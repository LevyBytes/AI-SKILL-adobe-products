# usePrinterCRD

| Version (Key) | Save-Prefs | Security | Product | Type | Access |
| --- | --- | --- | --- | --- | --- |
| 6.0 | No | No | All | Integer | R/W |

Accepts any of three values. You assign it through the constants usages object. Compare useT1Conversion; both properties share these values, yet each reads them differently.

constants.usages Object

| Property | Description |
| --- | --- |
| auto | Leave it to Acrobat to judge whether the printer's Color Rendering Dictionary (CRD) gets used. Acrobat keeps a short list of printers whose CRDs are faulty. Illegal entries fall back to auto. The default is auto. |
| use | Apply the CRD that the printer supplies. |
| noUse | Bypass the printer's CRD entirely. |
