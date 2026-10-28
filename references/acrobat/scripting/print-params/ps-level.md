# psLevel

| Version (Key) | Save-Prefs | Security | Product | Type | Access |
| --- | --- | --- | --- | --- | --- |
| 6.0 | No | No | All | Integer | R/W |

Which PostScript level gets sent to PostScript printers. A value of 0 says to defer to the printer's own PostScript level. Level 1 has no support. Beyond 0, the values psLevel accepts today are 2 and 3. When the printer can only manage PostScript level 1, printAsImage flips to true. Any out-of-range value is handled as 3. psLevel defaults to 3.
