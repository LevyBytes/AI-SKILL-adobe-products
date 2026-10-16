# Request structure

- [ ] Set the base URL to `photoshop-api.adobe.io`
- [ ] Update the endpoint path according to the mapping table
- [ ] Replace `inputs[].href` with `image.source.url`
- [ ] Replace `options` with `edits` where that structure applies
- [ ] Include an `outputs` array and configure it correctly
- [ ] Move `outputs[].href` to `outputs[].destination.url`
- [ ] Move `outputs[].type` to `outputs[].mediaType`
- [ ] Remove `storage`, or use `storageType` only for Azure/Dropbox
