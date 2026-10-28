# Drop Shadow effect

What the Drop Shadow effect does is place a shadow behind the layer. The layer's alpha channel is what shapes that shadow.

Apply a drop shadow to a layer and a soft-edged silhouette of the layer's alpha channel shows up behind it, as though a shadow were thrown onto the background or the objects beneath. GPU-acceleration drives the effect for quicker rendering.

A shadow reaching past the layer's edges is something Drop Shadow can produce. Both the shadow's subpixel placement and how smooth its soft edges turn out depend on the layer's quality setting.

There are situations where you'll favor the Drop Shadow layer style over the Drop Shadow effect. (See Layer styles.)

This effect works in 32-bit color.

Original (left), and with effect applied (right)

To render the shadow without the image, select Shadow Only.

Note

When a layer rotates, apply a drop shadow to it by first rotating the layer with the Transform effect and then running the Drop Shadow effect. Nesting, precomposing, or an adjustment layer will also get you this result. Skip every one of these approaches and the shadow ends up rotating along with the layer.
