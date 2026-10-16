# Layer Property Locations (V2) migration

**Layer Property Locations (V2):**

| Property | V1 | V2 (most layer types) | V2 (`smart_object_layer`) |
| --- | --- | --- | --- |
| Opacity | `blendOptions.opacity` | top-level `opacity` | `blendOptions.opacity` |
| Blend mode | `blendOptions.blendMode` | top-level `blendMode` | `blendOptions.blendMode` |
| Visibility | `visible` | `isVisible` | `isVisible` |
| Lock | `locked: true/false` | `protection: ["all"]` / `["none"]` | `protection: ["all"]` / `["none"]` |

For `smart_object_layer`, keep `opacity` and `blendMode` inside `blendOptions`. Other V2 layer categories, including image, text, adjustment, solid color, group, and background layers, place those values at the top level.

**Artboard root visibility behavior in V1:** For V1 `documentOperations`, applying `visible: false` to an **artboard root layer** by `id` or `name` does not remove the artboard pixels from the rendered result. The returned image still uses the original full-canvas dimensions. V2 `create-composite` instead honors artboard visibility, omits hidden artboards, and sizes the output to the visible artboard content. A migration that depended on hidden artboard roots disappearing from output is encountering an intended V2 behavior change. Pixel diff tools may report a size mismatch such as `2930×4509` in V1 versus `2930×960` in V2; that mismatch is normal.
