# Non-Bin Breakers

A few layers carry a dotted outline around their 3D icon, Null layers, Camera, and Light among them, when they sit between other 3D layers. That dotted edge means the layer stays out of the bin yet leaves the bin intact. Cameras and lights, by their nature, are already 3D and act on the 3D layers within the comp, so they take no direct part in bins.

A. Doubled 3D cube icon B. 3D axis icon C. 3D cube icon D. No icon

Doubled 3D cube icon

Text layer with per-character 3D enabled.

3D axis icon

The layer is 3D, but does not render pixels.

3D cube icon

The layer is 3D, renders pixels in 3D.

No icon

The layer is 2D and will break the bin in most cases; certain cases (2D nulls, nested comps) can still participate in 3D bins.

Tip

- Switch a 3D layer's visibility off by clicking its eyeball switch. Doing so pulls that layer out of the bin and, depending on what sits above or below it, may either split the bin or simply not take part.
- Slotting 2D layers in among 3D layers spawns several 3D bins. Be aware that layers sitting in separate bins neither intersect nor throw shadows on one another, so build your 3D bins with that behaviour in mind.
