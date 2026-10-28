# Text layer operations specific

- [ ] Rename layer type `"textLayer"` to `"text_layer"`
- [ ] For character/paragraph style ranges, convert V1 `to` as length into V2 `apply.to` as an inclusive end index; **subtract 1 from V1's `to`** during migration
- [ ] Put style properties inside the V2 `characterStyle` object, with `apply: {from, to}` as the range wrapper
- [ ] Move V1 top-level `fontName` into V2 `characterStyle.font.postScriptName`, inside `characterStyle.font`
- [ ] Put paragraph styles inside the V2 `paragraphStyle` object
- [ ] Convert V1 layer-level `bounds {left,top,width,height}` into V2 `text.frame {type:"area", bounds:{top,left,right,bottom}}`; compute `right=left+width` and `bottom=top+height`
- [ ] For single-point text, use `text.frame: {type:"point", origin:{x,y}}`
- [ ] V2 defaults to a point at the canvas center when no frame is supplied, so always set `text.frame` explicitly
- [ ] Treat `textOrientation` as a text-level property, not a per-character-style setting
- [ ] Convert font options from `options.fonts` (href+storage) to `fontOptions.additionalFonts` with `source.url`; convert `options.globalFont` to `fontOptions.defaultFontPostScriptName`; convert `manageMissingFonts:"useDefault"` to `missingFontStrategy:"use_default"`
- [ ] `lineHeight` / `autoLeading` are V2-only controls. Because V1 always used automatic leading and had no line-height override, match that behavior with `autoLeading: true` (line height = 120% of `fontSize`); for custom leading, send `autoLeading: false` plus an explicit `lineHeight`:

auto: matches V1 behavior

```json
{
  "characterStyle": {
    "fontSize": 30,
    "autoLeading": true
  }
}
```

custom leading

```json
{
  "characterStyle": {
    "fontSize": 30,
    "autoLeading": false,
    "lineHeight": 48
  }
}
```
