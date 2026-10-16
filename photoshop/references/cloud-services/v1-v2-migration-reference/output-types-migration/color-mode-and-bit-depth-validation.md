# Color mode and bit depth validation

If the requested target format cannot accept the source image color mode or bit depth, the API performs the needed conversion automatically. The exact rule set depends on which export path is used.

**Export paths:** _Full document_ means exporting the whole document. _Single layer_ means outputting one layer. _Layers composite_ means creating an export from several selected layers composited together. For _Layers composite_, the API leaves the target format unchanged and performs no format-specific conversion pass.
