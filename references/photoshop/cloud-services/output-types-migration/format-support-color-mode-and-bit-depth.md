# Output Types Migration Guide - Format support: color mode and bit depth

During export, the API converts source images automatically when the target format cannot accept the source color mode or bit depth. The tables below list supported combinations and the fallback for each export path.

**Export paths:** _Full document_ means exporting the entire document, such as `/v2/create-composite` with no layer selection. _Single layer_ means one layer is exported. _Layers composite_ means the output is built from multiple selected layers.

**With ICC Profile** means the output's `iccProfile` option is supplied. For full document export with an ICC profile, the ICC transformation handles color management, so format-specific conversion is bypassed.

**Layers composite:** layers composite export does not apply format-specific conversion; the composite is written in its current form.
