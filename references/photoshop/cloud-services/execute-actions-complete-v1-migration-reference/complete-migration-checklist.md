# 14. Complete migration checklist

- [ ] Use `image.source.url` (or `creativeCloudPath` / `creativeCloudFileId`) instead of `inputs[0].href` + `storage`
- [ ] Use `outputs[].destination.url` (or CC / hosted / embedded) instead of `outputs[].href` + `storage`
- [ ] Change `outputs[].type` to `outputs[].mediaType`
- [ ] Convert `options.actions[].href` + `storage` into `options.actions[].source.url`
- [ ] Convert ActionJSON from `options.actionJSON[...]` into a JSON string in `options.actions[].source.content`, plus `contentType: "application/json"`
- [ ] Rename `options.additionalImages[]` as `options.additionalContents[]`, and change each item to the `source.url` structure
- [ ] Change placeholders from `ACTION_JSON_OPTIONS_ADDITIONAL_IMAGES_0` to `__ADDITIONAL_CONTENTS_PATH_0__`
- [ ] Rename `options.fonts[]` as `options.fontOptions.additionalFonts[]`, and change each item to the `source.url` structure
- [ ] Convert `options.brushes[].href` + `storage` into `options.brushes[].source.url`
- [ ] Convert `options.patterns[].href` + `storage` into `options.patterns[].source.url`
- [ ] Delete `options.costOptimization`; V2 has no matching field
- [ ] Move JPEG `quality` away from numeric values (1-12) and use a string enum
- [ ] Move PNG `compression` away from `small`/`medium`/`large` and use the V2 enum set
- [ ] Change output `overwrite` to `shouldOverwrite`
- [ ] Delete output `includeMetadata` and `embedICCProfiles`; include an `iccProfile` object only when needed
- [ ] Verify V2 resource totals stay within the limits: 10 for brushes/patterns/fonts and 25 for outputs
