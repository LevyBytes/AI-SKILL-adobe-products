# Displacement Map effect

A layer is warped by the Displacement Map effect, which shifts pixels both horizontally and vertically according to the color values found in the control layer named by the Displacement Map Layer property. Just how the distortion turns out swings widely with the control layer and the options you pick.

Supported color depths: 8-bpc, 16-bpc, and 32-bpc.

Original (upper-left), displacement map (lower-left), and displaced image (lower-right)

It's the displacement map's color values that drive the displacement. Those values span 0 to 255, and each one is remapped onto a scale running from -1 to 1. Multiplying that remapped value by the maximum displacement you set yields the displacement amount. Maximum negative displacement (–1 \* maximum displacement) comes from a color value of 0, while 255 gives maximum positive displacement and 128 leaves things unmoved.

When the effect reads the control layer named by Displacement Map Layer, it ignores any effects or masks on it. Precompose that layer first if you want its effects included. Should the control layer differ in size from the layer the effect sits on, it gets centered, stretched, or tiled per the Displacement Map Behavior setting.

Turning on Expand Output lets the effect's output spill past the original layer's edges. Turn on Wrap Pixels Around and pixels shoved outside the original layer boundaries get copied to the layer's opposite side — whatever runs off the right edge reappears on the left, and so forth.
