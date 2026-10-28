# Create a mask from channel values with Auto-trace

With the Auto-trace command you can turn a layer's alpha, red, green, blue, or luminance channel into one mask or several. To outline whatever channel values you target, Auto-trace lays down however many Bezier masks the job calls for. While honoring the settings you pick, it also keeps each mask down to the fewest vertices it can. A mask born from Auto-trace edits just like any other, and through expressions you can tie its path to other path kinds — shape paths on a shape layer among them.

Layers touched by Auto-trace flip automatically to Best Quality, which keeps the results accurate.

Note

Want fewer masks out of Auto-trace? Run a keying effect on the layer to single out your subject first, then apply Auto-trace.

Over in the Timeline panel, take one of these routes:

- For mask keyframes on just one frame, slide the current-time indicator onto the frame you're after.

- For mask keyframes spanning several frames, lay down a work area that covers that stretch.

Select one or more layers and choose Layer > Auto-trace.

Current Frame

Lays down mask keyframes on the present frame and nowhere else.

Work Area

Lays down mask keyframes only on the frames falling inside the work area.

With that set, pick from whichever of these options apply:

Invert: flips the input layer around before edges are searched for.

Blur: softens the source image first, before the trace is produced. Reach for it to cut down small artifacts and even out jagged edges. Switch it off when you want a tight trace of detail in a high-contrast image.

Tolerance: the pixel distance by which the traced path may stray from the channel's contours.

Threshold: gives, as a percentage, the channel value a pixel needs before it counts as part of an edge. Any pixel above the threshold turns white and opaque; anything below turns black and transparent.

Minimum Area: sets the tiniest feature in the source image that still gets traced. A value of 4, for instance, drops anything under 2 pixels wide by 2 pixels high out of the trace.

Corner Roundness: controls how rounded the mask curve runs at its vertices. Push the value higher for smoother curves.

Apply To New Layer: drops the mask onto a fresh solid matching the selected layer's size. For layers running Collapse Transformations, it switches on by itself.

Preview: turn it on to see, ahead of time, both the masks and how each of the Auto-trace command's options plays out.
