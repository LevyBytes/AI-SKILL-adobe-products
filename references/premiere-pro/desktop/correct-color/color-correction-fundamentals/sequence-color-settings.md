# Sequence color settings

Use this section when the timeline-selected clip or the project-bin-selected sequence needs sequence setting changes.

In the Sequence section, you can adjust Color Setup, Output Color Space, and Output Peak Luminance. In Advanced, the available controls are:

- Working Color Space: chooses the color space used for editing the video.
- Input Tone Mapping: maps wide-gamut media into the Working Color Space before color adjustments, using an automatically selected method from the Sequence Clip controls.
- Input Gamut Compression: compresses selected out-of-range colors from larger-color-space media so they fit the active Working Color Space.
- Output Tone Mapping: runs after all effects, mapping the resulting Working Color Space image data into the Output Color Space. Multiple tone mapping methods are available.
- Highlight Saturation: sets the permitted saturation level in tone-mapped highlights.
- Knee: sets the tonal threshold; values below it stay unchanged, while highlights above it are compressed through tone mapping.
- Output Gamut Compression: compresses selected out-of-range image colors from a larger color space so they fit the active Output Color Space. This occurs after all effects.
- Graphics White Override: when Output Color Space uses HLG or PQ, defines the maximum white luminance for generated titles, graphics, and SDR media. It keeps SDR media from looking too dim next to the HDR program and keeps titles from becoming overly bright.
- Color Space Aware Effects: turns on the Color Space Aware version of effects.
