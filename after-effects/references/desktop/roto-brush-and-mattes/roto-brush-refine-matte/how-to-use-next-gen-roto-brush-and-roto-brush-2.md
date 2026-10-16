# How to use Next-Gen Roto Brush and Roto Brush 2

Already comfortable with Roto Brush 1? Then grabbing objects via the propagation engine behind Next-Gen Roto Brush and Roto Brush 2 plays out pretty much the same way.

Note

Rotoscoping defaults to Next-Gen Roto Brush. That said, should you lean toward an earlier release — Roto Brush 1 or Roto Brush 2 — pick it from the Version dropdown inside the Roto Brush & Refine Edge effect panel.

Select Roto Brush in the toolbar.

There are keyboard shortcuts for this too:

- Windows: Alt + W
- macOS: Option + W

1. Select Roto Brush from the toolbar.
   Double-click a layer that's already in the Composition panel. Doing so brings that layer up in the Layer panel.

Pick a frame to begin from.

Steer clear of frames where other things in the scene block the object. Take a person stepping into and out of frame: settle on a frame that has them wholly in the scene.

Over in the Effect Controls panel, find the Roto Brush & Refine Edge effect and double-check its Version: 3.0 drives Next-Gen Roto Brush, while 2.0 drives Roto Brush 2.

4. Select the Roto Brush version using the Version dropdown in the Effects Control panel.
   Lay a green foreground stroke across the subject, object, or area you're trying to rotoscope.

Do's:

- Open with a single stroke slicing through the object. Watch what Roto Brush picks up from that, then add or trim the selection with as few strokes as you can.

Don'ts:

- Don't trace an outline around the object. Run your stroke down the middle instead, crossing any patches on the object where color or brightness changes.
- Keep strokes off the edges; painting across them can throw off the selection.

A green cross rides over the mouse cursor by default. Setting the right brush size before that first stroke is good practice. Ahead of your opening stroke, the brush size shows in green. To resize it, pick Windows > Brushes and tweak the brush diameter.

Holding Ctrl (Windows) or Command (macOS) while dragging left and right also resizes the brush.

Sharpen the selection.

Add more strokes, or hold Alt or Option to lay background strokes that carve away parts of the selection. Run strokes around the edges you'd like gone. The magenta line wrapping the object begins to tighten up.

Trimmed off a bit too much? Let go of Alt or Option and drag across the spot to bring it back into the selection. You'll know it's adding when the cursor shows green. While a background stroke is in progress, the Roto Brush tool's pointer turns into a red circle with a minus sign at its center.

6. Background stroke, removing from selection
   With the base frame locked in, kick off the propagation.

Ways to begin propagation:

- Tapping the spacebar: this fires off the matte's propagation from the base frame onward to the next frame.

  - Page Up and Page Down
  - Command + Left or Right arrows (macOS) or Cntrl + Left or Right arrows (Windows)

- Drag the CTI (Current-time indicator) onto a target frame, or hit the I or O keyboard shortcuts to send the CTI to the layer's in or out point.

What separates the spacebar from moving the CTI is timing: the spacebar propagates and shows you each frame's result as it goes, while moving the CTI holds off until frames have propagated and then shows the results.

While Roto Brush carries the matte across frames, the selection can pick up regions you don't want or "shed" pieces of what you originally grabbed. Fix this on the first frame where the unwanted shift shows up: hold Alt or Option and paint a background stroke to strip away the stray regions, or add a fresh foreground stroke to recover anything dropped. Same rule as the base frame — keep off the edge of the selection as much as you can.

You can shrink the Roto Brush tool's tip down for finer strokes. Lean on broad strokes early on, and save fine strokes for the detail work. (See Roto Brush strokes, spans, and base frames.)

Freeze the propagation.

With the matte carried through every frame of the clip, lock it down using the Freeze button along the bottom of the Layer panel.

A freeze still lets you keep refining the matte, no re-propagation required. Need to add to or trim a selection once it's frozen? The very same button unfreezes the propagation.

Hold off freezing until the Roto Brush matte truly satisfies you. The point of freezing is to pin the matte down so Roto Brush is spared from re-propagating the edges.
