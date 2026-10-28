# Layer Methods

- `layer.duplicate(relativeObject?: Document | Layer, insertionLocation?: Constants.ElementPlacement, name?: string)`: Creates a copy above the layer in the layer stack and returns the new layer.
- `layer.delete()`: Removes this layer from the document.
- `layer.link()`: Links this layer with the target layer when they are not already linked, then returns the layers linked to this layer.
- `layer.unlink()`: Removes any links from the layer.
