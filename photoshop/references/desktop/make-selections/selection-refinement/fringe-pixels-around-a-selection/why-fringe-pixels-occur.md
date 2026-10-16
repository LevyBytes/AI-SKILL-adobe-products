# Why fringe pixels occur

Fringe pixels usually come from these conditions:

- Anti-aliased selections: smooth edges are produced by partially filled edge pixels, which can keep some original-background color.
- Contrast changes: fringe pixels stand out more after a selection is moved onto a background with another color.
- Transparency blending: semi-transparent edge pixels can carry traces of the original background as they blend with a replacement background.
