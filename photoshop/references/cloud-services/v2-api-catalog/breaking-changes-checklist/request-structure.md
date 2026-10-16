# Request structure

- [ ] Use `image.source.url` in place of `inputs[0].href` + `"storage"`
- [ ] For composite/document requests, use `edits`; for edit requests, use top-level fields instead of `options`
- [ ] Put output URLs in `outputs[0].destination.url`, or use `embedded`/`hosted`, instead of `outputs[0].href` + `"storage"`
- [ ] In outputs, use `"mediaType": "image/jpeg"` rather than `"type": "image/jpeg"`
