# Roto Brush tool, Roto Brush strokes, and similarities to paint tools and strokes

In a lot of respects the Roto Brush Tool resembles the paint tools, yet a handful of meaningful differences set it apart.

Pick the Roto Brush Tool and the Paint panel's controls go inactive. A Roto Brush stroke lasts a single frame, even though its influence carries forward or backward inside a span.

Resizing the brush (Diameter) for the Roto Brush tool happens the same way it does for the paint tools. Reach for the Diameter control in the Brushes panel, or Ctrl-drag (Windows) or Command-drag (macOS) inside the Layer panel. The other Brushes panel controls do reach the Roto Brush tool — Hardness being the one exception.

Roto Brush Path properties can be copied and pasted into masks, shapes, and instances of the Paint effect, the same as any other kind of path. Copy a single stroke and the Roto Brush span data stays behind; copy the whole Roto Brush effect instance, though, and the Roto Brush span (plus base frame) data rides along.

Expressions work on the Roto Brush effect's Path property just the way they work on the Paint effect's Path property.

Drawing a stroke with the Roto Brush Tool spins up a new stroke even when another stroke is already selected — unlike the stroke-replacement behavior the paint tools use.

Roto Brush strokes live in a Strokes property group nested inside the Roto Brush & Refine Edge property group over in the Timeline panel.

Strokes property group within the Roto Brush property group in the Timeline panel.

A good many keyboard shortcuts built for paint strokes and paint tools carry over to Roto Brush strokes and the Roto Brush Tool as well.
