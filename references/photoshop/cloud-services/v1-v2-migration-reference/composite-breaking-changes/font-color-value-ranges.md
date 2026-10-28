# Font color value ranges

V1 allowed 0–65535 on every `fontColor` component. V2 applies smaller maximum values:

| Color Model | V1 Fields | V2 Fields | V1 Range | V2 Range | If V1 value exceeds V2 max |
| --- | --- | --- | --- | --- | --- |
| `rgb` | `red`, `green`, `blue` | `red`, `green`, `blue` | 0–65535 | 0–32768 | Use 32768 |
| `cmyk` | `cyan`, `magenta`, `yellowColor`, `black` | `cyan`, `magenta`, `yellow`, `black` | 0–65535 | 0–32768 | Use 32768 |
| `lab` | `luminance` | `l` | 0–65535 | 0–32768 | Use 32768 |
| `lab` | `a`, `b` | `a`, `b` | 0–65535 | -16384–16384 | Use 16384 |
| `gray` | `gray` | `gray` | 0–65535 | 0–32768 | Use 32768 |

All components must be present; omitted values default to `0`. Usage remains `fontColor.rgb`, `fontColor.cmyk`, `fontColor.lab`, and `fontColor.gray`.

> **TRAP — fontColor and solidColor use different-looking nesting rules:**
>
> - `characterStyle.fontColor` stays wrapped by the color model: `fontColor: {rgb: {red: 0, green: 0, blue: 0}}`
> - `solid_color_layer.fill.solidColor` likewise keeps `rgb`: `solidColor: {rgb: {red: 0, green: 0, blue: 0}}`
>
> Never put fontColor components directly under fontColor. Leave the `rgb` wrapper on `fill.solidColor`; both structures use `{rgb: {...}}` nesting.

**V2 rejects over-limit component values.** Clamp values before request submission:

- Clamp `rgb`, `cmyk`, `gray`, and `lab.l` to **32768**; example: V1 `red: 40000` → V2 `red: 32768`
- Clamp `lab.a` and `lab.b` to **16384**; example: V1 `a: 17000` → V2 `a: 16384`
