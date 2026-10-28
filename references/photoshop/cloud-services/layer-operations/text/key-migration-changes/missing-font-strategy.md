# Missing-font strategy

| Strategy | V1 (`manageMissingFonts`) | V2 (`missingFontStrategy`) | Behavior |
| --- | --- | --- | --- |
| Use default | `"useDefault"` | `"use_default"` (default) | Missing fonts are substituted with the default font, or ArialMT. The job completes. |
| Fail | `"fail"` | `"fail"` | The job fails and reports the missing fonts. |
