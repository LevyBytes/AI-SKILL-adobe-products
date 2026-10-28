# How compositing works in Premiere

Upper-track clips hide lower-track clips unless alpha channels mark transparent areas. Premiere creates the composite from the lowest visible track upward across all visible tracks. Any region where every track is empty or transparent displays as black.

Opacity behavior depends on render order relative to visual effects. Premiere renders the Video Effects list first, then geometric effects such as Motion, and then applies alpha-channel changes. Effects within each group are rendered from the top of the list downward. Because Opacity belongs to the Fixed Effects list, it renders after the Video Effects list. To place opacity processing earlier or later than specific effects, or to access more opacity controls, apply the Alpha Adjust video effect.
