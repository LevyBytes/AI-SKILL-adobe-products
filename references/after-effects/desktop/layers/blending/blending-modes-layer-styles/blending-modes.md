# Blending modes

Three terms recur throughout the descriptions that follow:

- Source color refers to the color belonging to the layer or paint stroke that carries the blending mode.
- Underlying color refers to the color produced by the composited layers sitting beneath that source layer or paint stroke, according to the stacking order in the Timeline panel.
- Result color refers to whatever the blend produces — the color of the resulting composite.

Every mode covered here works for blending one layer against another. A subset of them also applies to paint strokes, layer styles, and effects.

Should you want the underlying concepts and algorithms as Adobe has implemented these modes across several of its applications, consult section 7.2.4 of version 1.7 of the PDF reference on the Adobe website.

Eight groupings organize the blending-mode menu, each grouping reflecting how similar the modes' results are. You won't see these group names anywhere in the interface — dividing lines in the menu are all that set the categories apart.

Normal category

This holds Normal, Dissolve, and Dancing Dissolve. A pixel's result color stays independent of the underlying pixel's color, the one exception being when the source layer's Opacity drops below 100%. With the Dissolve modes, a portion of the source layer's pixels are rendered transparent.

Subtractive category

Here you'll find Darken, Multiply, Color Burn, Classic Color Burn, Linear Burn, and Darker Color. The general effect of these modes is to darken, and several do so by combining colors much as blending colored pigments in paint would.

Additive category

This grouping covers Add, Lighten, Screen, Color Dodge, Classic Color Dodge, Linear Dodge, and Lighter Color. Their general effect is to lighten, and a number of them combine colors the way mixing projected light does.

Complex category

Included here are Overlay, Soft Light, Hard Light, Linear Light, Vivid Light, Pin Light, and Hard Mix. What each of these modes does to the source and underlying colors changes according to whether either color sits above or below 50% gray.

Difference category

This holds Difference, Classic Difference, Exclusion, Subtract, and Divide. Each derives its colors from how far apart the source color's values and the underlying color's values are.

HSL category

Hue, Saturation, Color, and Luminosity belong here. These modes carry over one or more pieces of a color's HSL makeup — hue, saturation, and luminosity — from the underlying color into the result.

Matte category

This grouping contains Stencil Alpha, Stencil Luma, Silhouette Alpha, and Silhouette Luma. In effect, each turns the source layer into a matte governing all the layers below it.

A stencil or silhouette mode draws on either a layer's alpha channel or its luma values to act on the alpha channel of every layer underneath. That's unlike a track matte, whose reach is limited to a single layer. Because stencil modes cut clear through all layers, you might, for instance, reveal several layers through the stencil layer's alpha channel. Silhouette modes instead mask out every layer beneath the one carrying the mode, letting you punch a single hole through many layers at once. Should you want to stop the silhouette and stencil modes from cutting or blocking everything below, precompose the layers meant to be affected and nest them within your composition.

Stencil reveals every layer beneath the stencil layer through the shape of that stencil layer's alpha channel.

Silhouette punches a hole through all the layers sitting below the silhouette layer.

Utility category

The two here are Alpha Add and Luminescent Premul. Both handle specialized utility jobs.
