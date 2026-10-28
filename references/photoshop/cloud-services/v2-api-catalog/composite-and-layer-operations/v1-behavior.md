# V1 behavior

V1 spread this surface across four endpoints that V2 now unifies:

- `renditionCreate` - converts PSD files to JPEG, PNG, or TIFF only
- `documentCreate` - creates a blank document
- `documentOperations` - changes existing documents, including resize, crop, trim, and layer add/edit/delete work
- `smartObject` - handles placing or replacing smart object content through a dedicated endpoint

Inside `documentOperations`, layer operations were passed as an `options.layers` array. Layer types used camelCase names such as `layerSection`, `textLayer`, and `smartObject`.
