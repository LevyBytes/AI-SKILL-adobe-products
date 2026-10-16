# ICC profile support for layer export

The optional output field `iccProfile` works for both single-layer and multi-layer exports. Use it to perform ICC color-space conversion while exporting chosen layers, including conversions to sRGB, Adobe RGB, grayscale, or custom profiles.

- Supported layer export formats with ICC handling are JPEG, TIFF, and PSD for single-layer output; JPEG and TIFF for multi-layer output. **PNG does not support ICC profiles**
- Each output object in one request may specify its own independent `iccProfile`
- A single request may mix outputs that include `iccProfile` with outputs that omit it
- Standard ICC profiles and custom ICC profiles are both supported; [ICC Profile Migration](../icc-profile-migration-guide-overview.md) gives the full schema
