# 3D Glasses effect

The 3D Glasses effect fuses a left and a right 3D view into one 3D image. For each view, your sources can be images out of 3D programs or footage from stereoscopic cameras.

To dig deeper into stereoscopic 3D, consult Cameras, lights, and points of interest.

How you build the combined images determines how they're meant to be viewed. You might, for instance, turn to 3D Glasses to make an anaglyphic image — one that holds two slightly different perspectives of the same subject, each tinted a contrasting color and laid over the other. Building an anaglyphic image starts by combining the views and tinting each one a different color; then you view the result stereoscopically through 3D glasses fitted with either red and green lenses or red and blue lenses.

The effect works in 8-bpc, 16-bpc, or 32-bpc color.

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
