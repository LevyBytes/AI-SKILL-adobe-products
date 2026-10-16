# Background Layer Specifics migration

**Background Layer Specifics:**

- Layer type: V1 `"backgroundLayer"` maps to V2 `"background_layer"`
- V1 addressed the background with `id: -1`; V2 returns the real PIE layer ID in the manifest. If a document contains only a flat background and no layers, the manifest reports `id: 0`.
- In V2, target the background layer by `name: "Background"` or by the manifest response `id`.
- The manifest includes `background.canConvertToLayer` (boolean), which reports whether `convertToLayer: true` can promote the background to a regular layer.
- **Placement:** Background layers are fixed at the bottom of the stack. Omit `placement` from a `background_layer` add operation because the value is ignored.

**Allowed direct edits** (no conversion needed):

- `isVisible` - switch layer visibility on or off
- `image.source` - swap the background pixels, using the same `image` block shape as other layer types

**Restricted fields** - setting these directly on `background_layer` returns an error:
`transform`, `transformMode`, `pixelMask`, `protection`, `blendOptions`

**Mutually exclusive within a single entry:** `image` for pixel replacement and `convertToLayer: true` cannot share one layer entry. Put them in separate `layers` array entries; see the chained workflow below.
