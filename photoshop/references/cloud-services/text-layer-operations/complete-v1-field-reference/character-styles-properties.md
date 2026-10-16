# characterStyles properties

| V1 `characterStyles` Field | V2 ActionJSON `set textStyle` Property | Notes |
| --- | --- | --- |
| `size` | `size: {_unit: "pointsUnit", _value: N}` | Also include `textOverrideFeatureName: 808465458` and `typeStyleOperationType: 3` |
| `fontPostScriptName` | `fontPostScriptName: "..."` | Apply with `fontName` and `fontStyleName` |
| `color` | `color: {_obj: "RGBColor", red: N, green: N, blue: N}` |  |
| `leading` | `autoLeading: false, leading: {_unit: "pointsUnit", _value: N}` | Use `autoLeading: false` when disabling automatic leading |
| `tracking` | `tracking: N` | Integer measured in thousandths of an em (for example, `100` = 10% of em) |
| `syntheticBold` | `syntheticBold: true` | Simulated bold; use a real bold face if possible |
| `syntheticItalic` | `syntheticItalic: true` | Simulated italic; use a real italic face if possible |
| `fontCaps` | `fontCaps: {_enum: "fontCaps", _value: "..."}` | Values: `"allCaps"`, `"smallCaps"`, `"normal"` |
| `baseline` | `baselineDirection: {_enum: "baselineDirection", _value: "..."}` | Values: `"subScript"`, `"superScript"`, `"normal"` |
| `strikethrough` | `strikeThrough: {_enum: "strikeThrough", _value: "..."}` | Values: `"classicStrikeThrough"`, `"xHeightStrikeThrough"`, `"noStrikeThrough"` |
| `underline` | `underline: {_enum: "underline", _value: "..."}` | Values: `"underlineOnLeft"`, `"noUnderline"` |
| `verticalScale` | `verticalScale: N` | Percentage integer (for example, `120` = 120%) |
| `horizontalScale` | `horizontalScale: N` | Percentage integer (for example, `80` = 80%) |
| `ligature` | `ligature: true` | Standard ligatures such as fi and fl |
| `autoKern` | `autoKern: {_enum: "autoKern", _value: "..."}` | Values: `"metricsKern"`, `"opticalKern"`, `"manualKern"` |
| `stylisticAlternates` | UXP recommended | No standardized ActionJSON equivalent; use UXP for dependable coverage |
