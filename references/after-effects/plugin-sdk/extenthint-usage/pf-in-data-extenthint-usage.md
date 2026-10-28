# `PF_InData` - extent_hint Usage

Note

For SmartFX, hint rectangles become a good deal more potent...and more involved.

Lean on extent_hint to touch only the pixels whose output is actually needed; among the easiest optimizations available, this is one of them.

Signal to After Effects that you rely on in*data>extent_hint by turning on `PF_OutFlag_USE_OUTPUT_EXTENT` in `PF_OutData` during `PF_Cmd_GLOBAL_SETUP` (and within your PiPL).

Switch caching off in the preferences menu before you test extent_hint code, so that any change in your composition makes After Effects re-render your effect.

Were caching left on, the mechanism would mask your plug-in's output — possibly incorrect output.

Slide the layer around inside the composition until it gets cropped. The portion of the layer visible within the composition is the output>extent_hint.

Drop a mask onto your layer and shift it about.

Doing so alters the extent_hint, which bounds every non-zero alpha region of the image.

The in_data>extent_hint is where those two rectangles — the composition and the mask — intersect, and it shifts whenever either does.

To keep rectangle intersection between input and output extents simple for effects that set `PF_OutFlag_PIX_INDEPENDENT`, extent rectangles get computed in the original input layer's coordinate space, before any resizing and origin shifting.

For the output extent in the output buffer's coordinate system, shift the extent_hint by the `PF_InData`->output_origin_x and y fields.

Allow for downsampling as you compute output size; rendering at full resolution has to remain available to users.

Should the output buffer run past 30,000 by 30,000, clamp it there, and weigh putting up an alert dialog.

After your code is behaving right, switch the cache back on and observe how often the effect actually has to re-render.

Take a drop shadow as an example; a static drop shadow is something users commonly lay over a still image.

Since the output>extent_hint goes unused, the cache sees heavier use.

For effects that expand the buffer, intersect the output>extent*hint with your plug-in's transformed bounds and set the size to match during `PF_Cmd_FRAME_SETUP`.
