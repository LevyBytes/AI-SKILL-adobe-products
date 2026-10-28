# Grid effect

Reach for the Grid effect to build a customizable grid. Render that grid as a solid color or as a mask in the source layer's alpha channel. It's handy for spinning up design elements and mattes inside which you can run other effects.

Color depth of 8-bpc is supported by this effect.

Note

Pair Grid with the Advanced Lightning effect to make lightning forks trace a grid pattern.

Anchor

Where the grid pattern originates. Shift this point and the pattern offsets.

Size From

How each rectangle's dimensions get worked out:

Corner Point

Each rectangle takes the dimensions of the rectangle whose opposite corners are fixed by the Anchor and Corner points.

Width Slider

A rectangle's height and width both equal the Width value, so the rectangles come out square.

Width & Height Sliders

A rectangle's height equals the Height value, and its width equals the Width value.

Border

How thick the grid lines run. Set it to 0 and the grid vanishes.

note: Anti-aliasing along the grid borders can make the visible thickness fluctuate.

Feather

How soft the grid is.

Invert Grid

Swaps the grid's transparent and opaque regions.

Color

The grid's color.

Opacity

How opaque the grid is.

Blending Mode

Which blending mode composites the grid over the original layer. These behave just like the ones in the Timeline panel, apart from the default None mode, which renders only the grid.
