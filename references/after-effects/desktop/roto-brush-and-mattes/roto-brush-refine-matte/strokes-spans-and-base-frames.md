# Strokes, spans, and base frames

The frame you draw on with your very first Roto Brush stroke becomes a base frame. By default, the segmentation data (what's tagged foreground versus background) spans the layer's whole duration, or the length of any empty stretches when several spans exist. That range of frames swayed by the base frame is its Roto Brush span. Tiny arrows along the span bar in the Layer panel point out which way the data is propagating. Draw a corrective stroke anywhere the arrows aim right and that stroke's data travels forward; draw one anywhere the arrows aim left and it travels backward. Draw a stroke outside any Roto Brush span and you spawn a brand-new base frame and span.

Starting from a base frame, you can move ahead one frame at a time laying down corrective strokes, with no worry that those strokes will alter results on frames you've already finished. The same holds going backward from a base frame.

Every corrective stroke's influence spreads forward or backward to touch all frames lying that way within the span, no matter the order you drew them in. Picture a base frame at frame 10: you make a corrective stroke at frame 20, then another at frame 15 — frame 20 ends up shaped by both strokes, exactly as though you'd drawn them the other way round.

Each stroke you lay inside a span stretches that span, unless it can't because the span you're drawing in butts up against another span:

Resize a span's duration by hand by dragging either of its ends.

Get rid of a span by right-clicking (Windows) or Control-clicking (macOS) it and picking Remove Span.

Wipe out every span by deleting the instance of the Roto Brush & Refine Edge effect.
