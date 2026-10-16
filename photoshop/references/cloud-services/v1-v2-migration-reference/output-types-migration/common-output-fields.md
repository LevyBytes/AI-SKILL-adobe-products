# Common output fields

Every output type accepts these optional fields:

- `width` (integer, >= 0) - pixel width for the result
- `height` (integer, >= 0) - pixel height for the result
- `maxWidth` (integer, >= 0) - upper bound on result width in pixels
- `resample` (string, optional) - algorithm used when resizing through `width`/`maxWidth`. Values: `nearest_neighbor`, `bilinear`, `bicubic`, `bicubic_smoother`, `bicubic_sharper`. Default is `bicubic_sharper`. Applies to JPEG, PNG, and TIFF exports.
- `shouldTrimToCanvas` (boolean) - removes transparent pixels

## See also

- [Smart Object Replace](../../smart-object-replace-migration/smart-object-replace.md)
- [Text Layer Operations](../../text-layer-operations/reference-index.md)
