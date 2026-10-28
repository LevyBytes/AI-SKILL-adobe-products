# matchAttributesAny

| Version (Key) | Save-Prefs | Security | Product | Type | Access |
| --- | --- | --- | --- | --- | --- |
| 8.0 | No | No | Acrobat Pro only | Integer | R/W |

A bitmap of object attributes earmarked for matching is what the matchAttributesAny property holds. The action fires as soon as any one flag lines up.

You get at these flags via the colorConvertAction object's constants.objectFlags object.

Note

Pairing the bitwise operators with the constants.objectFlags bit flags lets you assign matchAttributesAny.
