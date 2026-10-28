# Levels effect

Levels takes the span of incoming color or alpha-channel levels and stretches it across a fresh span of output levels, with the gamma value steering how those values spread out. Its behavior closely tracks the Levels adjustment over in Photoshop, and GPU-accelration keeps its rendering quick.

The Levels effect works with 8-bpc, 16-bpc, and 32-bpc color.

Original (left), and with effect applied (right)

Pick Alpha from the Channel menu and Levels turns into a matte tool: fully opaque or fully transparent stretches of a matte can be pushed to semitransparent, and semitransparent stretches can be driven to fully opaque or fully transparent. Since transparency rides on the single-channel alpha, this effect labels total transparency as black and total opacity as white.

Pair an Output Black Level of 0 with an Input Black Level above 0 to push a band of semitransparent areas all the way to transparent.

Pair an Output White Level of 1.0 with an Input White Level under 1.0 to push a band of semitransparent areas all the way to opaque.

Set an Output Black Level above 0 to lift a band of fully transparent areas up to semitransparent.

Set an Output White Level under 1.0 to ease a band of fully opaque areas down to semitransparent.

Note

The Levels (Individual Controls) effect behaves like Levels but opens up per-channel color editing, so you can hang expressions off single properties or animate one apart from the rest. (See Levels (Individual Controls) effect.)

Channel

Which channels get modified.

Histogram

Plots how many pixels carry each luminance value across the image. (See Color correction, color grading, and color adjustment.)

Tip: Clicking the histogram toggles between colorized histograms covering every color channel and a histogram for just the channel or channels you picked in the Channel menu.

Input Black and Output Black

Any input pixel whose luminance matches the Input Black value is reassigned the Output Black value as its new luminance. The upper left triangle beneath the histogram marks Input Black; the lower left triangle beneath it marks Output Black.

Input White and Output White

Any input pixel whose luminance matches the Input White value is reassigned the Output White value as its new luminance. The upper right triangle beneath the histogram marks Input White; the lower right triangle beneath it marks Output White.

Gamma

The power-curve exponent that sets how luminance values spread through the output. The middle triangle beneath the histogram marks Gamma.

Clip To Output Black and Clip To Output White

These settle what becomes of pixels whose luminance falls under the Input Black value or over the Input White value. With clipping on, anything below Input Black snaps to Output Black and anything above Input White snaps to Output White. With clipping off, the resulting values may dip beneath Output Black or climb past Output White, and Gamma still bears on them.
