# Lightening blend modes

Add

Each result channel value is the source and underlying color channel values summed together. The result is never darker than either of the inputs.

Lighten

For each channel, the result takes whichever is higher — that is, lighter — of the source color channel value and its matching underlying color channel value.

Screen

This multiplies the channel values' complements and then complements that result. The outcome is never darker than either input color. Working with Screen is much like casting several photographic slides onto one screen at the same time.

Color Dodge

By lowering contrast, this lightens the source color so it reflects the underlying layer's color. A pure black source color yields the underlying color as the result.

Classic Color Dodge

This is the Color Dodge from After Effects 5.0 and earlier, given a new name. Use it where older projects must stay compatible; otherwise go with Color Dodge.

Linear Dodge

By boosting brightness, this lightens the source color so it reflects the underlying color. Where the source color is pure black, the result is the underlying color.

Lighter Color

Each result pixel takes whichever is lighter between the source color value and its matching underlying color value. It's akin to Lighten, but Lighter Color doesn't act on individual channels.

Related: [Normal and dissolve blending modes](blending-mode-descriptions.md).
