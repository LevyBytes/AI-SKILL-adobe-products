# Retouch a large area with the Healing Brush tool

Use the Healing Brush tool in Adobe Photoshop to repair larger image areas by blending the sampled pixels with nearby texture, light, and tone.

Choose the Healing Brush tool.

From the brush options dropdown menu in the Options bar, set Size, Hardness, and Spacing.

Set up Healing Brush tool options in the Options bar:

Mode

Choose a blending mode for healing strokes:

- Normal: standard mode that blends with surrounding pixels.
- Replace: keeps noise and texture along brush edges.
- Multiply: darkens by combining the base color with the blend color through multiplication.
- Screen: lightens by placing the blend color over the base color.
- Darken: keeps only pixels that are darker in the blend.
- Lighten: keeps only pixels that are lighter in the blend.
- Color: combines hue and saturation while keeping luminosity from the base.
- Luminosity: combines brightness while keeping hue and saturation from the base.

Source

Choose where Photoshop should sample pixels:

- Sampled ICON: samples pixels from the current image.
- Pattern ICON: samples a selected pattern. Choose the pattern from the panel that opens.

Aligned ICON

Use the Aligned checkbox to set how Photoshop continues sampling:

- On: samples continuously as you paint.
- Off: returns to the first sample point whenever you begin painting again.

Sample

Choose which layers provide the source pixels:

- Current Layer: samples from the active layer only.
- Current & Below: samples from the active layer and visible layers below it.
- All Layers: samples from all visible layers.
- Ignore Adjustment Layers: choose the adjustment layer ICON to keep adjustment layers out of sampling.

Diffusion

Set how quickly the repaired pixels blend into the surrounding area:

- Lower values: suited to detailed textures and edges.
- Higher values: suited to smooth areas with gradient-like transitions.

Press Alt (Windows) or Option (macOS), then click the area to sample. That action defines the source pixels for the retouch.

Tip

For regions with strong edge contrast, make a selection slightly larger than the repair target. This helps stop outside colors from bleeding into the target area.

When sampling from one image and applying the sample to another image, both images need the same color mode unless one image is grayscale.

Drag across the area that needs repair. The sampled pixels blend into the surrounding image.
