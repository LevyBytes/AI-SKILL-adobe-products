# Blend effect

Using one of five modes, the Blend effect combines two layers.

Blending modes let you combine layers more readily and faster, yet they can't be animated. What the Blend effect offers in exchange is that it can be animated. (See Blending modes and layer styles.)

This effect works with 8-bpc and 16-bpc color.

Blend With Layer

The layer to blend with (the secondary or control layer).

Note

When you want a layer to serve as the Blend effect's control layer without it appearing elsewhere in the composition, switch off that control layer's Video switch. (See Layer switches and columns in the Timeline panel.)

Mode

Blending mode:

Color Only tints each pixel of the original image according to the matching pixel's color in the secondary image.

Tint Only works much like Color Only, except it tints the original image's pixels only when they already carry color.

Darken Only darkens any pixel in the original image that comes out lighter than its counterpart in the secondary image.

Lighten Only lightens any pixel in the original image that comes out darker than its counterpart in the secondary image.

Crossfade fades the original image out at the same time the secondary image fades in.

Note

Animating the Opacity property of one layer stacked over another lets you build a crossfade without any effect at all. That approach falls apart, though, when the frontmost layer carries any transparent regions (which let the layer below peek through even at full opacity). Even with transparent regions on both layers, the Crossfade mode delivers a clean crossfade between the two.

Blend With Original

The transparency of the effect. The effect's result gets blended into the original image, with the effect result laid on top. Raise this value and the effect touches the layer less. As an example, the effect leaves no visible result on the layer at 100%; at 0% the original image stays hidden.

If Layer Sizes Differ

Sets where the control layer goes. The layer's quality setting touches Blend only when Stretch To Fit is on and the layers differ in size. At Best quality the stretching comes out far smoother.
