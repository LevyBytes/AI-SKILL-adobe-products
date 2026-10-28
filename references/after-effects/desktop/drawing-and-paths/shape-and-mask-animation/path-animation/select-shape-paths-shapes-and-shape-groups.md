# Select shape paths, shapes, and shape groups

Shape layers and the pieces inside them can be selected at four distinct levels, which go by the name selection modes:

Layer selection mode

Here the whole shape layer is chosen. Any transformation acts on the layer's transform properties over in the Transform property group, a group that sits at the same level as the Contents property group.

Group selection mode

Here a complete shape group is chosen. Transformations act on the group's transform properties, located in the Transform property group nested inside that shape group within the Timeline panel.

Free-transform mode

Here several vertices spread across one or more Bezier paths are chosen. The Composition panel wraps those vertices in a free-transform bounding box, and manipulating that box lets a single transformation shift many vertices at once. The transformations land on the vertices themselves, which live inside the Path property in the Timeline panel.

Path-editing mode

Here only vertices are chosen. This is the mode for path-editing work — adding vertices to a path, shifting individual vertices, and the like.

Note

- Path-editing mode kicks in automatically whenever a pen tool is active. To stay in path-editing mode, keep the Pen tool selected and tap V, or hold Ctrl (Windows) or Command (macOS), to call up the Selection tool only momentarily as needed.
- With a shape vertex selected, Ctrl+A (Windows) or Command+A (macOS) grabs every vertex on that path. A second press grabs all shapes; a third grabs all layers.
