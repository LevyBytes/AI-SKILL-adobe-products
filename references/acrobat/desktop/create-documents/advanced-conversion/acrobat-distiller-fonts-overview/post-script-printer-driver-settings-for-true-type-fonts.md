# PostScript printer driver settings for TrueType fonts

Run TrueType fonts through Adobe PostScript printer drivers and they usually come out encoded as Type 42 or CID fonts carrying font-specific indices. That spawns font subsets inside the PostScript file, which trims file size but changes how the fonts are handled.

Note

To embed whole fonts when you print to Adobe PDF, switch on Do Not Send Fonts To Adobe PDF in the Font tab of the printer settings.
