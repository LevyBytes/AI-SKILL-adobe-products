# Compositing Transparency Overview Resources, Alpha Channels Masks Mattes, Track Mattes And Traveling Mattes

> Adobe After Effects reference. Original prose; identifiers preserved verbatim.

## Overview

Covers: Compositing and transparency overview and resources; Alpha channels and masks; Track Mattes and Traveling Mattes.

## Compositing and transparency overview and resources

Search Last updated on Apr 30, 2026

### Learn how to composite transparent layers in Adobe After Effects using alpha channels, blending modes, and mattes for precise results.

Building a composite from several images means rendering portions of one or more of them transparent, letting the images underneath come through. To carve transparent portions out of a layer, After Effects hands you a choice of features, including these:

Roto Brush and Refine Edge tools in CC

Masks and Rotoscoping

Mattes

Painting on the alpha channel

The Preserve Underlying Transparency layer option

Keying effects

When you want a whole layer evenly transparent or semi-transparent, adjust its Opacity property.

Compositing layers together doesn't require touching the transparency of the layers themselves, either. Blending modes or certain Channel effects, for instance, let you merge image data drawn from several layers into one composite.

Bundled with After Effects as well is the mocha shape for After Effects (mocha shape AE) plug-in, which turns paths out of mocha-AE into After Effects mattes.

For a great many compositing jobs — defining transparent regions with its selection and painting tools among them — Adobe Photoshop shines. Pairing Adobe Photoshop with After Effects gives you peak efficiency and the strongest results on compositing work.

## Alpha channels and masks

Search Last updated on Nov 13, 2025

After Effects holds color data across three channels: red (R), green (G), and blue (B). On top of those, an image may carry a hidden fourth channel — the alpha channel — that stores transparency data. An image like that is sometimes called an RGBA image, signaling the presence of an alpha channel.

Channels at a glance.

A. Separated color channels B. Alpha channel represented as a grayscale image C. Composite using all four channels with a background showing through transparent areas

Channels at a glance.

Plenty of file formats accommodate an alpha channel, Adobe Photoshop, ElectricImage, FLV, TGA, TIFF, EPS, PDF, and Adobe Illustrator among them. An alpha channel can ride along in AVI and QuickTime too (saved at a bit depth of Millions Of Colors+), hinging on which codec (encoder) produced the images held in those containers. With Adobe Illustrator EPS and PDF files, empty areas get turned into an alpha channel by After Effects on their own.

While you set the color depth for an output image, that plus sign (as in Millions Of Colors+) flags an alpha channel. By the same token, opting to output at 32 bits per pixel works out to 8 bits per channel across each of four channels: RGBA.

Certain programs can tuck several alpha channels into a single image, yet After Effects reads only the fourth channel as an alpha channel.

Note

Strictly speaking, the term alpha channel points to the fourth (A) channel in an RGBA image file, whether or not that channel actually carries transparency data. Yet because that fourth channel so frequently carries transparency data, the words alpha and transparency have drifted into near-interchangeable use. Worth keeping in mind, though, is that the link is arbitrary. Certain formats may route transparency data through other channels, and others may put the fourth channel to some use unrelated to transparency.

To build an alpha channel out of a layer's dark regions, you can turn to the Knoll Unmult plug-in. That suits a layer carrying a light effect — a lens flare or fire, say — that you'd like composited over another layer. For information, see the Red Giant Software website.

Viewing an alpha channel in the Composition panel, you'll find white standing for full opacity, black for full transparency, and grays for partial transparency.

A matte is a layer — or any one of its channels — that marks out the transparent regions of itself or of another layer. Opaque regions are set by white, transparent ones by black. Though an alpha channel often serves as a matte, you can pick a different matte when some other channel or layer pins down the intended transparency better than the alpha channel does, or when the source image carries no alpha channel at all.

### About masks

Within After Effects, a mask is a path pressed into service as a parameter that alters layer attributes, effects, and properties. Most often a mask is used to alter a layer's alpha channel, which governs how transparent the layer is at each pixel. Another frequent role for a mask is serving as a path along which to animate text.

Dig deeper into how paths are handled in After Effects.

The default behavior for a drawn mask and the same mask inverted in After Effects.

A layer can gain transparent regions from closed-path masks. Open paths can't carve transparent regions into a layer, though they do serve well as parameters feeding an effect. Among the effects that accept either an open or a closed mask path as input are Stroke, Path Text, Audio Waveform, Audio Spectrum, and Vegas. Among those that take closed masks (but not open ones) as input are Fill, Smear, Reshape, Particle Playground, and Inner/Outer Key.

Every mask is tied to one particular layer. A single layer may hold any number of masks.

Common geometric shapes — polygons, ellipses, and stars among them — can be drawn as masks with the shape tools, or you can trace an arbitrary path using the Pen tool.

Drawing mask paths largely mirrors drawing shape paths on shape layers, though editing and interpolating mask paths brings a few extra capabilities. Expressions let you tie a mask path to a shape path, carrying the strengths of masks across into shape layers and the reverse as well. Read up on building shapes and masks, along with editing and animating both shape paths and mask paths.

Where a mask sits in the Timeline panel's stacking order shapes how it plays against other masks. You're free to drag a mask to a different spot inside the Masks property group in the Timeline panel.

How much sway a closed mask holds over the layer's alpha channel within the mask area is set by the Mask Opacity property for that mask. At a Mask Opacity value of 100%, the interior region is opaque. Beyond the mask, the area stays transparent at all times. To flip which side counts as inside and which as outside for a given mask, select Invert next to the mask name in the Timeline panel.

### Copy, cut, save, reuse, and delete masks

Masks carry over into other layers and compositions for reuse — a real time-saver with Bezier masks you've labored over. A project file keeps mask paths tucked inside a composition.

### Copy, cut, duplicate, or paste a mask

Note

To work on a mask path on its own — rather than the whole mask along with its other properties — select the Mask Path property. That matters all the more when you move mask paths over to shape paths, motion paths, and the like.

- Send selected masks to the clipboard, whether by copy or by cut, via Edit > Copy or Edit > Cut.
- Duplicate the masks you've selected through Edit > Duplicate.
- Drop a mask onto a layer by selecting that layer and choosing Edit > Paste. Where a mask is already selected, the paste overwrites it.

### Save a mask

Inside the Timeline panel for the composition that holds the layer and mask you mean to save, open up the layer along with its mask properties.

Take one of these routes:

- For an animated mask, pick out the mask keyframes you intend to keep.
- For a nonanimated mask, just pick the mask itself.

3. Copy the mask (or its keyframes), then paste it onto a fresh layer — a plain solid works fine for that layer.

Note

- Set up a project whose compositions exist purely to hold complex masks. To pull a mask out of another project later, import that project into the one you're in.
- Saving masks as animation presets is another option.

### Reuse a mask

1. Bring up the composition that holds the mask you'd like to reuse. Should that mask live in another project, import the project first, then open the composition it sits in.
   In the Timeline panel, open up the layer and mask properties for the mask.

2. Pick the mask or its keyframes.
   Copy the mask (or keyframes), then paste it onto whichever layer is to receive the mask.

### Delete masks

- For a single mask, pick it out in the Timeline panel and hit Delete.
- To clear every mask, pick the layer whose masks you want gone and choose Layer > Masks > Remove All Masks.

### Control mask path color

So you can spot and handle masks easily, the Composition and Layer panels trace a mask path in color, and the Timeline panel echoes that color beside the mask's name. Out of the box, After Effects paints every mask yellow. For greater distinction between masks, change a mask's color by hand from the Timeline panel, or set After Effects to rotate through mask colors as new ones are created.

With the Use Contrasting Color For Mask Path preference (under Preferences > Appearance) switched on, After Effects studies the colors surrounding the spot where you begin drawing a mask. From there After Effects settles on a label color set apart from the colors in that vicinity. It steers clear of the previous mask's color as well.

### Change mask path color

In the Timeline panel, click the mask you want to recolor.

To the left of the mask's name sits a color swatch; click it, choose a different color, and confirm with OK.

### Cycle through colors for mask paths

Open Edit > Preferences > Appearance.

Turn on Cycle Mask Colors.

### Mask modes

The way masks on a single layer combine with each other is governed by their blending modes, referred to as mask modes. Every mask starts out assigned to Add, a setting that merges the transparency values of any masks overlapping on the same layer. While a mode can be assigned per mask, that mode can't be animated—there's no way to set keyframes or expressions on a mask mode property so it varies across time.

Pick a mask's mode from the menu positioned beside the mask name in the Timeline panel.

For the very first mask, the interaction is with the layer's alpha channel. Should that channel leave any part of the image less than fully opaque, the mask instead interacts with the layer frame. Every mask added after that interacts with whichever masks sit above it in the Timeline panel stacking order. Because of this, how a mask mode behaves changes according to the modes assigned to the masks ranked higher in the stack. No mask mode reaches across to a different layer—the effect stays confined to masks sharing one layer.

Mask modes let you build intricate compound masks containing several transparent regions. As one case, a mode can merge a pair of masks while restricting the opaque region to just the overlap where both masks cross.

Original

Original set of shapes.

None

Here the mask exerts no direct effect on the layer's alpha channel. Reach for this when the mask path is needed solely to drive an effect like Stroke or Fill, or to serve as the source for a shape path.

Add

This mask joins those above it in the stacking order, so its influence builds on top of the masks ranked higher.

Subtract

Here the mask's influence is taken away from the masks above it. It comes in handy for producing the look of a hole punched through the middle of another mask.

Intersect

This mask joins those above it in the stacking order. Wherever it overlaps the masks ranked higher, its influence accumulates with theirs; wherever it falls outside them, the outcome is full opacity.

Lighten

This mask joins those above it in the stacking order. At spots where several masks cross, the largest transparency value wins.

Darken

This mask joins those above it in the stacking order. At spots where several masks cross, the smallest transparency value wins.

Difference

This mask joins those above it in the stacking order. Outside the regions where it overlaps the masks ranked higher, it behaves as though it were the layer's only mask; inside those overlapping regions, its influence is subtracted from the masks above.

While drawing or editing a closed mask, these keyboard shortcuts switch its mode:

Function

Mac

Win

None

N

N

Subtract

S

S

Add

A

A

Intersect

I

I

Darken

D

D

Difference

F

F

Lighten

L

L

| --- | --- | --- |

Notes:

- While starting a new mask with a Shape tool such as the Rectangle tool or Ellipse tool, you're free to hit these keyboard shortcuts together with the mouse.
- With the Pen tool, a new mask only accepts these keyboard shortcuts at the moment you close it. Position the pointer over the closing vertex (typically the first one), click and keep the mouse button held to close the mask, and tap the mask mode shortcut before you let go. A mode doesn't exist for open masks, so these shortcuts have no effect when you draw open masks with the Pen tool.
- While editing a closed mask, you may tap these keyboard shortcuts any moment the mouse button is down.

### Expand or contract the edges of a mask

The Mask Expansion property is what you reach for to grow or shrink the region a mask influences.

Rather than altering the actual mask path, mask expansion acts on the alpha channel alone; think of it as an offset, measured in pixels, setting the distance out from the mask path that the mask's effect on the alpha channel reaches.

Mask expansion values can be scrubbed as high as 32,000 and as low as -32,000. In older releases of After Effects, scrubbing capped out at 1,000, and reaching past 1000 meant typing the figure in by hand.

Within the Timeline panel, open up the Mask properties belonging to the layer you intend to change.

Drag the underlined value for Mask Expansion.

### Soften (feather) the edges of a mask

A mask's edges are softened by feathering, which fades them from more transparent to less transparent across a distance you specify. Through the Mask Feather property, mask edges can be made crisp or soft (feathered). Out of the box, the feather width sits centered on the mask edge—half of it inside, half outside. Set the feather width to 25, for instance, and the feathering reaches 12.5 pixels in from the mask edge plus 12.5 pixels out.

With the slider, Mask Feather values can be scrubbed as high as 32,000.

Reach for the Mask Feather property when you want mask edges crisp or soft.

Where the mask feathering shows up can also be steered by growing or shrinking the mask edges through the Mask Expansion property.

Only inside the layer's bounds does mask feathering occur. For that reason, keep a feathered mask's path a little inside the layer area and never push it right up to the layer's edge. Push a mask feather past the layer area and the feathered edge cuts off sharply.

For selected layers, press F to bring up the Mask Feather property.

(Optional) Click the Constrain Proportions switch beside the Mask Feather property to lock horizontal and vertical feather amounts so they change together.

Adjust the Mask Feather property the same way you'd handle any property—drag the underlined value, or click it and type an amount into the text input field.

Note

Since the mask feather makes opacity values follow a Gaussian distribution, the feather's affected area reaches past the pixel count you set. Beyond that specified range, though, the feather's influence is slight. This soft Gaussian fall-off reads as more natural than a linear one would.

### Variable-width mask feathering

Older releases of After Effects let you put a feathered edge on a closed mask, yet the feather kept one uniform width (extent) all the way around. Now a Mask Feather tool—found in the same tool menu as the Pen tool—lets you mark points along a closed mask where the width should differ.

### Create a feather point

At the handle of a selected feather point you'll see a small black dot.

Both the outer and the inner feather boundary are set by feather points. When no feather extent handles sit inside the mask, the mask path itself serves as the inner feather boundary. From that inner boundary out to the outer one is where the mask feather spans.

### Select multiple feather points

With either the Selection or the Mask Feather tool, Shift-click the extent handles of the feather points.

### Toggle the selection of a feather point

Shift-click the feather point.

### Move a feather point

- With the Selection or Mask Feather tool, drag a feather extent handle. Drag any one of several selected feather points to shift them all together, and drag one of the feather extent handles to scale several feather extents at once. Feather points can be swept around a mask's corner points.

- When the Mask Feather tool is active, the Left or Right Arrow slides the feather along the path, while the Up or Down Arrow grows or shrinks the feather's width.

Keep the Shift key down to shift several selected feather points together and to cover greater distances or widths.

### Snap a feather point to the mask path

Pull the feather extent handle over the mask path; it halts there at the mask path.

### Control the falloff of the feather

Choose Layer > Mask > Feather Falloff, then pick one of these:

- Smooth (default)
- Linear

### Adjust the tension (smoothness or curvature) of a feather boundary through a feather point

To set the tension, drag out from a feather extent handle while keeping the Alt (Windows) or Option (macOS) key held. A handle's present tension is reported in the Info panel.

### Hold interpolation for a feather point (for constant feather radius up to the next feather point)

To set the tension, drag out from a feather extent handle while keeping the Alt (Windows) or Option (macOS) key held. A handle's present tension is reported in the Info panel.

From the context menu sitting above the feather point, switch on the Hold option. In the direction where the radius stays constant, the feather point handle takes on a pointed shape.

### Quickly create a feathered edge for a specific mask segment

Keep the Shift key down while you click the mask segment (the stretch between vertices, not the vertices themselves). A change in the pointer signals you've entered this mode. To set the extent, drag out from the segment. Watch for this behavior:

- When exactly two mask vertices are selected, the feathered edge spans the contiguous segments running between them.
- When both ends of the clicked segment are selected (meaning the whole segment is selected), the feathered edge grows to take in adjoining selected segments.
- When every vertex on the mask is selected, or none is, or neither of the first two situations holds, only the clicked segment gets the feathered edge.

### Delete a feather point

With the Selection or Mask Feather tool, click a feather extent handle to select it, then hit Delete. Several selected feather points can be removed at once.

Note

Over a mask vertex, the pointer switches to selection mode rather than delete vertex mode.

### Tips for variable-width mask feathering (Mask Feather tool)

- Hold the G shortcut to flip momentarily between the Pen and Mask Feather tools. This behavior can be switched off under Edit > Preferences > General (Windows) or After Effects > Settings > General (macOS).

- The Info panel is where you can see a mask's feather point count, plus any feather extent's length, position, and tension, along with the feather falloff setting.

- For a given view, clear the Mask Feather Boundaries option in the View Options dialog box to hide the feather boundaries. The boundaries remain interactive even so—for instance, you can drop new feather points at the spots where they'd otherwise be drawn.

- To keep feather point counts steady across Mask Path keyframes, turn on the Preserve Constant Vertex and Feather Count when Editing Masks option in General preferences.

- Through the commands in a feather point's context menu, you can edit that point's tension, radius, and corner angle values from a dialog box. Hover over a mask vertex with the Ctrl (Windows) or Command (macOS) key down to get the Selection tool behavior.

- Hover over a tangent handle with the Ctrl (Windows) or Command (macOS) key down to get the Convert Vertex tool.

### More like this

- Alpha channel interpretation: premultiplied or straight
- Creating shapes and masks
- Managing and animating shape paths and masks
- Split a layer
- Set Matte effect
- Track Matte and Traveling Matte

## Track Mattes and Traveling Mattes

Search Last updated on Oct 14, 2024

A Track Matte is what you create when one layer should be visible only through holes that another layer defines.

Any of a still image, a video, a graphic, text, or a shape can act as a Track Matte. To take one example, putting a text layer to work as a Track Matte over a video layer makes the video appear only within the shapes the text characters form. Transparency for the underlying layer—the fill layer—comes from particular channels of the Track Matte layer, namely its alpha channel or the luminance of its pixels.

Pulling a layer's transparency from the luminance of the Track Matte's pixels helps when you're building a Track Matte out of a layer that has no alpha channel, or one brought in from an application unable to make alpha channels. With both kinds—alpha channel mattes and luminance mattes—the higher a pixel's value, the more transparent it is. A high-contrast matte is the norm, leaving regions fully transparent or fully opaque. Save the in-between shades for spots where you intend partial or gradual transparency, like along a soft edge.

Animating the position or any other transformation of the Track Matte layer turns it into a traveling matte. When you'd like the Track Matte and fill layers animated with matching settings, precomposing the two is worth considering.

### Example of Track Matte

Track Matte layer set to Luma Matte.

Fill layer with a pattern effect.

Result: within the shape of the Track Matte the pattern shows, and that is then composited over one more image layer.

### Convert a layer into a Track Matte

Wherever a layer falls within the stack, it remains eligible to serve as a Track Matte source for any other layer in the composition. Several layers may even point at one shared layer to draw their matte from it. The matte layer's Alpha or Luma channels are available too, and either can be inverted when the situation calls for it.

Blending modes and the Track Matte menu occupy the same column. Reveal the Track Matte menu by confirming that the Modes column is on screen. Learn more Columns in After Effects.

### Select Track Matte layer

Within the Timeline panel, pinpoint the layer that will act as the Track Matte layer.

Pick the layer that the Track Matte should apply to.

Inside the Modes column, choose your Track Matte layer from the Layer List dropdown, or drag the pick whip to designate which layer feeds the Track Matte source.

Should the Modes column be hidden, right-click anywhere in the timeline header area > Columns > Modes.

3. The Layer List dropdown to pick which layer you use as a Track Matte.
   Choosing a layer as a Track Matte flips on two toggle switches. Transparency for the Track Matte is governed through these switches:

Alpha Matte

Renders opaque where a pixel's alpha channel value reaches 100%

Luma Matte

Renders opaque where a pixel's luminance hits 100%

Alpha Inverted Matte

Renders opaque where a pixel's alpha channel value drops to 0%

Luma Inverted Matte

Renders opaque where a pixel's luminance falls to 0%

Even with video disabled on the matte layer, that layer stays selectable so you can move, scale, or rotate it. Click the layer inside the Timeline panel, then grab its center — shown as a circle with an X — and drag it within the Composition panel. Selecting a layer as a track matte switches off the track matte layer's visibility by default, yet you can switch it back on whenever you still want it present in your composition.

Working with a Track Matte parallels the Preserve Underlying Transparency option, where a layer inherits transparency from the combined transparency of whatever layers sit beneath it in the stacking order. Learn more about the Preserve Underlying Transparency feature.

- Apply the Levels effect to push more contrast between the bright and dark portions of the matte layer. Doing so cuts down on the abundance of mid-range values that produce partial transparency. (Mattes typically work best when regions are fully opaque or fully transparent, apart from the edges.)
- When you want some channel besides the matte layer's alpha channel to act as the matte, reach for a Channel effect — the Shift Channels effect, for instance — to feed the chosen channel's value into the alpha channel.
- For a Track Matte that travels along with the layer it mattes, parent the Track Matte to that layer. Learn more about parent and child layers.

### Preserve underlying transparency during compositing

With the Preserve Underlying Transparency option turned on, a layer derives its transparency from the combined transparency of the layers stacked beneath it. Put differently, once you enable it, that layer's opaque regions become visible solely where they overlap opaque regions in the layers below. Effects like glints or light glancing off a polished surface are exactly what this option is good for.

How such a layer behaves with Preserve Underlying Transparency enabled echoes the way a clipping mask works in Adobe Photoshop.

### Related resources

- Alpha channels and masks
  - Matte effects
