# Page-item positioning and dimensions

Illustrator stores page item object positions in documents with simple two-dimensional point geometry. Each page item object in a document includes a position property, expressed as page coordinates in the form [x, y], that marks a fixed point. The object's bounding box supplies that point at its top-left corner.

For details about which object types belong to the page items collection, see "The artwork tree" on

A point uses two coordinates:

- horizontal position, x
- vertical position, y

When you select or create an object in Illustrator, the Info panel displays these coordinate values.

For an artboard, the default coordinate origin is (0,0), located at the top-left corner and reflected by the artboard object's ruler origin property. X coordinate values rise from left to right; Y coordinate values rise from top to bottom. CS5 changed this behavior. To keep older scripts compatible, a document made by a script still follows the earlier coordinate system: the origin sits at the bottom-left of the artboard and Y increases upward. The document object's page origin property sets a fixed point at the bottom-left corner of the document's printable region.

Every page item object includes width and height properties. For a page item, the largest allowed width or height value is 16348 points.
