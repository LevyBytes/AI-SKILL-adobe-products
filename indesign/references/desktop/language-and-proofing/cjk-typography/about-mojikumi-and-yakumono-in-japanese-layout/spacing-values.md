# Spacing values

For every Mojikumi setting, character spacing is described with three values: Desired, Minimum, and Maximum. Together, these values give the composer room to adjust text.

- Desired value: the preferred spacing under ordinary conditions. InDesign uses it when text is composed without justification or kinsoku processing.
- Minimum value: the amount to which spacing may shrink when the composer needs more text on a line. This compression is used during kinsoku processing when characters that cannot end a line must move ahead.
- Maximum value: the largest spacing expansion allowed during full justification. When a line must occupy the full measure, InDesign can increase spacing across the line up to this limit.

Set these values as percentages of character width or as bu units. A bu is a fractional unit of the Zenkaku (1 em), produced by dividing the Zenkaku into smaller portions. Example conversions: 4 bu = 1/4 em; 2 bu = 1/2 em. Combining 2 bu 4 bu gives 3/4 em. You can see the adjustment while typing. Wider separation between Minimum and Maximum gives InDesign more freedom to tune spacing while preserving consistent text color.
