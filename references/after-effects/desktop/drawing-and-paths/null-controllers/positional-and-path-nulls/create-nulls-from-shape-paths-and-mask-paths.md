# Create Nulls from Shape Paths and Mask Paths

Building Nulls off Path points hands you tighter command over involved Path animation and makes attaching other layers to your Paths painless.

Because the expression links running from the Path points to each connected Null can offset basic transforms inside nested Shape groups, those Nulls keep driving or tracking Path points accurately even when the Shape group transforms are themselves shifted or animated.

Originally these three commands for making Nulls from Shape and Mask paths lived in the Create Nulls from Paths.jsx ScriptUI panel under the Window menu. They've since been reworked and turned into menu commands.

Listed below are the three commands you can use to spawn Nulls from a Shape or Mask Path property's points:

- Null Controllers for Path Points: Build Null controllers for every point of a chosen Path or Mask Path property. Each Null governs where one point (vertex) on the Path sits, though Layer Control expression controls let points bind to other layers instead.
- Nulls Following Path Points: This spins up a Null layer per point of the selected Path properties. Instead of steering the point, each Null trails its matching Path point. That lets you parent other layers onto an animated Path by parenting them to a bound Null.
- Null Tracing Along Path: Produces a Null that runs along the chosen Path property, reorienting to hug the Path's curve and tracking whatever animation the Path has. A controller effect gets added to the Null layer so you can set how far it has traveled along the path and whether it loops back to the path's start on reaching the end.

### More like this

- Selecting and arranging layers
- Managing layers
- Creating layers
- Layer properties
