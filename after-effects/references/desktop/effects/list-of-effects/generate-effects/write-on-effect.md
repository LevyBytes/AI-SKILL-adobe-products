# Write-on effect

Strokes are animated onto a layer by the Write-on effect. You might, for instance, mimic the act of hand-writing cursive text or signatures.

note: One handy route to animating Brush Position: have Motion Sketch lay down Position keyframes on a fresh solid layer, then tie the Brush Position property to that solid layer's Position property through an expression. (See Sketch a motion path with Motion Sketch and Add, edit, and remove expressions.)

This effect works with 8-bpc color.

There are other ways to animate paint strokes and text, too. Text, for example, can be animated with the type tools and text animators, and a paint stroke laid down with a paint tool can be animated. A Write-on Duration setting is available on paint strokes, which you can use to get results much like the Write-on effect. For a comparable outcome, you can also animate shape paths via the Trim Paths operation. (See Animating text, Animate and edit paint strokes, and Shape attributes, paint operations, and path operations for shape layers.)

Brush Position

Where the brush sits. Animate this property to draw a stroke.

Stroke Length (secs)

How long each brush mark lasts, in seconds. At 0, the brush mark lasts indefinitely. A single, constant, nonzero value gives the stroke a snakelike motion. Animate this value to make the stroke grow and shrink.

Brush Spacing (secs)

The gap in time, in seconds, between brush marks. Smaller values yield smoother paint strokes but cost more render time.

Paint Time Properties and Brush Time Properties

Sets whether paint properties and brush properties apply to each brush mark or to the whole stroke. Pick None to push the values at each moment onto every brush mark in the stroke. Pick a property name and each brush mark holds that property's value from the moment the mark was drawn. Choose Color, for instance, and every brush mark keeps the color that the Color value held when the mark was drawn.

Paint Style

How the paint stroke meets the original image:

On Original Image

The paint stroke sits over the original image.

On Transparent

The paint stroke sits over transparency, and the original image stays hidden.

Reveal Original Image

The paint stroke uncovers the original image.
