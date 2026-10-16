# Scripting access to text baselines

Scripting lets you pull a text layer's baseline (x,y) coordinates. For TextDocument objects, the new sourceText.value.baselineLocs attribute hands back an array of floats giving each text line's baseline starting x and y value.

Line wraps in a paragraph text box are treated as multiple lines.

The array returns float values in the form of:

Column order notation; `N` denotes the number of lines.

```text
line0.start_x, line0.start_y, line0.end_x, line0.end_y, line1.start_x, line1.start_y, line1.end_x, line1.end_y … lineN-1.start_x, lineN-1.start_y, lineN-1.end_x, lineN-1.end_y
```

Note

When a line holds no characters, its start and end x and y values all come back as the maximum float value (3.402823466e+38F).
