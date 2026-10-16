# Formatting text — Text formatting precedence

Several routes can apply attributes such as font style and text direction to text, including the Control panel, frame grid options, named grids, and text styles. When multiple methods set conflicting attributes, InDesign resolves the conflict by precedence. The priority order is:

Priority 1: Character attribute overrides

Priority 2: Character style

Priority 3: Paragraph attribute overrides

Priority 4: Paragraph style

Priority 5: CJK grid attributes from a named grid or the Frame Grid Options dialog box

Priority 6: Application default (root paragraph style)

For instance, if Frame Grid Options sets one font size and a character style sets another, the character style controls the font size. Likewise, when an object style includes both a paragraph style and a named grid, the paragraph style outranks the named grid.
