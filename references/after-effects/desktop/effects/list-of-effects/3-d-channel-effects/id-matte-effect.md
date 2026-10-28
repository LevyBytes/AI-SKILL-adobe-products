# ID Matte effect

A lot of 3D programs stamp every element in a scene with its own Object ID. Drawing on that data, the ID Matte effect builds a matte that leaves out everything in the scene apart from the element you're after.

Color depths of 8-bpc, 16-bpc, and 32-bpc all work here.

Original (upper-left), with ID Matte applied using the near alien as the ID Selection (lower-left), and composited over a new background (lower-right)

Aux. Channel

Isolate elements based on Object ID or Material ID.

Note

To find an object's ID, choose the ID type from the Aux. Channel menu over in the Effect Controls panel, then grab the Selection tool and click the object in the Composition or Layer panel while the effect is selected. When Aux. Channel is set to Object ID, ID Selection refreshes on its own to match the Object ID of whatever object you click.

Feather

How far the feathering extends in along the matte's edges.

Invert

Flips the selection. Tick it to matte out whatever object ID Selection points to. Leave it off to matte out all but that object (the default).

Use Coverage

Yields a tidier matte by stripping the colors held behind the object away from the pixels lining the matte's edge. It does something only when the 3D image carries a coverage channel that records which colors sit behind each object.

### More like this

- Importing and using 3D files from other applications
- 3D layers

## See also

- [Channel Effects](../channel-effects/reference-index.md)
