# Color inclusion and transparency

Several controls define how chosen colors and transparent regions are treated:

- Forced: guarantees that selected colors stay in the palette. Available choices include Black and White, Primaries, Web, or a Custom selection.
- Transparency: keeps transparent regions by adding a transparency entry to the palette. When this option is off, Photoshop fills transparent regions with a matte color.
- Matte: sets the fill color used for anti-aliased edges or transparent regions so they can blend into a web background. Choose None when hard-edged transparency is preferred.

Dithering blends available pixels to imitate colors that are not present in the palette. It can improve appearance, although file size may grow. Options include:

- None: maps pixels to the nearest available color, creating crisp transitions and a posterized appearance.
- Diffusion: applies error diffusion for smoother output. Preserve Exact Colors keeps existing palette colors unchanged.
- Pattern: uses a halftone-style grid to represent unavailable colors.
- Noise: introduces randomness to limit seam patterns, which helps with web-layout image slices.

Note

Indexed Color mode restricts an image to 256 or fewer colors for smaller files and broader format compatibility. Transparency, forced-color, and dithering choices let you tune the final quality.
