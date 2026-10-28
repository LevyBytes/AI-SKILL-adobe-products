# Darkening blend modes

Darken

For each channel, the result takes whichever is lower — that is, darker — between the source color channel value and its matching underlying color channel value.

Multiply

Channel by channel, this multiplies the source color value against the underlying color value, then divides by the maximum value for 8-bpc, 16-bpc, or 32-bpc pixels according to the project's color depth. You'll never get a result brighter than the original. A black input on either side yields black; a white input on either side hands back the other input color. The mode mimics drawing with several marking pens on paper, or stacking several gels in front of a light. Blend with anything other than black or white and each layer or paint stroke carrying this mode pushes toward a darker color.

Color Burn

By raising contrast, this darkens the source color so it picks up the underlying layer's color. Where the original layer is pure white, the underlying color is left as is.

Classic Color Burn

This is the Color Burn from After Effects 5.0 and earlier under a new name. Reach for it when you need older projects to stay compatible; otherwise Color Burn is the one to use.

Linear Burn

This darkens the source color so it reflects the underlying color. Pure white leaves things unchanged.

Darker Color

Every result pixel ends up darker than both the source color value and its matching underlying color value. It resembles Darken, except Darker Color doesn't work channel by channel.

Related: [Normal and dissolve blending modes](blending-mode-descriptions.md).
