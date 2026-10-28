# Sequence Clip color settings

These controls apply to the currently selected timeline clip.

- Color Space Input Conversion: converts Media Color Space into Working Color Space.
- Color Space Output Conversion: converts Working Color Space into Output Color Space.
- Input Gamut Compression: compresses selected out-of-range colors from larger-color-space media so they fit the active Working Color Space. It runs before effects are applied.
- Input Tone Mapping: enables tone mapping of wide-gamut media into the Working Color Space before color corrections, using an automatically selected method from Sequence Clip controls. It is usually used when the working color space is not wide-gamut.
- Exposure: adjusts exposure before Input Tone Mapping, which can recover extra highlight detail that was overly compressed.
- High Saturation: sets how much saturation is permitted in tone-mapped highlights.
- Knee: sets the tonal threshold; content below it is left unchanged, while highlights above it are compressed by tone mapping.
