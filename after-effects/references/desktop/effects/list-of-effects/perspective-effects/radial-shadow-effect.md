# Radial Shadow effect

Rather than relying on an infinite light source the way the Drop Shadow effect does, the Radial Shadow effect builds a shadow from a point light source positioned over whichever layer it sits on. Because the shadow originates from the source layer's alpha channel, that layer's color can tint the shadow as light travels through its semitransparent regions. Use the effect when you want a 3D layer to look as though it throws a shadow down onto a 2D layer.

This effect works with 8-bpc color.

Original (left), and with effect applied (right)

Shadow Color

The color of the shadow.

Note

Pick Glass Edges from the Render control menu and the layer's own colors can take precedence over this option. The Render and Color Influence controls cover this in more detail.

Opacity

How opaque the shadow renders.

Light Source

Where the point light source sits.

Note

For a shadow that lines up with another effect's light source, copy position keyframes or expressions off a control point belonging to that effect (Lens Flare, say) and paste them here.

Projection Distance

How far the layer sits from the surface catching the shadow. Raise this value and the shadow grows larger.

Softness

How soft a shadow's edges come out.

Render

Which kind of shadow:

The shadow color edges closer to the layer's own colors as the layer's pixels grow more transparent. Glass Edge barely does anything when a layer holds no semitransparent pixels.

Note

Choose Glass Edge and anti-aliased edges will bring color into a shadow's edge even on a fully opaque layer. A layer's colors come through along those anti-aliased edges while the Shadow Color fills the shadow's middle.

Regular

Builds a shadow off the Shadow Color and Opacity values without regard to any semitransparent pixels in the layer. (Pick Regular and the Color Influence control switches off.)

Glass Edge

Builds a colored shadow off the layer's color and opacity. When the layer holds semitransparent pixels, the shadow draws on both the layer's color and its transparency. The look this gives is, for instance, sunlight passing through stained glass.

Color Influence

How much of the layer's color values carry into the shadow. Set to 100%, the shadow picks up the color of whatever semitransparent pixels the layer holds. Color Influence barely matters when the layer has no semitransparent pixels, leaving the Shadow Color value to set the shadow's color. Lower the Color Influence value to mix the layer's shadow colors together with the Shadow Color. Raise Color Influence and the Shadow Color loses sway.

Shadow Only

Turn on to render the shadow by itself.

Resize Layer

Turn on so the shadow can spill past the layer's original boundaries.
