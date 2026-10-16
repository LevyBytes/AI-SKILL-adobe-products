# Vegas path segments and stroke appearance

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

Related: [Vegas effect and image contours](vegas-effect.md).
