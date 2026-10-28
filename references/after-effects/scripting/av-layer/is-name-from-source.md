# AVLayer.isNameFromSource

app.project.item(index).layer(index).isNameFromSource

### Description

true when the layer carries no deliberately assigned name yet holds a named source; here layer.name ends up matching layer.source.name. It is false if a name was set on the layer explicitly, or if the layer lacks a source altogether.

### Type

Boolean; read-only.
