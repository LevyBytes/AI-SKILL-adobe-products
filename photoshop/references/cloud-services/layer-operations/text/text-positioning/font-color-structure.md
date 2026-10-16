# Font color structure

Both V1 and V2 accept rgb, cmyk, lab, and gray. V1 allowed component values from 0–65535; V2 uses smaller ceilings:

| Color Model | V1 Fields | V2 Fields | V1 Range | V2 Range | Handling above the V2 ceiling |
| --- | --- | --- | --- | --- | --- |
| `rgb` | `red`, `green`, `blue` | `red`, `green`, `blue` | 0–65535 | 0–32768 | Use 32768 |
| `cmyk` | `cyan`, `magenta`, `yellowColor`, `black` | `cyan`, `magenta`, `yellow`, `black` | 0–65535 | 0–32768 | Use 32768 |
| `lab` | `luminance` | `l` | 0–65535 | 0–32768 | Use 32768 |
| `lab` | `a`, `b` | `a`, `b` | 0–65535 | -16384–16384 | Use 16384 |
| `gray` | `gray` | `gray` | 0–65535 | 0–32768 | Use 32768 |

Each component is mandatory; omitted components resolve to `0`.

V2 rejects any request whose `fontColor` component is above the permitted maximum. Before submitting a migrated V1 payload, clamp values that exceed the V2 range:

- `rgb`, `cmyk`, `gray`, `lab.l` — limit to **32768**. Example: V1 `red: 40000` → V2 `red: 32768`
- `lab.a`, `lab.b` — limit to **16384**. Example: V1 `a: 40000` → V2 `a: 16384`

**V2 field-name layout:** rgb, cmyk, lab, gray:

```json
{
  "fontColor": {
    "rgb": {
      "red": 32768,
      "green": 0,
      "blue": 0
    }
  }
}
```

```json
{
  "fontColor": {
    "cmyk": {
      "cyan": 32768,
      "magenta": 0,
      "yellow": 0,
      "black": 0
    }
  }
}
```

```json
{
  "fontColor": {
    "lab": {
      "l": 5000,
      "a": 10000,
      "b": -5000
    }
  }
}
```

```json
{
  "fontColor": {
    "gray": {
      "gray": 16384
    }
  }
}
```
