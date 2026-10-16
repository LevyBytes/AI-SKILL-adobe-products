# Top-Level (containing) Objects — Layer

The layer object opens access to the artwork tree and other contents belonging to one layer.

Reach a layer object from the document object.

Layer object properties expose or describe the layer, including:

- Visibility and lock state for the layer.
- Opacity (overall transparency) and z order position (position in the stacking order).
- Layer-level art-creation settings, including artwork knockout and blending mode.

app.activeDocument.layers[index]

### Description

Represents a layer in an Illustrator document. Nested layers can also live inside layers; in the user interface, those nested layers are called sublayers.

The layer object exposes the page items assigned to that particular layer as its elements.

Scripts may address page items through either the Layer object or the Document object. When a script uses a layer as the container, it reaches only objects on that layer. To work across all page items in the full document, reference them from the document instead.
