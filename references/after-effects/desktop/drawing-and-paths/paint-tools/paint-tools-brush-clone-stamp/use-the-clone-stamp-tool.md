# Use the Clone Stamp tool

Like every paint tool, the Clone Stamp tool does its work inside the Layer panel.

Note

When your source and target are separate layers, give each its own viewer. Splitting and locking the current viewer is done with Ctrl+Alt+Shift+N (Windows) or Command+Option+Shift+N (macOS).

A semi-transparent rendering of the source layer—the clone source overlay—lets you preview the outcome of a stroke before committing to it.

Note

Dial in a paint stroke's settings ahead of applying it through the Paint and Brushes panels. Once the stroke exists, its properties live in the Timeline panel, where you can change and animate them.

Turning on Aligned in the Paint panel ties the sample point (Clone Position) to the Clone Stamp tool's motion in the target Layer panel, shifting it for each successive stroke. Put another way, Aligned lets a series of strokes build up a single copy of the sampled pixels. Switch Aligned off and the sample point holds steady from stroke to stroke, so every fresh drag restarts your painting from the original sample point to lay down another clone.

To copy one entire cow—a job nearly impossible in a single unbroken stroke—turn Aligned on and use several clone strokes; to stamp one flower into dozens of spots and fill a field, turn Aligned off and lay down one clone stroke per copy.

Turning on Lock Source Time clones just one source frame (taken at composition time Source Time); leave Lock Source Time off and successive frames are cloned, separated from the target frame by a time offset (Source Time Shift). Once the sampling point runs past the end of the source layer's duration, the clone source time wraps automatically back to the original sample point. That looping comes in handy when the target layer needs many frames repaired but the source layer offers only a handful of good ones.

1. Open the composition holding both layers: source and target alike.
   Bring the source layer up in a Layer panel and slide the current-time indicator to whichever frame should begin the sampling.

In the Paint panel you steer where sampling starts, in both time and coordinates, by editing four values: Offset, Source Time Shift, Source Position, and Source Time. The Reset button returns them all to zero.

Set the sampling point by holding Alt and clicking (Windows) or Option and clicking (macOS) the source layer in the Layer panel with the Clone Stamp tool.

Bring the target layer up in a Layer panel and move the current-time indicator to whichever frame should start the clone stroke.

Paint the source layer's cloned pixel values into place by dragging across the target layer. A crosshair marks the spot currently being sampled, so you can keep track of what the Clone Stamp tool is pulling from as your strokes go down.

Releasing the mouse button ends the current stroke; the next drag opens a new one. Hold Shift while dragging to pick the previous stroke back up.

Lining elements up and judging your clone strokes is easier if you click the Difference Mode button beside the Clone Source Overlay option in the Paint panel, or adjust the overlay's opacity. A quick press of Alt+Shift (Windows) or Option+Shift (Mac OS) shows the clone source overlay for as long as you hold it. To reposition the source layer, drag while holding Alt+Shift (Windows) or Option+Shift (Mac OS).

In the Timeline panel, every clone stroke carries its own set of properties—unique to the Clone Stamp tool—that mirror the choices you made in the Paint panel before the stroke was drawn:

Clone Source

Whichever layer was sampled.

Clone Position

Where the sample point sits, as an (x,y) coordinate, inside the source layer.

Clone Time

Within the composition, the moment at which sampling of the source layer occurs. Only with Lock Source Time turned on does this property show up.

Clone Time Shift

How far apart in time the sampled frame and the target frame fall. Only with Lock Source Time turned off does this property show up.

Once your clone strokes exist, the Timeline panel lets you adjust and animate their properties. Cloning a bird in flight, for instance, comes down to cloning it on a single frame, tracking its movement, and then tying the Clone Position property to the tracker's Attach Point property by way of an expression.

Note

Just like any other paint stroke, clone strokes accept a blending mode. The Darken blending mode works well for clearing away light-colored scratches, while the Lighten blending mode handles dark blemishes and dust.
