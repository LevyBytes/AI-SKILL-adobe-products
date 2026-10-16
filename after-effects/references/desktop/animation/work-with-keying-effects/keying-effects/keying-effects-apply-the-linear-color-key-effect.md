# Keying effects — Apply the Linear Color Key effect

Within the Effect Controls panel, the Linear Color Key effect puts up two thumbnail images: the one on the left stands for the untouched source image, and the one on the right reflects whatever view you've chosen from the View menu.

Three things are yours to tune—the key color, the matching tolerance, and the matching softness. Matching tolerance fixes how near a pixel has to come to the key color before it begins turning transparent, while matching softness governs how soft the edges run between the image and the key color.

There's also room to reapply this key so as to rescue a color the first pass turned transparent. Suppose you key out a medium-blue screen and lose some or all of a light-blue garment your subject has on: bring that light-blue back by laying down a second instance of the Linear Color Key and picking Keep Colors from the Key Operation menu.

Pick a layer to act as the source layer, then choose Effect > Keying > Linear Color Key.

In the Effect Controls panel, set the Key Operation menu to Key Colors.

From the Match Colors menu, pick a color space. The default RGB setting suits most situations; if one color space makes the subject tough to isolate, switch to another.

In the Effect Controls panel, set the View menu to Final Output. Whatever view you pick turns up in the right thumbnail and in the Composition panel. To inspect other results, switch to one of the alternate views:

Source Only

Presents the untouched image with no key in effect.

Matte Only

Presents the alpha channel matte; lean on this view to spot gaps in the transparency.

- Grab the Thumbnail eyedropper, then click a fitting spot in the Composition panel or on the original thumbnail image.
- Grab the Key Color eyedropper, then click a fitting spot in the Composition or Layer panel.
- For a live preview of how different colors would key, take the Key Color eyedropper, keep the Alt key (Windows) or Option key (macOS) held down, and glide the pointer across the Composition panel or original thumbnail image. Watch the Composition panel's image shift in transparency as the pointer passes over various colors or shades, and click once you've found the color.
- Click the Key Color swatch to draw a color from the specified color space; that color is what turns transparent.

As the eyedropper tools are used, the sliders shift along with them. Steps 6 and 7 cover working those sliders to refine the key. Should you want the eyedroppers active in the Layer panel, set that panel's View menu to Linear Color Key.

- Take the Plus (+) or Minus (-) eyedropper and click a color over in the left thumbnail image. Plus folds the picked color into the key color range, pushing up both the matching tolerance and the transparency; Minus pulls that color out of the range, easing the matching tolerance and the transparency back down.
- Drag the matching tolerance slider, where 0 leaves the whole image opaque and 100 renders all of it transparent.

Drag the Matching Softness slider to ease the matching tolerance by tapering its value. As a rule, settings below 20% give the best results.

Before you shut the Effect Controls panel, be sure the View menu is set to Final Output so that After Effects renders the transparency.
