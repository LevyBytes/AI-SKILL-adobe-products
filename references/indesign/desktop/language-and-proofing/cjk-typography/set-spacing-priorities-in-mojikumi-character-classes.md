# Set spacing priorities in Mojikumi character classes

Define the compression sequence and spacing values for Japanese character classes so Adobe InDesign composes text with the behavior you want.

During Kinsoku processing and full justification, priority settings decide how character spacing is reduced. Those values set which character classes compress first, giving you finer control over composition quality.

Use this workflow when built-in Mojikumi presets are not precise enough for particular Japanese typography and you need to adjust character classes individually. CJK (Chinese, Japanese, and Korean) language support is required.

Priority values use 1 through 9. Classes with smaller numbers compress earlier; classes set to None are delayed until the end. Classes assigned the same priority compress together.
