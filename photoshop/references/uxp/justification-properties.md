# JustificationProperties

Paragraph text justification is controlled through these property values.

Photoshop exposes the same controls in the Paragraph panel flyout item labeled "Justification...".
Represent the settings as an object literal; each value is a percentage:

Numeric justification fields:

| Fields | Meaning |
| --- | --- |
| `wordSpacingMinimum`, `wordSpacingDesired`, `wordSpacingMaximum` | Minimum, desired and maximum percentages of normal word spacing. |
| `letterSpacingMinimum`, `letterSpacingDesired`, `letterSpacingMaximum` | Minimum, desired and maximum percentages of normal letter spacing. |
| `glyphScalingMinimum`, `glyphScalingDesired`, `glyphScalingMaximum` | Minimum, desired and maximum percentages of normal glyph scaling. |
| `autoLeadingAmount` | Percentage of type size used for automatic leading. |

Before assignment, `justificationFeatures` reports `null`.
When setting it, you may provide selected properties only; omitted entries are either populated from defaults or kept as they were.

| Name | Type | Default | Range | Min Version | Description |
| --- | --- | --- | --- | --- | --- |
| autoLeadingAmount | _number_ | 120 | 0..500 | 24.1 | Auto leading percentage |
| glyphScalingDesired | _number_ | 100 | 50..200 | 24.1 | Desired glyph scaling - value must equal or fall between Minimum and Maximum. |
| glyphScalingMaximum | _number_ | 100 | 50..200 | 24.1 | Maximum glyph scaling - value cannot be lower than Minimum. |
| glyphScalingMinimum | _number_ | 100 | 50..200 | 24.1 | Minimum glyph scaling - value cannot exceed Maximum. |
| letterSpacingDesired | _number_ | 0 | 0..500 | 24.1 | Desired letter spacing - value must equal or fall between Minimum and Maximum. |
| letterSpacingMaximum | _number_ | 0 | 0..500 | 24.1 | Maximum letter spacing - value cannot be lower than Minimum. |
| letterSpacingMinimum | _number_ | 0 | 0..500 | 24.1 | Minimum letter spacing - value cannot exceed Maximum. |
| wordSpacingDesired | _number_ | 100 | 0..1000 | 24.1 | Desired word spacing - value must equal or fall between Minimum and Maximum. |
| wordSpacingMaximum | _number_ | 133 | 0..1000 | 24.1 | Maximum word spacing - value cannot be lower than Minimum. |
| wordSpacingMinimum | _number_ | 80 | 0..1000 | 24.1 | Minimum word spacing - value cannot exceed Maximum. |
