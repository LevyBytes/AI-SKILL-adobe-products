# Hue/Saturation

V1 and V2 share the top-level shape. V2 also lets Hue/Saturation target **local range** entries for individual color channels, in addition to the master channel. For **V2**, put `type` inside `adjustments`.

```json
{
  "type": "adjustment_layer",
  "name": "Hue/Saturation",
  "adjustments": {
    "type": "hue_saturation",
    "hueSaturation": {
      "colorize": false,
      "hueSaturationAdjustments": [
        {
          "hue": 15,
          "saturation": 20,
          "lightness": -5
        },
        {
          "hue": 5,
          "saturation": 15,
          "lightness": 0,
          "localRange": {
            "channelId": "REDS",
            "beginRamp": 20,
            "beginSustain": 10,
            "endSustain": 100,
            "endRamp": 60
          }
        }
      ]
    }
  }
}
```

**Parameters:**

- **`colorize`** (boolean, required):
  - **`false`**: Standard Hue/Saturation behavior. Each adjustment changes hue, saturation, and lightness. Use an entry without `localRange` for overall master edits, or add **`localRange`** for edits limited to REDS, YELLOWS, GREENS, CYANS, BLUES, or MAGENTAS. With `colorize` set to false, `localRange` is allowed only for non-master channels.
  - **`true`**: Colorize mode. The image is converted to a single hue tint, such as sepia, duotone, or a colored overlay. When `colorize` is true, do not use `localRange`. This is useful for toning or stylized color effects.
- **`hueSaturationAdjustments`**: Array containing adjustment entries. Every entry includes `hue`, `saturation`, and `lightness`; add **`localRange`** only for a specific color range, and leave it out for master (entire image).
  - **`hue`**: -180 to 180 (or 0 to 360 when colorize is true)
  - **`saturation`**: -100 to 100 (or 0 to 100 when colorize is true)
  - **`lightness`**: -100 to 100 (or 0 to 100 when colorize is true)
  - **`localRange`** (optional): The master channel does not use this field, and it is invalid when `colorize` is true. Use it only for non-master channels while `colorize` is false. It sets the color interval plus ramp/sustain boundaries (0-360 degrees).
    - **`channelId`** (required): `"REDS"`, `"YELLOWS"`, `"GREENS"`, `"CYANS"`, `"BLUES"`, `"MAGENTAS"`.
    - **`beginRamp`**: Feather begins here (0-360).
    - **`beginSustain`**: Full effect begins here (0-360).
    - **`endSustain`**: Full effect ends here (0-360).
    - **`endRamp`**: Feather ends here (0-360).
