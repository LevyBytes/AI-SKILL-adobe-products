# Selective Color effect

Scanners and separation software rely on selective color correction to retune how much process color sits in each primary color component of an image. Targeting one primary color at a time, you can change its process-color amount while the rest of the primaries stay put. Say you wanted to pull cyan out of an image's green component yet keep the cyan in its blue component intact — selective color correction does exactly that.

Note

After Effects ships the Selective Color effect chiefly so documents brought in from Photoshop that use the Selective Color adjustment layer type keep their fidelity.

Although CMYK colors drive the way Selective Color tweaks an image, it works perfectly well on RGB images.

This effect works with 8-bpc and 16-bpc color.

Pick one of two settings under the Method menu:

Relative

Shifts whatever cyan, magenta, yellow, or black is already present by a percentage of the whole. Take a pixel that's 50% magenta: add 10% and you tack on 5% magenta (since 10% of 50% is 5%), landing at 55% magenta total. (Pure specular white, having no color components, can't be touched by this option.)

Absolute

Tunes the color using absolute values. Take that same 50%-magenta pixel: add 10% and the magenta ink lands squarely at 60% total.

Note

How much a color gets adjusted depends on its proximity to one of the entries in the Colors menu. Sitting halfway between white and pure magenta, 50% magenta picks up a balanced blend of the corrections set for those two colors.

Whichever color you pick in the Colors menu is the one that gets affected.

For an alternate way to adjust colors, the Details property group mirrors the properties laid out in the Timeline panel.
