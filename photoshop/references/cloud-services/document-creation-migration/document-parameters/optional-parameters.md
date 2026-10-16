# Optional parameters

**`fill`**

- Type: String or Object
- Default: `"white"`
- String options:
  - `"white"` - Sets a white background
  - `"background_color"` - Uses the configurable background color
  - `"transparent"` - Makes the background transparent
- Custom-color object form: `{"solidColor": {"rgb": {"red": R, "green": G, "blue": B}}}`
- Description: Document background fill

V1 and V2 handle `fill` differently

There are two breaking changes: (1) `"backgroundColor"` became `"background_color"`, so the V1 enum string `"backgroundColor"` fails in V2. Use `"background_color"` with the underscore. (2) Custom solid colors now use object syntax in V2; V1 was limited to the three string shortcuts, while V2 accepts `{"solidColor": {"rgb": {"red": R, "green": G, "blue": B}}}` for arbitrary colors.

**`mode`**

- Type: String
- Default: `"rgb"`
- Options: `"rgb"`, `"bitmap"`, `"grayscale"`, `"indexed"`, `"hsb"`, `"cmyk"`, `"lab"`, `"duotone"`, `"multichannel"`
- Description: Document color mode. Use the table below to choose a valid depth for the selected mode.

**`depth`**

- Type: Integer
- Default: `8` (when omitted)
- Values: `1`, `8`, `16`, or `32` as bit depth per channel. `mode` determines which combinations are valid:
  - **bitmap:** `1` only
  - **grayscale, rgb, hsb:** 8, 16, or 32
  - **cmyk, lab, multichannel:** 8 or 16
  - **indexed, duotone:** 8 only

| mode | Supported depths |
| --- | --- |
| bitmap | 1 |
| grayscale | 8, 16, 32 |
| rgb | 8, 16, 32 |
| hsb | 8, 16, 32 |
| cmyk | 8, 16 |
| lab | 8, 16 |
| multichannel | 8, 16 |
| indexed | 8 only |
| duotone | 8 only |

**`pixelScaleFactor`**

- Type: Number (Double)
- Default: `1` when omitted
- Range: Positive only, with 0.1 as the minimum
- Description: Image pixel scale factor, for example in high-DPI or Retina workflows

**`iccProfile`**

- Type: Object (`standard` or `custom`)
- Default: None (optional)
- Description: Color-management ICC profile applied while the document is created. Standard named profiles and custom `.icc` files are both supported.

  **Standard profile:** Use `{"type": "standard", "name": "<profile_name>"}` with one of these `name` values: Adobe RGB (1998), Apple RGB, ColorMatch RGB, sRGB IEC61966-2.1, Dot Gain 10%/15%/20%/25%/30%, Gray Gamma 1.8, Gray Gamma 2.2

  **Custom profile:** `{"type": "custom", "name": "<descriptive_name>", "source": {"url": "<icc_file_url>"}}` — set `source.url` to the `.icc` or `.icm` file location. Valid `imageMode` values are `"rgb"`, `"grayscale"`, and `"cmyk"`.

**`name`**

- Type: String
- Max length: 255 characters
- Description: Optional title/name for the document
