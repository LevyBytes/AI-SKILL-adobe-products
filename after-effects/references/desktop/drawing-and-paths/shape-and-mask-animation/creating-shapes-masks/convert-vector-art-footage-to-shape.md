# Convert vector art footage to shape

Starting from a vector art footage layer, you can generate a shape layer and edit it afterward. Because After Effects can bevel and extrude objects, the artwork itself becomes something you can extrude — think extruded logos.

The conversion happens through Layer > Create > Create Shapes from Vector Layer applied to a vector art footage layer. Once chosen, a corresponding shape layer lands above the footage layer, and that footage layer gets muted.

- PAR overrides set in the Interpret Footage dialog box are disregarded by the converted shapes.
- Where gradients or unsupported types appear, shapes may render as 50% gray.
- Import can run slowly and silently for files carrying thousands of paths.
- Only one selected layer at a time is processed by the menu command.
- Bringing in an Illustrator file as a composition (multiple layers) means those layers can't all be converted in a single pass. The workaround: import the file as footage instead, then run the command to turn that lone footage layer into shapes.
