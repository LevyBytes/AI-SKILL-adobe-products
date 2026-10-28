# All Output Types

- [ ] Change `outputs[].href` to `outputs[].destination.url`
- [ ] Change `outputs[].type` to `outputs[].mediaType`
- [ ] Omit `storage: "external"` for AWS S3 presigned URLs
- [ ] Include `storageType` for Azure Blob Storage or Dropbox when required
- [ ] Recheck shared fields such as `width`, `height`, and `maxWidth`
- [ ] Add `resample` when you need interpolation control with `width`/`maxWidth` (JPEG, PNG, TIFF; defaults to `bicubic_sharper`)
