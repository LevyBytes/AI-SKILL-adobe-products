# Freezing (caching, locking, and saving) Roto Brush segmentation

Suppose After Effects has already worked out Roto Brush segmentation for a frame by the time you hit the Freeze button — that data gets cached. Where a frame inside a Roto Brush span hasn't had its segmentation worked out yet, After Effects has to compute it before the freeze can happen.

Frames carrying frozen (cached and locked) segmentation data show up as:

- Blue bars over in the Roto Brush 1 span view in the Layer panel.
- Purple bars over in the Next-Gen Roto Brush and Roto Brush 2 spans view in the Layer panel.

Purple bars in Next-Gen Roto Brush and Roto Brush 2 spans view

Purple bars in Next-Gen Roto Brush and Roto Brush 2 spans view Note

Hit Stop in the Freezing Roto Brush dialog box and After Effects quits piling frames into the cache; Roto Brush segmentation stays locked all the same, with whatever data was cached up to the moment you clicked Stop.

Unfreeze Roto Brush segmentation by hitting the Freeze button once more.

While Roto Brush segmentation sits frozen, hover the pointer over the Freeze button and a tooltip tells you when that cached data was made.

Freeze button tooltip that informs when the cached information was created.

A slash runs through the Roto Brush tool's pointer whenever the segmentation is frozen.

What gets cached and locked traces back to two sources: your Roto Brush strokes, plus — under the Roto Brush & Refine Edge effect — whatever sits in the Propagation property group. Touching any of those — drawing new Roto Brush strokes, say, or editing properties in the Propagation property group — won't shift the Roto Brush effect's result until you unfreeze the segmentation. The properties over in the Roto Brush Matte property group don't get frozen.

Frozen Roto Brush segmentation data stays cached and locked for as long as the application runs, and that cached data is stored along with the project.
