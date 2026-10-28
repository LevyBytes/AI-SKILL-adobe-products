# Effect control points

Certain effects come with effect control points that govern the way the effect acts on the layer. The Advanced Lightning effect, for instance, carries two of them — Origin and Direction — pinning down where the lightning starts and the direction it heads.

For layers that aren't continuously rasterized and whose transformations haven't been collapsed, effect control points live in layer space. Once a layer is continuously rasterized or has its transformations collapsed, though, those points shift into composition space. Learn more about coordinate systems: composition space and layer space and render order and collapsing transformations.

Because vector layers — shape and text included — are continuously rasterized, their effect control points stay in composition space at all times. Learn more about continuously rasterizing a layer containing vector graphics.

By default, effect control points sit in layer space for null object layers, solid-color layers, and the other layers built on source footage items.
