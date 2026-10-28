# The Artwork Tree

Illustrator document contents are organized as the artwork tree. These object types represent artwork:

- compound path item
- graph item
- group item
- legacy text item
- mesh item
- non native item
- path item
- placed item
- plugin item
- raster item
- symbol item (see Dynamic Objects)
- text frame

Scripts access and change art objects by using collections on the document object and layer object.

Art-object collections come in two forms:

- Type-specific collection objects, such as the graph items object or the mesh items object, for each individual artwork object type.
- The page items object, a combined collection for art objects of every type.

For a grouped collection of art items, reference the group item object.

To create art objects, call the make command (AppleScript) or the add method on the appropriate artwork item collection object. A new path item object can be created like this:

| Language | Command |
| --- | --- |
| AppleScript | set myPathItem to make new path item in current document |
| JavaScript | var myPathItem = activeDocument.pathItems.add(); |
| VBScript | Set myPathItem = appRef.ActiveDocument.PathItems.Add() |

The make command and add method are not available for creating new objects in these artwork collections:

- graph items object
- mesh items object
- plugin items object
- legacy text items object

For details on creating objects of these types, see the Adobe lllustrator CC Scripting Reference for your language.
