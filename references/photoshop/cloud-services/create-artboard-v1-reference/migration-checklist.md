# 13. Migration checklist

- [ ] Promote `options.artboard[]` into the root-level `images[]` array
- [ ] For each image, map `href` + `storage` to `source.url`; for CC assets, use `source.creativeCloudPath` or `source.creativeCloudFileId`
- [ ] Move `outputs[].href` into `outputs[].destination.url`
- [ ] Drop `outputs[].storage`; add `destination.storageType` only for Azure or Dropbox
- [ ] Rename `outputs[].type` as `outputs[].mediaType`
- [ ] Convert JPEG `quality` from numeric values (1-7) to string enums such as `"maximum"` or `"high"`
- [ ] Convert PNG `compression` from `small`/`medium`/`large` to V2 enums such as `"maximum"`, `"medium"`, or `"low"`
- [ ] Map `overwrite` to `shouldOverwrite`
- [ ] Use the `cropMode` enum instead of `trimToCanvas`/`trimToLayer` booleans
- [ ] Add `artboardSpacing` if the V1 workflow depended on custom spacing
- [ ] For status polling, read top-level `status` instead of `outputs[n].status`; read `result.outputs[n].destination.url` instead of `outputs[n]._links.renditions[m].href`
- [ ] Keep the image count at 25 or below because V2 enforces that limit
- [ ] Omit the leading slash from Creative Cloud paths
