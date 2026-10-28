# Scale or flip a layer

Scaling, like the other transformations, happens around the layer's anchor point. Shift that anchor point off the layer's center and the layer can travel when you flip it. A handful of layers — cameras, lights, and audio-only layers among them — have no Scale property at all.

Flipping a layer amounts to multiplying the horizontal or vertical part of its Scale property value by -1, and the flip occurs around the anchor point.

Note

A layer can be scaled past the bounds of the composition frame. There's more to read about scaling exponentially — the way a zoom lens does — and about scaling or resizing whole movies instead of one layer.

- Flipping selected layers is done from Layer > Transform > Flip Horizontal or Layer > Transform > Flip Vertical.
- In the Composition panel, Shift-drag any layer handle for a proportional scale.
- In the Composition panel, dragging a corner layer handle scales it freely.
- In the Composition panel, dragging a side layer handle confines the change to one dimension.
- A 1% bump to Scale on a selected layer comes from holding Alt (Windows) or Option (macOS) while you tap + or – over on the numeric keypad.
- For a 10% step on selected layers, hold Alt+Shift (Windows) or Option+Shift (macOS) and tap + or – on that same numeric keypad.
- An entire composition gets scaled through File > Scripts > Scale Composition.jsx.
- Choosing Layer > Transform > Fit To Comp scales selected layers and centers them within the composition frame.
- Layer > Transform > Fit To Comp Width or Fit To Comp Height scales and centers selected layers against the frame's width or height, the layer's aspect ratio left intact.
- For a proportional scale from the Timeline panel: select the layer, hit S so the Scale property shows, click the Constrain Proportions icon sitting left of the Scale values, then type a fresh value for x, y, or z scale.

Note

Want the Constrain Proportions icon on with the height matched to the width? Alt-click (Windows) or Option-click (macOS) it.

- For an exact pixel size, right-click (Windows) or Control-click (macOS) the Scale value over in the Timeline panel, pick Edit Value, and flip the units across to pixels inside the Scale dialog box. Switch on Include Pixel Aspect Ratio if you'd like the dimensions shown and adjustable against the composition's pixel aspect ratio.

Scaling a raster (non-vector) layer down can leave the image looking slightly soft or blurred. Scaling a raster layer up by a wide margin can make it look blocky or pixelated.
