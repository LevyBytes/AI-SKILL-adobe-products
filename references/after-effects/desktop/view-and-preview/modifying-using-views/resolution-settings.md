# Resolution settings

The Resolution settings below are selectable either through the Composition Settings (Composition > Composition Settings) dialog box or via the Resolution/Down Sample Factor menu sitting along the bottom edge of the Composition panel.

Dialing the resolution up or down across its various levels through the Resolution/Down Sample Factor menu is how you govern the preview resolution of any composition.

Auto

(previews only) Tunes the Composition panel view's resolution so that only the pixels required to preview the composition at the present zoom level get rendered.

Say the view sits at 25% zoom — the resolution then settles on 1/4 by itself, displayed as (Quarter), just as though Quarter had been picked by hand. Where a single panel holds several views, resolution follows whichever view is zoomed in the most. The payoff is top image quality without wasting render effort on pixels the current zoom level doesn't need.

Note

Any composition that has the Advanced setting Preserve Resolution When Nested turned on overrides the Auto setting.

Full

Every pixel in the composition gets rendered. Image quality peaks here, though render times are the longest of any option.

Half

Renders a quarter of the pixels found in the full-resolution image — that's half the columns paired with half the rows.

Third

Renders one-ninth of the pixels found in the full-resolution image.

Quarter

Renders one-sixteenth of the pixels found in the full-resolution image.

Custom

Renders at whatever horizontal and vertical resolutions you enter.

Note

A Layer viewer's resolution (down-sample factor) is locked to the resolution of the Composition viewer belonging to the composition that holds the layer.
