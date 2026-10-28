# Depth Matte effect

By reading a 3D image's depth data, the Depth Matte effect lets you cut the image at any point along the z-axis. That makes it possible, for instance, to strip out a 3D scene's background or to drop new objects into a 3D scene.

Note

Inserting a layer into a 3D scene goes like this: apply Depth Matte to the layer holding the 3D scene, set the Depth property to the depth where the new layer should sit, duplicate the 3D scene layer, turn on Invert for the top 3D scene layer, then slot the new layer between the two 3D scene layers in the Timeline panel's stacking order.

Color depths of 8-bpc, 16-bpc, and 32-bpc are all supported.

Original (upper-left), with effect applied (lower-left), and with effect applied and Invert Alpha selected (lower-right)

Depth

The z-axis value at which to slice the image. Everything with a depth value less than this Depth value is matted out.

Note

To read an object's depth, pick the Selection tool and click the object in the Composition panel or Layer panel while the effect stays selected.

Feather

How far the feathering reaches in along the matte's edges.

Invert

When selected, anything whose depth exceeds the Depth value gets matted out. Deselect and it's everything below the Depth value that drops away instead.
