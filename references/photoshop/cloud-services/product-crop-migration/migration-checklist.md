# Migration checklist

- [ ] Use `/v2/execute-actions` in place of `/pie/psdService/productCrop`
- [ ] Change the request body shape from `inputs`/outputs` to `image`/outputs`
- [ ] Rewrite `href` fields as `url` fields
- [ ] Omit `storage` fields (V2 determines the storage type automatically)
- [ ] Rename the `type` field to `mediaType`
- [ ] Put the ActionJSON in `options.actions[].source.content`
- [ ] Assign `contentType` the value `"application/json"`
- [ ] Verify the workflow with default padding values
- [ ] Adjust padding when your use case requires it
