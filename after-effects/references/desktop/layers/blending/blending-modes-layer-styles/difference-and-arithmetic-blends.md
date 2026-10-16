# Difference and arithmetic blend modes

Difference

Channel by channel, this takes away the darker of the two inputs from the lighter. Painting in white flips the backdrop color; painting in black changes nothing.

Note

When two layers share an identical visual element you're trying to align, stack one over the other and switch the upper layer's mode to Difference. From there, nudge either layer until the pixels of the element you're matching all read black — zero difference between them, which means the elements sit perfectly one atop the other.

Classic Difference

This is the Difference from After Effects 5.0 and earlier, renamed. Use it to keep older projects compatible; otherwise Difference is the choice.

Exclusion

The result resembles Difference but carries less contrast. A white source color gives back the underlying color's complement; a black source color gives back the underlying color itself.

Subtract

This removes the source color from the underlying color. With a black source color, the result is the underlying color. In 32-bpc projects, result color values may fall below 0.

Divide

This divides the underlying color by the source color. With a white source color, the result is the underlying color. In 32-bpc projects, result color values may exceed 1.0.

Related: [Normal and dissolve blending modes](blending-mode-descriptions.md).
