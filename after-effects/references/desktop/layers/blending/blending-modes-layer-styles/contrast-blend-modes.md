# Contrast blend modes

Overlay

Depending on whether the underlying color falls above or below 50% gray, this either multiplies or screens the input channel values. Highlights and shadows in the underlying layer are kept intact.

Soft Light

Guided by the source color, this brightens or darkens the underlying layer's channel values, much as a softened spotlight aimed at that underlying layer would. Channel by channel: a source color above 50% gray lightens the result, as though dodged, while a source color below 50% gray darkens it, as though burned. Pure black or pure white in a layer turns it distinctly darker or lighter without ever reaching true black or white.

Hard Light

Keyed to the original source color, this multiplies or screens the input channel value — the look is that of a harsh spotlight trained on the layer. For each channel value, an underlying color above 50% gray lightens the layer as if screened, and an underlying color below 50% gray darkens it as if multiplied. It comes in handy for faking shadows on a layer.

Linear Light

Working from the underlying color, this dodges or burns by raising or lowering brightness. An underlying color above 50% gray brightens the layer, since brightness goes up; an underlying color below 50% gray darkens it, since brightness comes down.

Vivid Light

Working from the underlying color, this dodges or burns by raising or lowering contrast. An underlying color above 50% gray brightens the layer, since contrast drops; an underlying color below 50% gray darkens it, since contrast climbs.

Pin Light

Working from the underlying color, this swaps colors out. Where the underlying color sits above 50% gray, pixels darker than it are swapped while pixels lighter than it hold steady. Where the underlying color sits below 50% gray, pixels lighter than it are swapped while pixels darker than it hold steady.

Hard Mix

This sharpens the contrast of whatever underlying layer shows through beneath a mask on the source layer. How large that contrasted region is comes from the mask size, and where its center lands comes from the inverted source layer.

Related: [Normal and dissolve blending modes](blending-mode-descriptions.md).
