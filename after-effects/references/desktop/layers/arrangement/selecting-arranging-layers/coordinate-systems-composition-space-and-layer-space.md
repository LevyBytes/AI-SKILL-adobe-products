# Coordinate systems: Composition space and layer space

A layer's own coordinate system is its layer space, while each composition has its own composition space. Anything living inside a layer — effect control points, anchor points, and the like — carries values in layer space, gauged from the origin of that particular layer's layer space. A layer's Position property is the exception: it states where the layer falls inside a composition, so it is read in that composition's composition space.

Slide the pointer across the layer frame in the Layer panel and the Info panel reports, in layer space, the coordinates of whatever pixel is beneath it. Horizontal placement is given by the X coordinate and vertical placement by the Y coordinate, both stated in pixels. Both are measured relative to the origin (0,0), which stays pinned at the layer's upper left corner.

The rulers' zero point is adjustable, but layer space's origin is not. Should the two no longer coincide, the Info panel adds X' and Y' coordinates beneath the X and Y values, reporting position relative to the rulers' zero point.

Slide the pointer over the composition frame in the Composition panel and the Info panel switches to composition-space coordinates. While you drag a layer, the bottom of the Info panel reports the coordinates of that layer's anchor point.
