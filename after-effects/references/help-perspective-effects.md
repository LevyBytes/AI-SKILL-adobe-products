# Perspective Effects

> Adobe After Effects reference. Original prose; identifiers preserved verbatim.

Search Last updated on Jun 27, 2025

## 3D Camera Tracker

You can lean on the 3D Camera Tracker effect to pull camera movement out of 2D footage and recreate it inside a 3D environment. That comes in especially handy when you're dropping 3D elements like text or objects into a live-action scene so they read as though they belong there.

Analyze

Tracks the footage and studies the motion in the clip so the 3D camera movement can be extracted.

Shot Type

Pins down the sort of camera movement the shot contains.

- Fixed Angle of View: the right pick when the zoom (focal length) holds steady across the whole shot.
- Variable Zoom: the right pick when the shot includes some zooming.

Horizontal Angle of View

Switch it on to type in the camera's field of view, which sharpens tracking accuracy.

Show Track Points

Pins down when track points show. Pick 3D Solved to display only the points that went into solving the 3D camera.

Render Track Points

Switch it on to bake the track points into the final output — rarely something you'd want except for demonstration or reference.

Track Point Size

Tune how large the tracking point markers appear in the viewer.

Target Size

Tune how large the target crosshairs appear.

Create Camera

This button switches on once tracking has finished and solved. Selecting it drops a virtual 3D camera into your comp that echoes the original camera motion from your footage.

## 3D Glasses effect

The 3D Glasses effect fuses a left and a right 3D view into one 3D image. For each view, your sources can be images out of 3D programs or footage from stereoscopic cameras.

To dig deeper into stereoscopic 3D, consult Cameras, lights, and points of interest.

How you build the combined images determines how they're meant to be viewed. You might, for instance, turn to 3D Glasses to make an anaglyphic image — one that holds two slightly different perspectives of the same subject, each tinted a contrasting color and laid over the other. Building an anaglyphic image starts by combining the views and tinting each one a different color; then you view the result stereoscopically through 3D glasses fitted with either red and green lenses or red and blue lenses.

The effect works in 8-bpc, 16-bpc, or 32-bpc color.

Original (left), and with effect applied (right)

Original (left), and with effect applied (right)

On the Slippery Rock NYC website, Robert Powers offers a video tutorial walking through how to build a depth matte and put it to work as a control layer for the Displacement Map effect, with that result then feeding the 3D Glasses effect to produce a stereoscopic image.

To steer clear of trouble with flipped views, hold these guidelines in mind:

Keep the vertical dimensions of the composition and the source images the same. A one-pixel difference lands the same result as nudging the position one pixel vertically.

Confirm that the layer's Position values are whole numbers (say 240 rather than 239.7).

When the left and right view images are interlaced, de-interlace them ahead of using 3D Glasses to dodge a field mismatch.

Since 3D Glasses turns out interlaced frames, steer clear of picking an interlace option in the Render Settings dialog box.

Ghost effects crop up when one color's luminance values overrun another color's by enough that the first color shows through the wrong lens of the anaglyph glasses. An excessive red luminance value, for example, becomes visible through the blue lens. Whenever you change the Balance value, check the outcome on the final output media; setting the Balance value too high can bring out a reversed shadow.

Working with red and blue images, the blue in glasses carrying red and blue lenses is really cyan rather than blue. Red and cyan, being complementary colors, deliver the best separation since they cancel each other out more effectively. Working with red and green images, the green may seem dimmer than the red; even so, viewing them through red and green lenses lands an even result, because green carries a higher luminance value than red.

Left View, Right View

Whichever layer should stand in for the left view or the right one. Applying 3D Glasses to a single layer in a composition is all you need. Should you bring in a second layer, confirm that the two layers match in size; that second layer needn't be visible in the composition.

Convergence Offset (Scene Convergence)

How far apart the two views are offset. This control governs where 3D elements land — out in front of the screen or back behind it. Wherever things line up (the left and right views, for example), the object shows in exactly the same spot on the screen. Anything sitting ahead of those areas in z space juts out from the screen, while anything behind them reads as being back behind the screen when you take in the scene through stereo glasses.

Convergence Offset (Scene Convergence) also lets you realign uncalibrated camera views of rendered material — photos, say, or images rendered out of 3D programs. Such material is usually misaligned and calls for a negative Convergence Offset value. When the original footage was captured with correct convergence, there's no need to touch this value. Keyframing it can produce erratic animation.

Note

Edge pixels are now handled in an improved, truer way under Scene Convergence. Edge pixels used to be duplicated to fill out to the edge, but that no longer happens. Scale the layer to get rid of any vacant edges.

Vertical Alignment

Governs how far the left and right views sit offset from one another along the vertical axis.

Units

Sets which unit (Pixels or % of Source) applies to the Scene Convergence and Vertical Alignment values whenever 3D View is on any mode besides Stereo Pair or Over Under.

Swap Left-Right

Trades the left and right views for each other. The swap carries over to the other 3D View modes as well.

3D View

Determines the manner in which the two views get merged.

Stereo Pair (Stereo Pair (Side by Side))

Resizes each layer so the pair fits next to one another inside the effect layer's bounding box. Turning on Swap Left-Right yields cross-eyed viewing. Picking Stereo Pair turns off Convergence Offset.

Over Under

Resizes each layer so one view stacks above the other inside the effect layer's bounding box. Turning on Swap Left-Right yields cross-eyed viewing. Picking Stereo Pair (Side by Side) turns off Screen Convergence.

Interlace Upper L Lower R

Pulls the upper (first) field out of the Left View layer together with the lower (second) field out of the Right View layer, then weaves them into a run of interlaced frames. Reach for this option when the results are meant to be seen through polarized or LCD shutter glasses. Turning on Swap Left-Right exchanges the fields.

Red Green LR

Colors the Right View layer red while coloring the Left View layer green, driven by each layer's luminance values.

Red Blue LR

Colors the Right View layer red while coloring the Left View layer blue (cyan), driven by each layer's luminance values.

Balanced Red Green LR

Carries out the identical processing as Red Green LR, but additionally evens out the colors to cut down the shadows or ghosting that arises when one view bleeds through the other. A high value lowers the contrast across the whole image.

Balanced Red Blue LR

Carries out the identical processing as Red Blue LR, but additionally evens out the colors to cut down shadows or ghosting.

Balanced Colored Red Blue

Turns the layer into a 3D view by drawing on the original layer's RGB channels. While this option keeps the layer's original colors intact, it can introduce shadows and ghosting. Cut those down by tweaking the balance or by desaturating the picture before you run 3D Glasses. With CG imagery, lift the black level on both views ahead of applying the effect.

Balance

Sets how much balancing happens in a balanced 3D view option. Lean on this control to trim shadows and ghost effects. When you pick the Balanced Colored Red Blue option, the default balance that 3D Glasses applies is already the ideal figure: a Balance of 0.0 leaves 3D Glasses producing no 3D depth, whereas a Balance set too high leaves 3D Glasses producing a heavily saturated result.

Over on the After Effects Portal website, Rich Young gathers stereoscopic 3D resources.

## Bevel Alpha effect

What the Bevel Alpha effect does is lend a chiseled, lit look to an image's alpha boundaries, which frequently lends 2D elements a 3D feel. Should the layer be fully opaque, the effect lands on the layer's bounding box instead. Compared with the edge from the Bevel Edges effect, the one this produces is softer. Elements carrying text in the alpha channel are an especially good fit for it.

There are situations where you'll favor the Bevel And Emboss layer style over the Bevel Alpha effect. As an instance, reach for the Bevel And Emboss layer style instead of the Bevel Alpha effect when you need separate blending modes on a bevel's highlights and shadows. (See Layer styles.)

This effect works with 8-bpc and 16-bpc color.

Original (left), and with effect applied (right)

Original (left), and with effect applied (right)

## Bevel Edges effect

What the Bevel Edges effect does is lend a chiseled, lit 3D look to an image's edges. The source image's alpha channel is what fixes where the edges sit. In contrast to Bevel Alpha, the edges this effect makes stay rectangular at all times, so the right look won't come through on images whose alpha channels aren't rectangular. Every edge shares one thickness. Run it at Best quality and edge thickness gets interpolated for smooth visual results.

There are situations where you'll favor the Bevel And Emboss layer style over the Bevel Edges effect. (See Layer styles.)

This effect works with 8-bpc color.

Original (left), and with effect applied (right)

Original (left), and with effect applied (right)

## Drop Shadow effect

What the Drop Shadow effect does is place a shadow behind the layer. The layer's alpha channel is what shapes that shadow.

Apply a drop shadow to a layer and a soft-edged silhouette of the layer's alpha channel shows up behind it, as though a shadow were thrown onto the background or the objects beneath. GPU-acceleration drives the effect for quicker rendering.

A shadow reaching past the layer's edges is something Drop Shadow can produce. Both the shadow's subpixel placement and how smooth its soft edges turn out depend on the layer's quality setting.

There are situations where you'll favor the Drop Shadow layer style over the Drop Shadow effect. (See Layer styles.)

This effect works in 32-bit color.

Original (left), and with effect applied (right)

Original (left), and with effect applied (right)

To render the shadow without the image, select Shadow Only.

Note

When a layer rotates, apply a drop shadow to it by first rotating the layer with the Transform effect and then running the Drop Shadow effect. Nesting, precomposing, or an adjustment layer will also get you this result. Skip every one of these approaches and the shadow ends up rotating along with the layer.

## Radial Shadow effect

Rather than relying on an infinite light source the way the Drop Shadow effect does, the Radial Shadow effect builds a shadow from a point light source positioned over whichever layer it sits on. Because the shadow originates from the source layer's alpha channel, that layer's color can tint the shadow as light travels through its semitransparent regions. Use the effect when you want a 3D layer to look as though it throws a shadow down onto a 2D layer.

This effect works with 8-bpc color.

Original (left), and with effect applied (right)

Original (left), and with effect applied (right)

Shadow Color

The color of the shadow.

Note

Pick Glass Edges from the Render control menu and the layer's own colors can take precedence over this option. The Render and Color Influence controls cover this in more detail.

Opacity

How opaque the shadow renders.

Light Source

Where the point light source sits.

Note

For a shadow that lines up with another effect's light source, copy position keyframes or expressions off a control point belonging to that effect (Lens Flare, say) and paste them here.

Projection Distance

How far the layer sits from the surface catching the shadow. Raise this value and the shadow grows larger.

Softness

How soft a shadow's edges come out.

Render

Which kind of shadow:

The shadow color edges closer to the layer's own colors as the layer's pixels grow more transparent. Glass Edge barely does anything when a layer holds no semitransparent pixels.

Note

Choose Glass Edge and anti-aliased edges will bring color into a shadow's edge even on a fully opaque layer. A layer's colors come through along those anti-aliased edges while the Shadow Color fills the shadow's middle.

Regular

Builds a shadow off the Shadow Color and Opacity values without regard to any semitransparent pixels in the layer. (Pick Regular and the Color Influence control switches off.)

Glass Edge

Builds a colored shadow off the layer's color and opacity. When the layer holds semitransparent pixels, the shadow draws on both the layer's color and its transparency. The look this gives is, for instance, sunlight passing through stained glass.

Color Influence

How much of the layer's color values carry into the shadow. Set to 100%, the shadow picks up the color of whatever semitransparent pixels the layer holds. Color Influence barely matters when the layer has no semitransparent pixels, leaving the Shadow Color value to set the shadow's color. Lower the Color Influence value to mix the layer's shadow colors together with the Shadow Color. Raise Color Influence and the Shadow Color loses sway.

Shadow Only

Turn on to render the shadow by itself.

Resize Layer

Turn on so the shadow can spill past the layer's original boundaries.
