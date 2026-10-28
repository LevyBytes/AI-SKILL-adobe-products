# Remove Color Matting effect

The Remove Color Matting effect strips color fringes (halos) off layers whose color channels are premultiplied. Halos tend to show up when a partially transparent area holds onto its original background color and then gets composited into a setting whose background color differs. Pair this effect with effects that produce transparency—keying effects, for instance—for tighter control over how partially transparent areas look. (See Alpha channel interpretation: premultiplied or straight.)

This effect works with 8-bpc, 16-bpc, and 32-bpc color.

Original (left), and with Remove Color Matting effect applied (right)

Set the new background color with Use Background Color. Working in 32-bpc color, switch off Clip HDR Values to let this effect put out color values beyond the 0.0-1.0 range.

The Remove Color Matting effect once went by the name Unmultiply effect. That former name points to how the effect operates by unpremultiplying color channels—undoing, in partially transparent areas, the background color that was premultiplied into the layer's color channels. This is not the same as what Knoll Unmult and other effects do when they build an alpha channel out of an image's color channels.
