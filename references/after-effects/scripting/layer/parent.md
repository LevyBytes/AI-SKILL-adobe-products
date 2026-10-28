# Layer.parent

app.project.item(index).layer(index).parent

### Description

This layer's parent, which may be null.

So that setting the parent produces no visible jump in the layer's transform, offset values are worked out to cancel any transforms sitting above this layer in the hierarchy.

To illustrate, when the new parent carries a 30-degree rotation, the child layer is given a -30-degree rotation.

Should you want to set the parent yet leave the child layer's transform values untouched, reach for the setParentWithJump method.

### Type

Layer object or null; read/write.
