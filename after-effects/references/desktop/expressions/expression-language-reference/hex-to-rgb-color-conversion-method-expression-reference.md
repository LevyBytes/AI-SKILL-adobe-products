# Hex to RGB color conversion method (expression reference)

Hexadecimal color values such as #FF00FF are turned into RGBA color values by this color conversion method, hexToRgb(). It comes in handy when you need to tie color parameters to colors that arrive as hex strings inside JSON or CSV/TSV data sources.

Expression method:

hexToRgb(hexString) Converts a color in hex triplet space to RGB, or in hex quartet space to RGBA space. For hex triplets, alpha defaults to 1.0.

Parameters:

| Parameter | Description |
| --- | --- |
| hexString | String representing an hex triplet (6 digits, no alpha channel) or quartet (8 digits, includes alpha channel) containing only numerals or characters A–F. Optional leading characters 0x, 0X, or # are ignored. Characters beyond 8 digits are ignored. |

Returns:

RGBA color value array.

Examples:

Any of the following will return [1.0, 0.0, 1.0, 1.0]:

- hexToRgb("FF00FF")
- hexToRgb("#FF00FF")
- hexToRgb("0xFF00FF")
- hexToRgb("0XFF00FFFF") Note: 8-digit hex quartet; last two digits set alpha to 1.0.

### More like this

- Expression basics
- Expression examples
- Timecode and time display units
- Keyframe interpolation
- Automatically ease speed
- Cameras, lights, and points of interest
