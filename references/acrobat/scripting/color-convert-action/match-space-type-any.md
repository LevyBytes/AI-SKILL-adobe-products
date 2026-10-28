# matchSpaceTypeAny

| Version (Key) | Save-Prefs | Security | Product | Type | Access |
| --- | --- | --- | --- | --- | --- |
| 8.0 | No | No | Acrobat Pro only | Integer | R/W |

A bitmap of color space attributes (flags) earmarked for matching is what the matchSpaceTypeAny property holds. The action fires as soon as any one flag lines up.

You get at these flags via the colorConvertAction object's constants.spaceFlags object.

Note

Pairing the bitwise operators with the constants.spaceFlags bit flags lets you assign matchSpaceTypeAny.
