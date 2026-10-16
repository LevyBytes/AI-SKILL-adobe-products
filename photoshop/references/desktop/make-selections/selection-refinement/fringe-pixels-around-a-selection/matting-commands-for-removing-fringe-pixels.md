# Matting commands for removing fringe pixels

- Color Decontaminate: replaces background color in fringe pixels with colors from nearby fully selected pixels, keeping edges natural while removing contamination.
- Defringe: swaps fringe pixel colors for pixels located farther inside the selection, producing cleaner edges and smoother transitions.
- Remove Black Matte and Remove White Matte: clear black or white matte edges from anti-aliased selections so placement on different backgrounds stays clean.

Note

Edges can also be refined with the Advanced Blending sliders in the Layer Styles dialog box. Turning black or white areas transparent can remove fringe pixels while preserving smooth edges. Alt-click (Windows) or Option-click (macOS) the sliders to split them for more precise transition control.
