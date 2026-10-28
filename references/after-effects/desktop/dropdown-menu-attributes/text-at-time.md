# textAtTime(time)

Return type: String

Fetches the text of the selected dropdown menu item at a chosen time, much as valueAtTime() does for other properties.

Syntax: dropdownProperty.textAtTime(time)

The time parameter (Number) is the moment in seconds at which to sample the dropdown menu. It accepts either an absolute time or a relative time expression like time - 1 (one second back).

Think of this as the time-aware counterpart to .text. Rather than reading the text on the current frame, you name exactly which time to sample. That makes it especially handy for delayed effects, for weighing current against previous selections, or for assembling intricate time-based logic.
