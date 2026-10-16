# Display units

Use `core.getDisplayConfiguration` when you need numeric display details for the monitors currently connected.

The measurement unit is platform-dependent. Windows reports pixels, while Mac reports logical display units that OS X calls "points"; do not confuse those with print points.

For more background on points and logical resolution, see [developer.apple.com](https://developer.apple.com/library/archive/documentation/GraphicsAnimation/Conceptual/HighResolutionOSX/Explained/Explained.html).

### Examples

The shortened examples below come from a 27" 4k display.

Windows with scale set to 2.

```json
{
  "globalBounds": {
    "bottom": 2160,
    "left": 0,
    "right": 3840,
    "top": 0
  },
  "physicalResolution": {
    "horizontal": 163,
    "vertical": 163
  },
  "scaleFactor": 2
}
```

Mac with Display Options > Use as: 1920x1080.

```json
{
  "globalBounds": {
    "bottom": 1080,
    "left": 0,
    "right": 1920,
    "top": 0
  },
  "physicalResolution": {
    "horizontal": 163.00000244801444,
    "vertical": 161.00000241797744
  },
  "scaleFactor": 2
}
```

On Windows, the reported bounds show the full pixel dimensions, and the pixels-per-inch (ppi) value is the expected 163.
On Mac, `globalBounds` reflects the value chosen in OS Display Options.

After changing "Use as" to 3200x1800, the result becomes:

```JSON
{
    "globalBounds": {
        "bottom": 1800,
        "left": 0,
        "right": 3200,
        "top": 0
    },
    "physicalResolution": {
        "horizontal": 271.0000040700117,
        "vertical": 269.0000040399747
    }
}
```

In that output, "horizontal" now reports 271.

Compare the horizontal point count with the "physicalResolution" value:
`3200 / 271 ~= 11.8`.
That lines up with the earlier calculation, `1920 / 163 ~= 11.8`.
