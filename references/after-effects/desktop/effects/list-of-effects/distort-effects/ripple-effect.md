# Ripple effect

The Ripple effect makes ripples seem to spread across a chosen layer, radiating outward from a center point as concentric circles — much like tossing a stone into a pond. You can also direct the ripples to move inward toward that center point.

To animate ripples at a steady speed, use the Wave Speed control, which needs no keyframes to animate. For ripples that move at changing speeds, build keyframes for the Ripple Phase control instead.

This effect works with 8-bpc and 16-bpc color.

Radius

Governs how far the ripples spread from the center point. Stated as a percentage of the overall image size, the Radius value scales accordingly. When the ripple's center matches the layer's center and the radius reads 100, the ripples reach all the way to the image edge. At a value of 0, no ripples appear. Just as with ripples on water, the layer's ripples shrink the farther they spread from the center.

Note

For a single-wave ripple, set Radius to 100, Wave Width somewhere from 90 to 100, and Wave Height however you like.

Center Of Ripple

Sets where the center of the effect sits.

Type Of Conversion

Sets how the ripples get made. Asymmetric yields ripples that look more realistic; asymmetric ripples carry lateral motion and generate more distortion. Symmetric yields motion heading only outward from the center point, and symmetric ripples generate less distortion.

Wave Speed

Fixes the speed at which the ripples spread outward from the center point. Once you set a wave speed, the ripples animate on their own at a steady rate (no keyframes) over the time range. A negative value drives the ripples inward toward the center, and a value of 0 yields no movement. To make wave speed vary over time, leave this control at 0 and then build a keyframe for the layer's Ripple Phase property.

Wave Width

Sets the gap, in pixels, between wave peaks. Higher values yield long, rolling ripples, while low values yield many small ripples.

Wave Height

Sets how tall the ripple wave stands. Taller waves yield greater distortion.

Ripple Phase

Sets the spot along the waveform where a wave cycle starts. The default of 0° begins the wave at the midpoint of its downward slope; 90° begins it at the lowest point in the trough; 180° begins it at the midpoint of the upward slope, and so on.
