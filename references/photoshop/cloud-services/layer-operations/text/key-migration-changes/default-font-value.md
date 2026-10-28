# Default font value

- **V1:** If `globalFont` is unset and `manageMissingFonts` is `"useDefault"`, **ArialMT** is used by the worker as the fallback.
- **V2:** If `defaultFontPostScriptName` is unset while the strategy uses the default, **ArialMT** is the worker fallback.

When neither version is given a global/default font, **ArialMT** is the default fallback font.
