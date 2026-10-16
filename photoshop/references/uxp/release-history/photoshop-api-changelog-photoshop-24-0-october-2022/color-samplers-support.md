# ColorSamplers support

Photoshop now exposes the ColorSampler DOM API.

- [ColorSamplers collection](../../host-api/color-samplers/reference-index.md) follows the same Document-level collection pattern used elsewhere in the API. ColorSamplers also includes these methods:
  - `colorSamplers.add()`
  - `colorSamplers.removeAll()`
- [ColorSamplers class](../../host-api/color-sampler/reference-index.md) implements:
  - `typename`: String
  - `parent`: [Document](../../document/reference-index.md)
  - `position`: `{x: number, y: number}`
  - `color`: [SolidColor](../../host-api/solid-color/reference-index.md)
  - `move({x: number, y: number})`
  - `remove()`
- [Document](../../document/reference-index.md) now implements `sampleColor()`, which samples an `{x, y}` position immediately and returns a [SolidColor](../../host-api/solid-color/reference-index.md) object without making a [ColorSampler](../../host-api/color-sampler/reference-index.md) first.
