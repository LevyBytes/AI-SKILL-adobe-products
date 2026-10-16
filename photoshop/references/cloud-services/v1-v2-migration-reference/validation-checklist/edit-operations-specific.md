# Edit operations specific

- [ ] Collapse multiple V1 calls into one V2 call
- [ ] Put parameters under category objects such as `light`, `color`, and `effects`
- [ ] Convert parameter names from PascalCase to camelCase
- [ ] Send `autoTone` as the boolean `true`
- [ ] Send `autoStraighten` as an object with `enabled: true`
- [ ] Turn inline XMP strings into file references at `edits.xmp.source`
- [ ] Move masks from `options.masks` into `edits.xmp.masks`
- [ ] Change mask structure from `href` plus `storage` to `source.url`
- [ ] Give every mask both `source` and `digest`
- [ ] If XMP orientation is present, nest it inside the `xmp` object instead of directly under `edits`
- [ ] Use orientation string values such as `"right_top"` rather than numeric codes
