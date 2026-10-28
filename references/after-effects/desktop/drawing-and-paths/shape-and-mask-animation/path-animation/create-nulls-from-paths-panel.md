# Create Nulls from Paths panel

With the Create Nulls From Paths scriptUI panel, you can set up expression-driven animations that feel intuitive, all without typing expressions by hand. Linking one path to a shape, a shape to a solid, and so forth is done directly. Behind the scenes, the Create Nulls From Paths panel taps expression access to path points to wire up the nulls for you, sparing you from writing the expression.

For every path point on a mask path or Bezier shape path, the panel spawns nulls. The buttons below let you steer how those nulls behave:

- Points Follow Nulls: This button makes nulls that govern where the path points sit. The path points latch onto the nulls, so animating the nulls drives the path points.
- Nulls Follow Points: This button makes nulls whose positions answer to the path points. The nulls latch onto the path points, so animating the path points moves the nulls.
- Trace Path: This button makes a single null that rides along the path. That null's position is tied to the path's coordinates, and its rotation auto-orients to track the path. Trace Path governs how the null travels the path and whether it loops. Out of the box, keyframes are laid down to walk the path across 1 second, with looping turned on.
