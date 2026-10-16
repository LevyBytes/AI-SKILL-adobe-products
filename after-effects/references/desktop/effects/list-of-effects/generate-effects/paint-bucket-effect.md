# Paint Bucket effect

A nondestructive paint effect that floods an area with a solid color is what the Paint Bucket effect (once known as the Basic Fill effect) provides. It behaves a lot like the Paint Bucket tool over in Adobe Photoshop. Put it to work coloring cartoon-style outlined drawings or swapping out regions of color in an image.

Color depth of 8-bpc is supported by this effect.

Fill Point

The effect floods whatever area holds the Fill Point. That area is mapped by examining the pixels neighboring the Fill Point and growing the fill outward as matching pixels are added. How far the color spreads rides on the Tolerance setting together with the option you've chosen from the Fill Selector menu.

Fill Selector

Which values to act on:

Color & Alpha

The effect floods the fill area's RGB and alpha channels with the new color.

Straight Color

The effect floods only the fill area's RGB channels with the new color.

Transparency

The effect floods only the transparent regions near the fill point. The option works only if you place a fill point in a transparent area.

Opacity

The effect floods only the opaque regions near the fill point. The option works only if you place a fill point in an opaque area.

Alpha Channel

The effect floods either the opaque or the transparent regions across the whole image, decided by the alpha channel value where you set the fill point.

Tolerance

How far a pixel's color values may sit from the Fill Point color values and still count as a match. Raise it to widen the band of pixels the effect floods.

View Threshold

Reveals which pixels match — that is, which fall within the Tolerance value of the Fill Point pixel's color values. It's especially handy for hunting down leaks: a small gap lets the color spill over and fill areas you never meant to fill.

Stroke

How the effect handles the edges of the filled area:

Antialias

Anti-aliases the filled area's edges.

Feather

Gives the filled area a feathered edge. Larger Feather Softness values make the edge fade off more gradually.

Spread

Grows the fill color's area. The Spread Radius value tells how many pixels the fill color reaches past the fill area's edge.

Choke

Shrinks the fill color's area. The Spread Radius value tells how many pixels the fill color pulls back from the fill area's edge.

Stroke

Pens the fill in to just the border of the selected area. The Stroke Width value tells the stroke's width in pixels.

Color

The fill color.

Opacity

How opaque the filled area is.

Blending Mode

Which blending mode composites the effect's result over the original layer. Every one of these works like the blending modes in the Timeline panel, apart from Fill Only. Reach for Fill Only to display the fill by itself.

Note

When you stack several instances of Paint Bucket on one layer, take care not to set more than one to the Fill Only blending mode. Set more than one that way and only the first application of the effect shows.
