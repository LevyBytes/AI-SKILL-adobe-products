# Document creation specific

- [ ] Express `resolution` as `{"unit": "density_unit", "value": 72}`, not as an integer
- [ ] Send `depth` as an integer such as `8`, not as a string such as `"8"`
- [ ] Use color mode `"grayscale"`, not `"gray"`
- [ ] Rename `fill: "backgroundColor"` from V1 camelCase to `fill: "background_color"` in V2 snake_case; V2 rejects the camelCase form
- [ ] For the V2 object form of `fill`, use `{"solidColor": {"rgb": {"red": N, "green": N, "blue": N}}}` for custom color
- [ ] Validate `depth` against the selected mode: `bitmap`→1 only; `grayscale`/`rgb`/`hsb`→8,16,32; `cmyk`/`lab`/`multichannel`→8,16; `indexed`/`duotone`→8 only
- [ ] For `solid_color_layer` fill, keep the structure `fill.solidColor.rgb.{red,green,blue}`; V1 and V2 both require the `rgb` wrapper
- [ ] Rename `fontColor.cmyk.yellowColor` to `fontColor.cmyk.yellow`; rename `fontColor.lab.luminance` to `fontColor.lab.l`
- [ ] V1 accepted 0–65535 for `fontColor` rgb/cmyk/gray/lab-l; V2 maximum is 32768, so use 32768 when a V1 value is higher
- [ ] V1 accepted 0–65535 for `fontColor` lab `a`/`b`; V2 maximum is 16384, so use 16384 when a V1 value is higher
- [ ] `apply.{from, to}` is optional on each `characterStyles` entry; omit it to style the entire text, and include it only for a specific character range
- [ ] Percent-encode source and destination URLs completely; do not leave spaces or special characters unencoded
