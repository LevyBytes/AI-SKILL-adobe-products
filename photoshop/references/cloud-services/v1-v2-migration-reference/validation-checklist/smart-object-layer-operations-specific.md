# Smart object layer operations specific

- [ ] Rename layer type `"smartObject"` to `"smart_object_layer"`
- [ ] Move source from V1 `input: {href, storage}` to V2 `smartObject.smartObjectFile.source.url`
- [ ] Rename `smartObject.linked` to `smartObject.isLinked`
- [ ] When a `transform` object is present, set `transformMode` to one of `"none"`, `"custom"`, `"fit"`, or `"fill"`
- [ ] V2 adds SVG and AI as supported source file types; PSD, JPEG, PNG, TIFF, and PDF already existed in V1
- [ ] AI files work only if **Create PDF Compatible File** was enabled during the Illustrator save
- [ ] Width-only resizing rasterizes linked SOs into pixel layers unless the same request supplies their content
