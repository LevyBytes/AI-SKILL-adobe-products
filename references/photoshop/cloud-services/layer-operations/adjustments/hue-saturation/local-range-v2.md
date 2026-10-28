# Local range (V2)

In Hue/Saturation, **local range** limits the adjustment to a chosen color range instead of affecting the full image. **`localRange` does not apply to the master channel and cannot be used when `colorize` is true.** V2 accepts multiple items in `hueSaturationAdjustments`. Leave out `localRange` for the master adjustment across the entire image; add **`localRange`** with **`channelId`** for one color range when `colorize` is false. Define the hue-range boundaries with **`beginRamp`**, **`beginSustain`**, **`endSustain`**, and **`endRamp`** (0-360 degrees).

| `channelId` value | Color range affected |
| --- | --- |
| (omit `localRange`) | Entire image (master) |
| `REDS` | Red color range |
| `YELLOWS` | Yellow color range |
| `GREENS` | Green color range |
| `CYANS` | Cyan color range |
| `BLUES` | Blue color range |
| `MAGENTAS` | Magenta color range |

Use local range when only skin tones (REDS/YELLOWS), skies (BLUES/CYANS), foliage (GREENS), etc. should change. **V1** supported only master adjustments; **V2** supports all listed channels, with optional ramp/sustain tuning.
