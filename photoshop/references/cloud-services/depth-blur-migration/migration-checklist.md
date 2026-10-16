# Migration checklist

- [ ] Switch the endpoint from `/pie/psdService/depthBlur` to `/v2/execute-actions`
- [ ] Change the request shape from `inputs`/outputs` to `image`/outputs`
- [ ] Replace `href` fields with `url` fields
- [ ] Omit `storage` fields
- [ ] Change the `type` field to `mediaType`
- [ ] Place the ActionJSON in `options.actions[].source.content`
- [ ] Set `contentType` to `"application/json"`
- [ ] Validate the call with default parameter values
- [ ] Tune parameters for your specific use case
