# Keying Effects (part 1)

> Adobe After Effects reference. Original prose; identifiers preserved verbatim.

Note

The native color keying effects shipped with After Effects do have their uses, but reach for Keylight first before falling back on them. Several of the older ones have since been replaced by more capable tools such as Keylight.

What the Color Difference Key effect does is build transparency from two opposite directions at once, splitting an image into a pair of mattes, Matte Partial A and Matte Partial B.

Transparency in Matte Partial B keys off the chosen key color, whereas Matte Partial A keys off the image regions free of a second, distinct color. Folding those two together yields a third matte—the alpha matte—through which the Color Difference Key arrives at crisp, well-defined transparency values.

Across every well-lit clip shot on a bluescreen or greenscreen, the Color Difference Key turns out high-quality keys, and it shines in particular on imagery holding semitransparent or fully transparent passages—glass, shadows, and drifting smoke among them.

Supported color depths are 8-bpc and 16-bpc.

Original

Original Matte Partial A

Matte Partial A Matte Partial B

Matte Partial B Alpha matte

Alpha matte Tip

For information about keying in general, including links to tutorials and other resources, refer to Keying introduction and resources.

## Keying effects — Use the Color Difference Key effect

Pick the layer you mean to render partly transparent, then choose Effect > Keying > Color Difference Key.

Over in the Effect Controls panel, set the View menu to Matte Corrected.

Want the source image, both partial mattes, and the final matte all on screen together? Set the View menu to [A, B, Matte] Corrected, Final.

The View menu offers further views worth getting to know.

Choose a key color that fits:

- For a bluescreen, just leave the default blue color in place.
  - Thumbnail eyedropper: choose it, then apply it to a fitting region of the Composition panel or the original thumbnail image.
  - Key Color eyedropper: choose it, then apply it to a fitting region of the Composition or Layer panel.
  - Key Color swatch: choose it, then pick a color out of the specified color space.

As the eyedropper tools are used, the sliders shift to follow them. Lean on those sliders to fine-tune the keying results.

Click the matte button so the final combined matte shows up in the matte thumbnail.

Grab the Black eyedropper and click the lightest black area inside the matte thumbnail to mark which regions go transparent. The thumbnail and the Composition panel both update their transparency values in response.

Grab the White eyedropper and click the darkest white area inside the matte thumbnail to mark which regions stay opaque. The thumbnail and the Composition panel both update their opaque values in response.

For the strongest key possible, drive the black and white regions as far apart as you can, so the image holds onto the widest range of gray tones.

From the Color Matching Accuracy menu, pick a matching accuracy. Stick with Faster unless your screen isn't a primary color (red, blue, or yellow); for screens like those, choose More Accurate, which lengthens render time but yields cleaner results.

Need still finer transparency control? Run through steps 5 and 6 again for either or both partial mattes. Click the Partial Matte B button or the Partial Matte A button to pick a partial matte, then repeat the steps.

Tune transparency on each partial matte and on the final matte by dragging any of the following sliders in the Matte Controls section:

Black sliders set the transparency level of each matte. The Black eyedropper can dial in those same levels.

White sliders set the opaque level of each matte. The White eyedropper can dial in those same levels.

Gamma sliders govern how tightly transparency values track a straight-line progression. Left at 1 (the default), that progression stays linear; any other value bends it into a nonlinear curve for specific tweaks or visual effects.

9. Use the matte controls sliders to set transparency on both the partial mattes and the final one.
   While you work on the individual mattes, use the View menu to weigh each matte against its unadjusted form:

Pick Uncorrected to see a matte stripped of any adjustments.

Pick Corrected to see a matte carrying every adjustment.

Before you shut the Effect Controls panel, set the View menu to Final Output. Unless Final Output is the active selection, After Effects won't render the transparency.

To clear reflected key color out of the image, run Spill Suppressor with Better For Color Accuracy. Should heavy color linger, apply the Simple Choker or Matte Choker effect.

## Keying effects — Color Key effect

Any pixel in the image that comes close to a chosen key color gets dropped by the Color Key effect. Only a layer's alpha channel is touched by this effect.

It runs in 8-bpc and 16-bpc color.

## Keying effects — Key out a single color with the Color Key effect

Pick the layer you mean to render partly transparent, then choose Effect > Obsolete > Color Key.

In the Effect Controls panel, there are two routes to setting a key color:

Click the Key Color swatch to bring up the Key Color dialog box and pick a color there.

Or click the eyedropper and then sample a color straight off the screen.

2. Name a key color by way of the Key Color swatch, or by grabbing the eyedropper and sampling a color on the screen.
   Drag the Color Tolerance slider to set how wide a band of color gets keyed out. Smaller values key a narrow band close to the key color; larger values open it up to a broader sweep of color.

Drag the Edge Thin slider to tune the width of the keyed region's border. Positive values grow the mask and widen the transparent zone, while negative values pull the mask in and narrow it.

Drag the Edge Feather slider to set how soft the edge looks. The softer the edge a higher value gives you, the longer it takes to render.

## Keying effects — Color Range effect

Note

The native color keying effects shipped with After Effects do have their uses, but reach for Keylight first before falling back on them. Several of the older ones have since been replaced by more capable tools such as Keylight.

By keying out a chosen band of colors, the Color Range effect generates transparency, working in your pick of the Lab, YUV, or RGB color space. It's the key to use on screens made up of more than one color, or on bluescreens and greenscreens that were lit unevenly and now hold varying shades of a single color.

Color depth supported here is 8-bpc.

Poorly lit greenscreen

Poorly lit greenscreen Background layer

Background layer Combined using Color Range Key

Combined using Color Range Key

## Keying effects — Use the Color Range effect

Pick the layer you mean to render partly transparent, then choose Effect > Keying > Color Range.

From the Color Space menu, pick Lab, YUV, or RGB. When one color space makes the subject hard to isolate, switch to another and see if it fares better.

Take the Key Color eyedropper and click within the matte thumbnail on the spot matching a color in the Composition panel that you want gone. As a rule, this opening color is whichever one blankets the most of the image.

Take the plus eyedropper and click elsewhere in the matte thumbnail to fold additional colors or shades into the range being keyed out.

5. Grab the minus eyedropper and click spots in the matte thumbnail to pull other colors or shades back out of the keyed-out range.
   Drag the Fuzziness slider to ease the boundary between the transparent and opaque regions.

The Min and Max controls and their sliders let you refine the color range you picked out with the plus and minus eyedroppers.

The first component of the chosen color space is governed by the L, Y, R sliders, the second by the a, U, G sliders, and the third by the b, V, B sliders.

Drag the Min sliders to refine where the color range starts, and drag the Max sliders to refine where it ends.

## Keying effects — Difference Matte effect

Working by comparison, the Difference Matte effect sets a source layer beside a difference layer, then keys out any source-layer pixel whose position and color both line up with the difference layer. The usual job is dropping a static background out from behind something in motion, which then lands on a fresh background. More often than not the difference layer is just a single frame of background footage, grabbed before the moving subject stepped into frame. That's why the Difference Matte effect performs best on scenes captured with a locked-off camera over a background that never stirs.

Both 8-bpc and 16-bpc color are supported.

Original image

Original image Background image

Background image New background image

New background image Final composite image

Final composite image

## Keying effects — Use the Difference Matte effect

1. Select a motion footage layer as the source layer.
   Within the source layer, track down a frame holding nothing but background, and save that all-background frame to an image file. (See the steps for rendering and exporting one frame out of a composition.)

That imported image now serves as the difference layer. See that it runs at least as long as the source layer does.

When the shot has no clean full-background frame to offer, you may still be able to piece one together by stitching fragments from several frames inside After Effects or Photoshop. The Clone Stamp tool, for one, lets you lift a patch of background from a given frame and brush that sample across part of the background in a different frame.

Hide the difference layer from view by toggling its Video switch in the Timeline panel.

With the original source layer still selected, choose Effect > Keying > Difference Matte.

In the Effect Controls panel, pick Final Output or Matte Only from the View menu.

Switch to the Matte Only view to hunt for gaps in the transparency. (More on plugging unwanted holes once the keying is done is covered elsewhere.)

From the Difference Layer menu, choose the background file.

When the difference layer's dimensions don't match the source layer, pick one of these options from the If Layer Sizes Differ menu:

Center

Drops the difference layer into the middle of the source layer. Where the difference layer comes up smaller than the source layer, black fills out the remainder.

Stretch To Fit

Scales the difference layer up or down to match the source layer's size. Expect background images to distort in the process.

Work the Matching Tolerance slider to govern how much transparency you get, gauged by how near the two layers' colors have to be. Lower values hold transparency back; higher values open it up.

Work the Matching Softness slider to ease the boundary between transparent and opaque regions. Higher values push matched pixels toward transparency without enlarging the pool of matching pixels.

Should stray pixels still cling to the matte, reach for the Blur Before Difference slider. By lightly blurring both layers ahead of the comparison, it tamps down noise.

That blur applies to the comparison alone and leaves the final output unblurred.

Before you shut the Effect Controls panel, be sure the View menu is set to Final Output so that After Effects renders the transparency.

## Keying effects — Extract effect

The Extract effect builds transparency by keying out a chosen span of brightness, reading from a histogram of whatever channel you specify. It's at its best generating transparency in shots taken against a black or white backdrop, or against a background that's dark or bright yet made up of more than one color.

Note

Although this effect's controls resemble those of the Extract effect found in Adobe Premiere, what it sets out to do and the results it gives differ.

You can run it in 8-bpc and 16-bpc color.

## Keying effects — Use the Extract effect

Inside the Effect Controls panel, the Extract effect lays out a histogram for whichever channel is set in the Channel menu. That histogram is a picture of the layer's brightness levels, charting how many pixels fall at each one. Read left to right, the darkest point anchors one end at 0 while the brightest caps the other at 255.

The histogram spans from the darkest tones on the left (value 0) to the lightest tones on the right (value 255).

The histogram spans from the darkest tones on the left (value 0) to the lightest tones on the right (value 255).

The transparency control bar sitting under the histogram is what you use to set which pixels turn transparent. Transparency follows from where the bar sits and how it's shaped against the histogram: pixels under the bar's coverage stay opaque, while those left uncovered are made transparent.

Pick the layer you mean to render partly transparent, then choose Effect > Keying > Extract.

When the goal is keying out bright or dark regions, set the Channel menu to Luminance. For visual effects, set it instead to Red, Green, Blue, or Alpha.

Pulling on the bar's top corner handles, upper right or upper left, stretches or shrinks it and so widens or tightens the transparency range. That same length also responds to the White Point and Black Point sliders, beyond which (above the white point, below the black point) pixels turn transparent.

The bottom corner handles, lower right and lower left, taper the bar when dragged. Taper its left side and you adjust how softly transparency falls across the darker parts of the image; taper its right side and the same goes for the lighter parts. Those softness amounts can equally be dialed through White Softness (lighter areas) and Black Softness (darker areas).

Tapering the control bar's edges calls for shortening the transparency bar beforehand.

- Slide the whole bar sideways, left or right, until it sits where you want beneath the histogram.

## Keying effects — Inner/Outer Key effect

Note

The native color keying effects shipped with After Effects do have their uses, but reach for Keylight first before falling back on them. Several of the older ones have since been replaced by more capable tools such as Keylight.

What the Inner/Outer Key effect does is pull a foreground object clear of its background.

Color depths of 8-bpc and 16-bpc are supported.

## Keying effects — Use the Inner/Outer Key effect

Working with Inner/Outer Key starts with drawing a mask that marks the inner and outer edges of the object you mean to isolate. That mask can stay fairly loose—there's no need for it to sit precisely along the object's edges.

Beyond lifting a soft-edged object off its background, Inner/Outer Key also reworks the colors hugging the border to wash out background color contamination. This decontamination step works out how much the background fed into each border pixel's color and then subtracts that share—getting rid of the halo that tends to show when a soft-edged object is matted over a new background.

Trace a single closed mask along the object's border, then choose that mask from the Foreground menu and leave the Background menu on None. Dial the Single Mask Highlight Radius to set how wide a border surrounds this mask. (Count on this approach only for objects whose edges are simple.)

Trace two closed masks—an inner one just inside the object and an outer one just outside it. See that every fuzzy or doubtful patch of the object sits between the two. From the Foreground menu pick the inner mask, and assign the outer one through the Background menu.

See that every mask has its mask mode set to None.

2. Nudge the masks around as you please until they land where the result looks best.
   When there's more than one object to pull out, or a hole to punch in an object, draw extra masks and choose them from the Additional Foreground and Additional Background menus. Say you're keying a person's hair whipping in the wind against blue sky: trace the inner mask inside the head, run the outer mask around the outer edge of the hair, then trace one more mask around the gap in the hair where sky shows through. Choosing that extra mask from the Additional Foreground menu pulls out the gap and clears the background image.

Lay down more open or closed masks to clean up other parts of the image, then choose them from the Cleanup Foreground or Cleanup Background menu. A Cleanup Foreground mask raises opacity along its path; a Cleanup Background mask lowers it. The Brush Radius and Brush Pressure options govern the size and density of each stroke.

The Background (outer) mask can itself be assigned as a Cleanup Background mask to scrub noise out of the image's background regions.

Use Edge Thin to set how much of the matte's border the key reaches. A positive value pushes the edge back from the transparent region and grows the transparent area; a negative value draws the edge toward the transparent region and enlarges the foreground area instead.

Raise the Edge Feather values to soften the keyed area's edges. The higher the Edge Feather, the longer the render.

Set the Edge Threshold, a gentle cutoff that strips away low-opacity pixels apt to stir up unwanted noise in the image background.

Turn on Invert Extraction to swap the foreground and background regions.

Use Blend With Original to set how much the extracted result mixes back in with the original image.

## Keying effects — Linear Color Key effect

What a linear key produces is a graded range of transparency spread over an image. It measures every pixel against the key color you name: a pixel whose color sits very near the key color goes fully transparent, pixels that match less closely turn only partly transparent, and pixels that don't match at all hold their opacity. The upshot is that the transparency values line up as a linear progression.

Drawing on RGB, hue, or chroma information, the Linear Color Key effect generates transparency from a key color you specify.

This effect works with 8-bpc, 16-bpc, and 32-bpc color.

## Keying effects — Apply the Linear Color Key effect

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

## Keying effects — Preserve a color after applying Linear Color Key

1. Over in the Effect Controls panel or Timeline panel, switch off every key or matte effect already in play by clearing the Effect option that sits to the left of each key or tool name. Clearing it brings the original image back into the Composition panel, giving you something to pick a preserve color from.
2. Choose Effect > Keying > Linear Color Key. Below the first group, a second set of Linear Color Key controls shows up in the Effect Controls panel.
3. With the Effect Controls panel open, set the Key Operation menu to Keep Colors.
4. Pick out the color you intend to hold onto.
5. Back in that first Linear Color Key instance, set the View menu in the Effect Controls panel to Final Output, then switch the other Linear Color Key instances on again to study the transparency. Getting the look you're after may take retuning colors or laying the key down a third time.

## Keying effects — Luma Key effect

Every part of a layer that falls at a chosen luminance or brightness gets keyed away by the Luma Key effect. Whatever quality setting the layer carries has no bearing on how Luma Key behaves.

Reach for this effect when the element you intend to matte sits at a brightness that diverges sharply from the brightness of its backdrop. Say you need a matte for musical notes printed on a white field: keying away the brighter tones leaves the dark notes as the sole opaque regions.

Color is handled here at 8-bpc and 16-bpc.

Original with white background

Original with white background Original with underlying layer

Original with underlying layer Original with white background is removed using Luma Key and composited over the underlying layer.

Original with white background is removed using Luma Key and composited over the underlying layer.

## Keying effects — Key out a luminance value with the Luma Key effect

Pick the layer you intend to render partly see-through, then choose Effect > Obsolete > Luma Key.

Choose a Key Type to pin down which range gets keyed away.

In the Effect Controls panel, move the Threshold slider to fix which luminance value the matte keys against.

Move the Tolerance slider to widen or narrow the band of values that gets keyed away. Smaller settings remove only a narrow band sitting close to the threshold; larger settings sweep away a broader span of values.

Move the Edge Thin slider to grow or shrink the border around the keyed region. Push it positive and the mask expands, enlarging the see-through area; push it negative and the mask contracts.

Move the Edge Feather slider to set how soft the edge becomes. Larger settings yield a gentler edge at the cost of longer render times.

## Keying effects — Unmult effect

Anywhere a layer carries a flat black or flat white backdrop, the Unmult effect keys those regions out so they turn transparent.

Turn to this effect when footage carries a flat black or white backdrop you want gone while the foreground keeps its colors and detail intact for compositing or other visual effects. As an example, it lets you lift an object filmed against black or white — paint splashes, smoke, and similar elements — and drop it cleanly into another scene.

Color is handled here at 8-bpc, 16-bpc, and 32-bpc.

Original with black background

Original with black background Unmult removes black from footage by applying a threshold (black level). Pixels below which pixels are made transparent, while those above remain opaque.

Unmult removes black from footage by applying a threshold (black level). Pixels below which pixels are made transparent, while those above remain opaque.
