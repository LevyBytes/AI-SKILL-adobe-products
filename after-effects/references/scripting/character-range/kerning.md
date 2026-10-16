# CharacterRange.kerning

CharacterRange.kerning

### Description

The kerning-option character attribute for the Text layer range.

What this actually reports is the manual kerning figure, not the value computed by auto kerning.

- If autoKernType in the range is set to AutoKernType.`METRIC_KERN`, AutoKernType.`OPTICAL_KERN`, or is mixed, then this attribute will be returned as undefined.
- If autoKernType in the range is set to AutoKernType.`NO_AUTO_KERN`, and this attribute has a mixed value, it will be read as undefined.

Writing this value additionally turns on AutoKernType.`NO_AUTO_KERN` across the affected characters.

### Type

Integer value; read/write.
