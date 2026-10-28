# V2 behavior

In V2, `/v2/edit` covers every Lightroom edit operation. A single request may include any mix of adjustments: `autoTone`, `autoStraighten`, `light`, `color`, `detail`, `effects`, `optics`, and XMP presets. The adjustment parameter names and value ranges match V1; the surrounding request envelope is what changed.
