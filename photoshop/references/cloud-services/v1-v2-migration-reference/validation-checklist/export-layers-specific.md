# Export layers specific

- [ ] Use `cropMode` `layer_bounds` only for single-layer export; `trim_to_transparency` and `document_bounds` support every export type
- [ ] Do not request PSD format for multi-layer export; use JPEG, PNG, or TIFF
- [ ] If omitted, JPEG quality defaults to `photoshop_max`; PNG compression defaults to `default` (level 6)
