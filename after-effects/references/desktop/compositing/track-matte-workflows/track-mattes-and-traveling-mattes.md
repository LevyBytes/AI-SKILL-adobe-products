# Track Mattes and Traveling Mattes

Search Last updated on Oct 14, 2024

A Track Matte is what you create when one layer should be visible only through holes that another layer defines.

Any of a still image, a video, a graphic, text, or a shape can act as a Track Matte. To take one example, putting a text layer to work as a Track Matte over a video layer makes the video appear only within the shapes the text characters form. Transparency for the underlying layer—the fill layer—comes from particular channels of the Track Matte layer, namely its alpha channel or the luminance of its pixels.

Pulling a layer's transparency from the luminance of the Track Matte's pixels helps when you're building a Track Matte out of a layer that has no alpha channel, or one brought in from an application unable to make alpha channels. With both kinds—alpha channel mattes and luminance mattes—the higher a pixel's value, the more transparent it is. A high-contrast matte is the norm, leaving regions fully transparent or fully opaque. Save the in-between shades for spots where you intend partial or gradual transparency, like along a soft edge.

Animating the position or any other transformation of the Track Matte layer turns it into a traveling matte. When you'd like the Track Matte and fill layers animated with matching settings, precomposing the two is worth considering.
