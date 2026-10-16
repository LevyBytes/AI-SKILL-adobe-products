# Blending options for layer styles

Every layer style carries its own blending mode that decides how it meets the underlying layers. Whether that underlying layer takes in the very layer the style is applied to depends on the case. Take a drop shadow: it doesn't blend with its own layer, since the shadow sits behind it — but an inner shadow does blend with the layer it's applied to.

Layer styles sort into two kinds: interior and exterior. Interior styles act on the opaque pixels of the layer they belong to; this group takes in Inner Glow, Inner Shadow, Color Overlay, Gradient Overlay, Satin, and Bevel And Emboss. Exterior styles leave their own layer's pixels alone and engage only the underlying layers; Outer Glow and Drop Shadow fall here.

Switch Blend Interior Styles As Group to On and the interior layer styles adopt the layer's blending mode.

Change a layer's Opacity property and you shift the opacity of the layer's contents along with all its layer styles. Change the Fill Opacity property in the Blending Options property group instead and the layer styles' opacity stays put. So with the Drop Shadow style on a text layer, dropping Fill Opacity to 0 makes the text vanish while the drop shadow stays on screen.

Turn to the Blend Ranges From Source option when you want the advanced blending options saved in the Photoshop file — the ones that decide which blending operations to run based on the input layer's color characteristics — to take effect.
