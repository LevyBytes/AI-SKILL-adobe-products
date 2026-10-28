# Keying effects - Use the Difference Matte effect

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
