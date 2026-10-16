# Use binning indicators for 3D layers

Binning indicators for 3D layers point out which 3D layers render together within one shared 3D space, letting them overlap and throw shadows onto one another. That cluster of 3D layers goes by the name Bin.

When a border wraps the 3D icons, it signals that those layers share a 3D bin and therefore render as a unit.

In the Timeline panel you'll see assorted layers, 3D ones included, bundled so they render within the same 3D bin.

What these 3D binning indicators give you is a visual chart of the way After Effects merges 2D and 3D layers. Once a comp holds both 2D and 3D layers, where each sits in the layer stack becomes significant:

- Adjacent 3D layers render as a group inside one 3D space first, and only afterward get composited alongside the 2D layers.
