# Create compound shapes

Use Pathfinder operations in Adobe InDesign to merge objects into editable compound shapes.

A compound shape can be handled as one object, or its component paths can be released for separate editing. For instance, one area of the compound shape can receive a gradient fill while other areas remain unfilled.

Open the document containing the objects.

Using the Selectiontool, select every object to combine.

Open the Pathfinder panel (Window > Object & Layout > Pathfinder).

In the Pathfinder panel, pick the option that matches the result you need:

- Add: merges the selected shapes into a single shape
- Subtract: cuts the front shapes out of the back shape
- Intersect: leaves only the area where the shapes overlap
- Exclude Overlap: leaves the regions that do not overlap
- Minus Back: cuts back shapes out of the front shape, producing holes

Usually, the new shape takes the frontmost object's fill, stroke, transparency, and layer settings. Subtract behaves differently: the front objects are discarded, so the remaining shape uses the backmost object's attributes.

When a text frame is part of a compound shape, only the frame outline changes; the text itself is not altered. To change the text, convert it to outlines first, then make the compound path. Release the compound path to break apart a compound shape.
