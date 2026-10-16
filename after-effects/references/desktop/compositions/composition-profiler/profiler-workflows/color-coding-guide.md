# Color coding guide

Lean on the color-coding guide: each color flags the render time you should expect from a particular layer or pre-comp anywhere in a project.

Color codes for different render times

Color codes for different render times

- Render times landing at real-time or half-real-time (measured against the composition frame rate) show up in shades of green.
- As values climb from 100ms up to 5 seconds, the color deepens from yellow through to red.
- When your composition's frame rate pushes real-time or half-time render times past one of the fixed stops, those fixed stops get skipped until the fixed stops exceed half-time.
