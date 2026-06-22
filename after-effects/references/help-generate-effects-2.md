# Generate Effects (part 2)

> Adobe After Effects reference. Original prose; identifiers preserved verbatim.

## Use tools with the Fractal effect

With the Fractal effect selected in the Effect Controls panel, After Effects tools behave as described below. (Don't want the Fractal tools live? Deselect the effect before you reach for tools.)

- Grab the Selection tool and click while holding Alt (Windows) or Option (Mac OS). Should the path stray beyond the bounded rectangle (-2, -2, 2, 2), it has run off to infinity, and the starting-point color then reflects how many line segments it took to get there. Should the path stop inside the rectangle, it comes out black.
- Reach for the Zoom tool to move in or out on a given point, or hold Ctrl (Windows) or Command (Mac OS), click and hold the Magnifying tool on the image's center, and travel outward from there. To go straight in, hold at the center; to head up, drag up slightly and then dart back to the center.
- Reach for the Hand tool to pan the image. Hold Ctrl (Windows) or Command (Mac OS) to pan the opposite fractal. While viewing the Julia set, for example, hold Ctrl (Windows) or Command (Mac OS) to pan the Mandelbrot set and watch how the Julia set leans on the Mandelbrot set's center point.
- Reach for the arrow keys to nudge the center point by 1 pixel. Hold Shift along with an arrow key to move the point by 10 pixels. Hold Ctrl (Windows) or Command (Mac OS) along with an arrow key to nudge the opposite set's center point.

## Gradient Ramp effect

A color gradient is what the Gradient Ramp effect builds. You can make linear or radial ramps and shift the ramp's position and colors across time. Mark the start and end positions with the Start Of Ramp and End Of Ramp properties. Lean on the Ramp Scatter control to scatter the ramp colors and wipe out banding.

Color depths of 8-bpc, 16-bpc, and 32-bpc are supported by this effect.

Note

Ramps frequently don't broadcast cleanly; harsh banding shows up because the broadcast chrominance signal lacks the resolution to render the ramp smoothly. The Ramp Scatter control dithers the ramp colors, clearing away the banding the eye would otherwise catch.

## Grid effect

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

## Lens Flare effect

The refraction you get from aiming a bright light into the camera lens is what the Lens Flare effect mimics. Set where the flare's center sits by clicking anywhere within the image thumbnail or by dragging its cross hair.

Color depth of 8-bpc is supported by this effect.

Single lens flare (lower-left) and multiple lens flares (lower-right)

Single lens flare (lower-left) and multiple lens flares (lower-right)

## Paint Bucket effect

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

## Radio Waves effect

Radiating waves emanate from an effect control point — stationary or animated — when you apply the Radio Waves effect. Reach for it to build pond ripples, sound waves, or elaborate geometric patterns. The Reflection control lets the shapes ricochet off the layer's edges. Radio Waves is also handy for producing convincing wave displacement maps that pair nicely with the Caustics effect.

In a demonstration, Satya animates the mask that supplies the radio wave shape. He shows as well that pushing Frequency very high — paired with thoughtfully tuned Fade-in Time and Fade-out Time values — yields smooth, organic contours instead of separate discrete waves.

This effect works with 8-bpc color.

Polygon wave type with square stroke profile (lower-left), and Image Contour wave type with Sine stroke profile (lower-right)

Polygon wave type with square stroke profile (lower-left), and Image Contour wave type with Sine stroke profile (lower-right)

Producer Point

Where the waves originate.

Parameters Are Set At

Governs whether individual waves can have animated parameters. With Birth, every wave holds onto the same parameter settings as time passes. With Each Frame, the waves shift right along with the changing parameters. Say you build a star wave whose rotation property is animated: pick Birth to stagger each star behind the one before it, forming a twisting tunnel, or pick Each Frame so all stars spin together as the rotation property updates.

Render Quality

Sets how good the output looks. To produce smooth, anti-aliased shapes, Radio Waves renders the shapes at high resolution and then scales them back down through oversampling. Building a 100x100-pixel image, for instance, might mean generating a 400x400-pixel image first and shrinking it with 4x oversampling. The trade-off for that high quality is lengthy render times. Only Best quality mode supports this option.

Wave Type

The basis for the wave shape.

Polygon

Which polygon serves as the wave shape. You reach these controls when Polygon is selected for Wave Type.

Sides

A triangle comes from three sides, a square from four, and so on. Push the Size value past 64 and you get a smooth circle. Another route to a near-circle: set Sides to 3, Curve Size to 1, and Curvyness to roughly 0.62.

Curve Size

Sets the portion of each side that curves at every point.

Curvyness

Sets how pronounced the curve becomes at each point of the wave.

Star

Turns the polygon into a star shape. Adjust the number of sides to change how many points the star has.

Star Depth

Shapes a star's angles by setting the gap between its inner points and its center.

Mask

The mask that builds a wave. You reach this control by picking Mask from the Wave Type pop-up menu.

## Image Contour controls

Choosing Image Contours for Wave Type lets you build the wave shape from an image's contours instead.

Source Layer

Which layer feeds the image-contour creation. Pick an animated layer to throw off moving shapes. Good sources include a crisp outline, a high-contrast grayscale layer, or an alpha channel. Edges are detected by the Radio Waves effect, which turns the sources into outlines.

Source Center

Sets where the shape's center sits relative to the source layer. Isolate a shape sitting in the frame's left half, for instance, and by default it radiates leftward — but the source center can be repositioned anywhere on the layer.

Value Channel

Which color attributes of the source layer establish the image contours.

Invert Input

Flips whichever value channel option you picked.

Value Threshold

Sets the threshold applied to the chosen value channel. It fixes the percentage value below or above which everything maps to either white or black. The wave's shape can shift dramatically depending on this control.

Pre-Blur

Smooths the value channel before the value threshold gets sampled. Working with a high-contrast image such as white on black, and wanting the wave to hug the edges tightly, drop this option to 0.

Tolerance

Sets how closely the wave hugs the layer. Sharp corners come from a high setting; a low value leaves the wave shape more vulnerable to noise.

Contour

Picks which shape in the source layer becomes the emitted wave. Contour numbers the shapes by their position in the frame, going top to bottom and left to right. Number 1 is the shape in the upper-left corner.

## Wave Motion controls

How the wave streams out from the center point is governed by the Wave Motion controls.

Frequency

Sets how many waves stream out of the producer point each second.

Expansion

Sets how fast a wave travels away from the producer point after birth. The per-second wave count is left untouched by this option.

Orientation

Sets the shape's rotation at birth about its center point. Animate that rotation with the Spin control.

Direction

Sets a wave's starting direction whenever Velocity exceeds 0. Particles leave the producer point in an expanding radial pattern by default.

Velocity

Sets how fast the wave moves in the direction you specified.

Spin

Governs how a shape keeps rotating after birth.

Lifespan (sec)

Sets how long, in seconds, the wave persists — fade-in and fade-out times included.

Tip: Reach for the Fade Out Time control so waves don't vanish abruptly when their lifetime runs out.

Reflection

Sets whether waves rebound off the layer's edges and back into the scene. For building displacement maps to use as water ripples, this option works well.

## Stroke controls

How a wave's stroke looks is set by the Stroke controls.

Profile

Governs how the shape-defining stroke appears. As the wave radiates from the effect point, the shape's outline is animated. Stroke quality is treated as a 3D wave type.

Color

Sets the stroke's color.

Opacity

Sets the highest opacity the stroke can reach. Its real opacity weighs this setting alongside the Fade-in Time and Fade-out Time controls.

Fade-in Time

Sets how long the wave takes to fade into view. Measured in seconds, Fade-in Time starts at 0 opacity when the wave is born. With a Lifespan of 3 seconds and a Fade-in Time of 1 second, for example, the stroke is fully transparent at birth and climbs smoothly to full opacity by the 1-second mark.

Fade-out Time

Sets how long the wave takes to fade from view. Fade-out Time counts backward from the end of the Lifespan. Given a Lifespan of 3 seconds and a Fade-out Time of 1 second, the wave starts fading at 2 seconds. Should Fade-in Time plus Fade-out Time exceed the Lifespan value, the point where the two fades meet is computed so the wave never goes fully transparent. And if either Fade-in Time or Fade-out Time runs longer than the Lifespan, that figure is clipped down to match the Lifespan.

Start Width

Sets the shape's width at birth. End Width sets the shape's width at the close of its lifespan.

## Scribble effect

By filling or stroking a closed mask, the Scribble effect mimics the look of hand-drawn artwork.

It can fake fills resembling marker, crosshatching, or textiles, for instance. The effect packs a mask with one zigzagging line that weaves back and forth across the path. Because of their geometry, some paths can't be filled by a single line; in those cases the Scribble effect splits the path into several simpler ones and fills each with a zigzagged stroke.

This effect works with 8-bpc color.

Masks (upper-left), Scribble applied to outside edges (lower-left), and Scribble applied to inside edges with Composite on Original (lower-right)

Masks (upper-left), Scribble applied to outside edges (lower-left), and Scribble applied to inside edges with Composite on Original (lower-right)

Scribble

Single Mask scribbles a specified mask on the layer; All Masks scribbles all masks on the layer; All Masks Using Modes combines the masks using their modes and then scribbles the resulting shape.

Mask

Which mask is used when Scribble is set to Single Mask.

Fill Type

Sets whether the fill draws inside the path or runs a scribble along it. Left Edge lays the fill along the path's left edge; Right Edge lays it along the right edge. Which edge is left and which is right depends on the direction the path was drawn. On masks with tight curves, the Left Edge or Right Edge fill types come out best when you keep the Edge Width below the curve's radius.

Edge Options

Settings for the scribble's edge when Fill Type is set to an edge.

Edge Width

Sets how wide the edge is.

End Cap

Sets how the scribble lines terminate. Round gives stroked lines semicircular ends; Butt gives them squared ends; Projecting gives them squared ends that reach half the line width past the line's end, so the line's weight spreads equally in every direction around it. This option becomes available only when Fill Type is set to Centered Edge.

Join

Sets how a scribble line's corners look. Round gives stroked lines rounded corners; Bevel gives them squared corners; Miter gives them pointed corners.

Miter Limit

Sets the point at which the effect trades a miter (pointed) join for a bevel (squared-off) join. Pick a value in the range from 1 to 500. At the default of 4, for instance, the effect drops from a miter to a bevel join once the point's length hits four times the stroke weight. A miter value of 1 yields a bevel join. This becomes available when Join is set to the Miter option.

Start/End Apply To

Sets how the effect's Start and End options in the Timeline panel take effect; Scribble Result acts on the scribble in its drawing order, while Mask Path traces the mask's path to make drawing in or out of the scribble flow more continuously.

Angle

Sets the angle of the scribbled stroke.

Stroke Width

Sets the stroke's width. Pick a value from 0.1 to 50.

Stroke Options

Set the scribbled line's curviness, spacing, and overlap.

Curviness

Sets how much curve appears at the end of each scribbled stroke. Pick a value between 0° and 100°.

Curviness Variation

Sets how much the curviness values may vary at each end point. Pick a value between 0% and 100%. At 0 the scribble gets sharp corners; at 100 the scribble turns loopy.

Spacing and Spacing Variation

How many pixels sit between lines and zigzags. Match this value to the stroke width and the lines land right beside one another.

Path Overlap

Sets whether the scribble stops at the path, inside it, or outside it. Use 0 to stop at the path, negative values to stop inside, and positive values to stop outside. Path Overlap Variation sets how far each stroke may stray from the Path Overlap value.

Start, End

Where the drawn stroke begins and ends, given as a percentage of the distance from the start of the whole stroke.

Fill Paths Sequentially

Becomes available when Scribble is set to All Masks. Selected, the start and end values cover the combined length of the scribbles across all masks. Cleared, the start and end values act on each mask's scribble on its own.

Wiggle Type

Sets an animation style: Static holds the scribble steady over time; Jumpy snaps from one scribble to the next; and Smooth eases from one scribble to the next.

Wiggles/Second

Sets how often a fresh scribble appears once you've set Wiggle Type to either Smooth or Jumpy.

Composite

On Transparent swaps the scribble in for the original image. On Original Image lays the scribble over the original image. Reveal Original Image lets the original image show through the scribble.

## Stroke effect

Around the path set by one or more masks, the Stroke effect builds a stroke or border. Stroke color, opacity, and spacing are yours to set, as are brush characteristics. Decide whether the stroke sits atop the image, atop a transparent image, or instead reveals the original alpha channel. For a path made in Illustrator, copy it and paste it into an After Effects layer.

This effect works with 8-bpc color.

On his Video Copilot website, Andrew Kramer offers a video tutorial showing the Stroke effect at work, revealing an image as though a hand were writing it onto a wall.

Over at the Layers Magazine website, Steve Holmes walks through building and preparing vines, swirls, and flourishes in Illustrator, then importing them into After Effects and using the Stroke effect to reveal and animate them.

Original (upper-left), with mask (lower-left), and with effect applied (lower-right)

Original (upper-left), with mask (lower-left), and with effect applied (lower-right)

Brush Hardness

Sets the stroke's edge quality, ranging between hard and soft.

Spacing

Sets the gap between stroke segments.

Paint Style

Sets whether the stroke lands on the original layer or on a transparent layer.

## Vegas effect

Running lights and other path-based pulse animations circle an object courtesy of the Vegas effect. Outline nearly anything, ring it with lights or longer pulses, then animate it so the lights appear to chase around the object.

This effect works with 8-bpc color.

Stroke

What the stroke draws from: Image Contours or Mask/Path.

Image Contours

Pick Image Contours from the Stroke menu and you then name the layer that supplies the image contours plus how the input layer is read.

Input Layer

The layer that supplies the image contours. High-contrast, grayscale layers, and alpha channels are easy to work with and perform well.

Invert Input

Flips the input layer before the stroke is built.

If Layer Sizes Differ

Sets how the layers are reconciled when the input layer's size differs from that of the layer Vegas is applied to. Center drops the input layer into the composition at its native size, centered. Stretch To Fit scales the input layer up to the layer Vegas is applied to.

Channel

Which color attribute of the input layer establishes the contours.

Threshold

The percentage value below or above which everything maps to either white or black. Where the edges that the effect strokes end up is largely decided by this property.

Pre-Blur

Smooths the input layer before the threshold is sampled. Drop this option to 0 when you have a high-contrast image and want the stroke to track the edges very tightly.

Tolerance

Sets how closely the stroke hugs the input layer. Sharp corners result from a high value, whereas low values can leave the stroking vulnerable to noise.

Render

Sets whether the effect hits one selected contour or every contour in the layer.

Selected Contour

Names the contour to use once Selected Contour is picked from the Render menu. Contours run from upper-left to lower-right in their numbering; the one with the highest point is number 1, the next highest is number 2, and so on.

Shorter Contours Have

Sets whether shorter contours get fewer segments. The effect splits each contour into the same segment count by default. Apply it to the letter R, for instance, and the outside contour may look fine at 32 segments while the inside contour comes out nearly solid. Select Fewer Segments to fix that.

Mask/Path

Which mask or path the stroke uses. Closed or open masks both work.

Segments

Sets how many segments form each stroked contour. Apply the effect to the word Vegas with Segments set to 10, for instance, and each letter's outline, along with the inner contours of e, g, and a, splits into 10 segments.

Length

Sets a segment's stroke length against its longest possible length. With Segments at 1, for example, a stroke's maximum length is one full lap around the object outline. With Segments at 3, a segment's maximum length is 1/3 of the whole outline, and so on.

Segment Distribution

Sets how the segments are spaced. Bunched packs the segments together like boxcars on a train: the shorter the segment length, the shorter the whole train runs. Even spreads the segments uniformly around the contour.

Rotation

Drives the segments around the contour. To fake running lights, for instance, begin with many segments set to 50% of their length, then animate Rotation to send the lights traveling around the shapes.

Random Phase

Sets a different stroke starting point for every contour. The effect strokes a contour starting at its highest on-screen point by default. When there's a tie, it begins at the leftmost of the highest points.

Blend Mode

Sets how the stroke is laid onto the layer. Transparent renders the effect on a transparent background. Over puts the stroke above the existing layer. Under puts the stroke beneath the existing layer. Stencil treats the stroke as an alpha channel mask, packing it with the original layer's pixels.

Color

Sets the stroke's color, except when Stencil is chosen for Blending Mode.

Width

Sets the stroke's width in pixels. Fractional values are allowed.

Hardness

Sets how crisp or soft the stroke's edges are. A value of 1 adds a slight blur; a value of 0.0 blurs the line until barely any solid color areas survive.

Start, End Opacity

Set the opacity at the stroke's start or end.

Mid-point Opacity

Sets the stroke midpoint's opacity. This control deals in relative opacity rather than absolute opacity. Set it to 0 and the opacity shifts smoothly from start point to end point, as though no midpoint existed at all.

Mid-point Position

Sets where the midpoint falls within a segment: lower values pull the midpoint toward the start; higher values push it toward the end. Use this control to slide the midpoint opacity away from the stroke's center.
