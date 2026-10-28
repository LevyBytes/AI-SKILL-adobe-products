# Supported Operations

| Operation | V1 | V2 | Notes |
| --- | --- | --- | --- |
| Add (create) | ✓ | ✓ | Create a new background layer with pixel content |
| Read (manifest) | ✓ | ✓ | Background appears with `id: -1` in v1. In v2, a valid layer ID is returned. For assets that contain only a background layer, the ID is `0` |
| Edit pixel content | ✓ (internal auto-convert) | ✓ (via `image.source`) | V2 is explicit about image replacement |
| Convert to layer | ✓ (internal) | ✓ (explicit `convertToLayer: true`) | Convert background to regular layer |
| Delete | ✓ | ✓ | Remove background layer |
| Move | ✗ | ✗ | Background layer position is fixed; move operations not supported |
